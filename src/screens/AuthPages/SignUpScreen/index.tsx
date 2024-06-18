import React, { useContext, useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import BlueBack from "../../../assents/Cadastro/BlueBack";
import Logo from "../../../assents/Perfil/Logo";
import InputCadastro from "../../../components/Cadastro/Input/InputCadastro";
import LoadingIndicator from "../../../components/Default/Loading";
import Texto from "../../../components/Default/texto/Texto";
import ErrorAlert from "../../../components/ErrorAlert/ErrorAlert";
import Carrossel from "../../../components/Login/Carrossel/Carrossel";
import LoginButton from "../../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../../contexts/auth.context";
import styles from "./styles";

const SignUpScreen = ({ navigation }: any) => {
  const { signupUser, setSignupUser } = useContext(AuthContext);
  const { loading } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);

  const handleNome = (value: any) =>
    setSignupUser({ ...signupUser, nome: value });
  const handleSobrenome = (value: any) =>
    setSignupUser({ ...signupUser, sobrenome: value });

  const handleSubmit = () => {
    const isError =
      signupUser.nome == undefined || signupUser.sobrenome == undefined;
    if (isError) {
      setError("Nome ou Sobrenome inválidos.");
    } else {
      navigation.navigate("signup2");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar translucent={true} barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <View style={styles.logo1}>
              <Pressable
                onPress={() => {
                  setSignupUser({} as signupUser);
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
              text={signupUser.nome}
              func={(value: any) => {
                handleNome(value);
                if (!!error) setError(null);
              }}
            >
              Nome:
            </InputCadastro>

            <InputCadastro
              styleContainer={{ width: "100%" }}
              text={signupUser.sobrenome}
              func={(value: any) => {
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
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
