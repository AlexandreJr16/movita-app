import { View, Image, ScrollView, Pressable } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./styles";
import { useState, useContext } from "react";
import Carrossel from "../../components/Login/Carrossel/Carrossel";
import Logo from "../../assents/Login/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import InputLogin from "../../components/Login/Input/InputLogin";
import UserIcon from "../../assents/Login/UserIcon";
import SecurityIcon from "../../assents/Login/SecurityIcon";
import LoginButton from "../../components/Login/LoginButton/LoginButton";
import React from "react";
import AuthContext from "../../contexts/auth";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleEmail = (email: string) => {
    setEmail(email);
  };
  const handlePassword = (password: string) => {
    setPassword(password);
  };
  const handleLogin = async () => {
    const response = await signIn(email, password);
    console.log(response);
  };

  const redirectToSignUp = () => {
    console.log("Olá, ihago 17/11/2023");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
          </View>
          <View style={styles.inputContainer}>
            <InputLogin
              Icon={<UserIcon />}
              placeholder="E-mail:"
              func={handleEmail}
            ></InputLogin>
            <InputLogin
              Icon={<SecurityIcon />}
              placeholder="Senha:"
              secureText={true}
              func={handlePassword}
            ></InputLogin>
            <View style={styles.forgetPContainer}>
              <Texto weight="regular" style={styles.forgetPassword}>
                Esqueceu a senha?
              </Texto>
              <Pressable onPress={redirectToSignUp}>
                <Texto weight="regular" style={styles.blueForgetPassword}>
                  Clique Aqui.
                </Texto>
              </Pressable>
            </View>
          </View>

          <LoginButton text="Entrar" func={handleLogin} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
