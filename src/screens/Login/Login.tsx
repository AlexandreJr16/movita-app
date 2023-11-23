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
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";

const Login = ({ navigation }) => {
  const { signIn, user } = useContext(AuthContext);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleEmail = (email: string) => {
    setEmail(email);
  };
  const [text, setText] = useState<string>();
  const handlePassword = (password: string) => {
    setPassword(password);
  };
  const handleLogin = async () => {
    const oi = await signIn(email, password);
    if (oi != undefined) console.log("vai se foder caua");
  };

  const redirectToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const redirectToForgetPassword = () => {};

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
            <ErrorAlert isAlert={text != null} styles={styles.errorText}>
              {text}
            </ErrorAlert>
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
              <Pressable onPress={redirectToForgetPassword}>
                <Texto weight="regular" style={styles.blueForgetPassword}>
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
            <Pressable onPress={redirectToSignUp}>
              <Texto weight="regular" style={styles.blueSignUp}>
                Cadastre-se.
              </Texto>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
