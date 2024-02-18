import { ScrollView, StatusBar, View } from "react-native";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import styles from "./styles";
import TitleTextPerfil from "../../../components/Perfil/TitleText";
import InputPerfil from "../../../components/Perfil/Input";
import { useContext, useState } from "react";
import AuthContext from "../../../contexts";
import ButtonPerfil from "../../../components/Perfil/Button";
import LoadingIndicator from "../../../components/Default/Loading";
import React from "react";

const UpdatePerfil = ({ navigation }) => {
  const { user, updateUser, loading } = useContext(AuthContext);
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
      ? `${user.Empresa[0].Endereco.cidade} - ${user.Empresa[0].Endereco.estado}`
      : `${user.Cliente[0].Endereco.cidade} - ${user.Cliente[0].Endereco.estado}`
  );
  // `${user.Cliente[0].Endereco.bairro} - ${user.Cliente[0].Endereco.cidade} - ${user.Cliente[0].Endereco.estado}`
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
  const handleUpdate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      email == "" ||
      telefone == "" ||
      endereco == "" ||
      cpf == "" ||
      !emailRegex.test(email)
    ) {
      throw new Error("Campos inválidos");
    }
    if (user.tipoUser == "empresa") {
      const dto = {
        user: { email },
        empresa: { nomeFantasia: nome, telefone },
      };
      const us = updateUser(dto);
    } else {
      const dto = { user: { email }, cliente: { nome, telefone, cpf } };
      const us = updateUser(dto);
    }
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
            title="Endereço:"
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
          <ButtonPerfil onPress={handleUpdate} />
        </View>
        <LoadingIndicator visible={loading} />
      </ScrollView>
    </View>
  );
};
export default UpdatePerfil;
