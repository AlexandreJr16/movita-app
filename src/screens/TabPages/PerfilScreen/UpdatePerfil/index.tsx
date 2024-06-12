import { ScrollView, StatusBar, View } from "react-native";
import styles from "./styles";
import { useContext, useEffect, useState } from "react";
import React from "react";
import cep from "cep-promise";
import LoadingIndicator from "../../../../components/Default/Loading";
import ErrorAlert from "../../../../components/ErrorAlert/ErrorAlert";
import ButtonPerfil from "../../../../components/Perfil/Button";
import HeaderPerfil from "../../../../components/Perfil/HeaderPerfil";
import InputPerfil from "../../../../components/Perfil/Input";
import ShowPerfil from "../../../../components/Perfil/ShowPerfil";
import TitleTextPerfil from "../../../../components/Perfil/TitleText";
import AuthContext from "../../../../contexts/auth.context";
import { updateUserDTO } from "../../../../contexts/dto/updateUser.dto";
import UserContext from "../../../../contexts/user.context";

interface Local {
  cep: string;
  city: string;
  neighborhood: string;
  service: string;
  state: string;
  street: string;
}

const UpdatePerfil = ({ navigation }) => {
  const { user, loading } = useContext(AuthContext);
  const { updateUser } = useContext(UserContext);

  //Set de use states para cada input da página
  //Passível de futuras atualizações com alguma dependencia que diminua a quantidade de use states e deixe o código mais limpo
  const [text, setText] = useState(null);
  const [nome, setNome] = useState<string>(
    user.tipoUser == "empresa"
      ? user.Empresa[0].nomeFantasia
      : user.Cliente[0].nome
  );
  const [email, setEmail] = useState<string>(user.email);
  const [telefone, setTelefone] = useState<string>(
    user.tipoUser == "empresa"
      ? user.Empresa[0].telefone
      : user.Cliente[0].telefone
  );
  const [endereco, setEndereco] = useState<string>(
    user.tipoUser == "empresa"
      ? `${user.Empresa[0].Endereco.cep}`
      : `${user.Cliente[0].Endereco.cep}`
  );
  const [cpf, setCpf] = useState(
    user.tipoUser == "empresa" ? user.Empresa[0].cnpj : user.Cliente[0].cpf
  );

  //handle de cada useState
  const handleNome = (value: any) => {
    setNome(value);
  };
  const handleEmail = (value: any) => {
    setEmail(value);
  };
  const handleTelefone = (value: any) => {
    setTelefone(value);
  };
  const handleEndereco = (value: any) => {
    setEndereco(value);
  };
  const handleCpf = (value: any) => {
    setCpf(value);
  };

  //Função que faz o update
  const handleUpdate = async () => {
    //Verifica se email é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let local: Local;
    try {
      //Tenta consultar a existência do endereço de acordo com o CEP
      local = await cep(`${endereco}`);
      console.log(local);
    } catch (error) {
      setText("Algum campo está errado.");

      return;
    }
    //Se as válidações acima derem certo, retira a mensagem de erro
    setText(null);
    if (
      email == "" ||
      telefone == "" ||
      endereco == "" ||
      cpf == "" ||
      !emailRegex.test(email)
    ) {
      console.log("Campos inválidos");
    } else if (user.tipoUser == "empresa") {
      //Se o usuário for empresa cria um objeto que será enviado para a api
      const dto = {
        email,
        tipoUser: user.tipoUser,
        Empresa: [
          {
            cpf: cpf,
            nomeFantasia: nome,
            telefone,
            Endereco: {
              cidade: local.city,
              bairro: local.neighborhood,
              estado: local.state,
              cep: local.cep,
            },
          },
        ],
      } as updateUserDTO;
      //O "as updateUserDTO" é apenas para evitar um erro do TS (Gambiarrra)
      console.log(dto);
      //Faz o updateUse na api e recebe o atributo status do retorno
      const { status } = await updateUser(dto);
      console.log(status);

      //verifica se o retorno foi "ok" e retorna para a APIs
      if (status == "ok") navigation.goBack();
      else {
        //Tratamento de erro ao update
      }
    } else if (user.tipoUser == "cliente") {
      //Objeto de updateno caso de cliente
      const dto = {
        email,
        tipoUser: user.tipoUser,
        Cliente: [
          {
            cpf: cpf,
            nome: nome,
            telefone,
            Endereco: {
              cidade: local.city,
              bairro: local.neighborhood,
              estado: local.state,
              cep: local.cep,
            },
          },
        ],
      } as updateUserDTO;
      //Faz o updateUse na api e recebe o atributo status do retorno
      try {
        const response = await updateUser(dto);

        //verifica se o retorno foi "ok" e retorna para a APIs
        if (response) navigation.goBack();
        else {
          //Objeto de updateno caso de cliente
        }
      } catch (error) {
        console.log(error);
      }
    } else setText("Algum campo está errado.");
  };

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={"#1f1f1f"} barStyle="light-content" />
      <ScrollView>
        <HeaderPerfil navigation={navigation} />
        <ShowPerfil />
        <View style={styles.container}>
          <TitleTextPerfil>Detalhes da conta</TitleTextPerfil>
          <InputPerfil
            title="Nome:"
            func={(value) => {
              handleNome(value);
            }}
            value={nome}
          />
          <InputPerfil
            title="E-mail:"
            func={(value) => {
              handleEmail(value);
            }}
            value={email}
          />
          <InputPerfil
            title="Telefone:"
            func={(value) => {
              handleTelefone(value);
            }}
            value={telefone}
          />
          <InputPerfil
            title="CEP:"
            func={(value) => {
              handleEndereco(value);
            }}
            value={endereco}
          />
          <InputPerfil
            title="CPF/CNPJ:"
            func={(value) => {
              handleCpf(value);
            }}
            value={cpf}
          />

          <ErrorAlert isAlert={text != null} styles={styles.errorText}>
            {text}
          </ErrorAlert>
          <ButtonPerfil onPress={handleUpdate} />
        </View>
        <LoadingIndicator visible={loading} />
      </ScrollView>
    </View>
  );
};
export default UpdatePerfil;
