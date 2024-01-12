import React, { useContext, useState } from "react";
import { Pressable, ScrollView, StatusBar, View } from "react-native";
import Logo from "../../components/Default/Logo/Logo";
import Carrossel from "../../components/Login/Carrossel/Carrossel";
import styles from "./styles";
import Texto from "../../components/Default/texto/Texto";
import InputCadastro from "../../components/Cadastro/Input/InputCadastro";
import BlueBack from "../../assents/Cadastro/BlueBack";
import LoginButton from "../../components/Login/LoginButton/LoginButton";
import DropDCadastro from "../../components/Cadastro/DropDown/DropDownCad";
import AuthContext from "../../contexts";
import LoadingIndicator from "../../components/Default/Loading";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";

const SignUpScreen = ({ navigation }) => {
  const { loading } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [error, setError] = useState(null);

  const handleNome = (value) => setNome(value);
  const handleSobrenome = (value) => setSobrenome(value);
  const handleSubmit = () => {
    const isError = nome == "" || sobrenome == "";
    if (isError) {
      setError("Nome ou Sobrenome inválidos.");
    } else {
      navigation.navigate("signup2");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar translucent={true} barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <View style={styles.logo1}>
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <BlueBack />
              </Pressable>
            </View>
            <View style={styles.logo2}>
              <Logo />
            </View>
          </View>
          <View style={styles.carrossel}>
            <Carrossel />
          </View>
          <View style={styles.textContainer}>
            <Texto weight="regular" style={styles.title}>
              Informe seu nome completo{" "}
            </Texto>
            <ErrorAlert isAlert={!!error} styles={styles.errorText}>
              {error}
            </ErrorAlert>
          </View>
          <View style={styles.inputContainer}>
            <InputCadastro
              styleContainer={{ width: "100%" }}
              text={nome}
              func={(value) => {
                handleNome(value);
                if (!!error) setError(null);
              }}
            >
              Nome:
            </InputCadastro>

            <InputCadastro
              styleContainer={{ width: "100%" }}
              text={sobrenome}
              func={(value) => {
                handleSobrenome(value);
                if (!!error) setError(null);
              }}
            >
              Sobrenome:
            </InputCadastro>
          </View>

          <LoginButton text={"Próximo"} func={handleSubmit} />
          <LoadingIndicator visible={loading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

// const handleSignUp = async () => {
//   try {
//     if (formData.senha !== formData.confirmaSenha) return;

//     const data = new Date(
//       Number(formData.ano),
//       valorMesParaNumero(formData.mes) + 1,
//       Number(formData.dia)
//     );

//     const formatedData = data.toISOString();
//     const obj = {
//       email: formData.email,
//       senha: formData.senha,
//       nome: formData.nome,
//       telefone: formData.telefone,
//       cpf: formData.cpf,
//       sexo: formData.sexo,
//       nascimento: formatedData,
//       cep: formData.cep,
//       estado: formData.estado,
//       bairro: formData.bairro,
//       cidade: formData.cidade,
//       tipo_usuario: "cliente",
//     };

//     const response = await signUp(obj);
//   } catch (error) {
//     console.log(error);
//   }
// };
