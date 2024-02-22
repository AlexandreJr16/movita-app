import { ScrollView, StatusBar, View } from "react-native";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import styles from "./styles";
import TitleTextPerfil from "../../../components/Perfil/TitleText";
import InputPerfil from "../../../components/Perfil/Input";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts";
import ButtonPerfil from "../../../components/Perfil/Button";
import LoadingIndicator from "../../../components/Default/Loading";
import React from "react";
import cep from "cep-promise";
import { err } from "react-native-svg/lib/typescript/xml";
import EmpresaDTO from "../../../contexts/dto/empresa.dto";
import { updateUserDTO } from "../../../contexts/dto/updateUser.dto";
import ErrorAlert from "../../../components/ErrorAlert/ErrorAlert";

interface Local {
  cep: string;
  city: string;
  neighborhood: string;
  service: string;
  state: string;
  street: string;
}

const UpdatePerfil = ({ navigation }) => {
  const { user, updateUser, loading } = useContext(AuthContext);
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
  const handleUpdate = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let local: Local;
    try {
      local = await cep(`${endereco}`);
    } catch (error) {
      setText("Algum campo está errado.");
      return;
    }
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
      const { status } = await updateUser(dto);
      if (status == "ok") navigation.goBack();
    } else if (user.tipoUser == "cliente") {
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
      const { status } = await updateUser(dto);
      if (status == "ok") navigation.goBack();
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
