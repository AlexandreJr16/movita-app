import React from "react";
import { View, ScrollView, Pressable, StatusBar } from "react-native";
import { useState, useContext } from "react";

import styles from "./styles";
import Carrossel from "../../../components/Login/Carrossel/Carrossel";
import Logo from "../../../components/Default/Logo/Logo";
import InputLogin from "../../../components/Login/Input/InputLogin";
import UserIcon from "../../../assents/Login/UserIcon";
import SecurityIcon from "../../../assents/Login/SecurityIcon";
import LoginButton from "../../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../../contexts/auth.context";
import ErrorAlert from "../../../components/ErrorAlert/ErrorAlert";
import LoadingIndicator from "../../../components/Default/Loading";
import Texto from "../../../components/Default/texto/Texto";
import { User, LockSimple } from "phosphor-react-native";

const Login = ({ navigation }: { navigation: any }) => {
  const { signIn, loading, signed } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const handleEmail = (email: string) => {
    setEmail(email);
  };
  const handlePassword = (password: string) => {
    setPassword(password);
  };
  const handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "" || password == "") {
      setText("Email/Senha não podem ser nulos");
      return;
    } else if (!emailRegex.test(email)) {
      setText("Digite um email válido");
      return;
    } else setText("");
    const response = await signIn(email, password);
    if (response && response.message) {
      setText(response.message);
    }

    if (!signed) {
      return;
    }
  };

  const redirectToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const redirectToForgetPassword = () => {
    navigation.navigate("Forgot");
  };

  return (
    // <View style={styles.container}>
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={"#1f1f1f"} barStyle="light-content" />
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.carrossel}>
          <Carrossel />
        </View>
        <View style={styles.textContainer}>
          <Texto weight="regular" style={styles.title}>
            Bem-vindo!
          </Texto>
          <Texto weight="regular" style={styles.smallTitle}>
            Acesse a sua conta:
          </Texto>
          <ErrorAlert isAlert={text != null} styles={styles.errorText}>
            {text}
          </ErrorAlert>
        </View>
        <View style={styles.inputContainer}>
          <InputLogin
            Icon={<User color="#878787" size={32} />}
            placeholder="E-mail:"
            func={handleEmail}
          ></InputLogin>
          <InputLogin
            Icon={<LockSimple color="#878787" size={32} />}
            placeholder="Senha:"
            secureText={true}
            func={handlePassword}
          ></InputLogin>
          <View style={styles.forgetPContainer}>
            <Texto weight="regular" style={styles.forgetPassword}>
              Esqueceu a senha?
            </Texto>
            <Pressable onPress={redirectToForgetPassword}>
              <Texto
                weight="regular"
                style={text == "" ? styles.blueSignUp : styles.errorText}
              >
                Clique Aqui.
              </Texto>
            </Pressable>
          </View>
        </View>

        <LoginButton text="Entrar" func={handleLogin} />
        <View style={styles.signUpContainer}>
          <Texto weight="regular" style={styles.signIn}>
            Não possui conta?
          </Texto>
          <Pressable
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={redirectToSignUp}
          >
            <Texto
              weight="regular"
              style={text == "" ? styles.blueSignUp : styles.errorText}
            >
              Cadastre-se.
            </Texto>
          </Pressable>
          <LoadingIndicator visible={loading} />
        </View>
      </View>
    </ScrollView>
    // </View>
  );
};
export default Login;
