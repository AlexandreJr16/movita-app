import { View, Image } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./styles";
import React from "react";
import Carrossel from "../../components/Login/Carrossel/Carrossel";
import Logo from "../../assents/Login/Logo";
import { SafeAreaView } from "react-native-safe-area-context";

const carousel = [{ color: "1f1f1f", imgSource: "www" }];

const Login = () => {
  return (
    <SafeAreaView>
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
      </View>
    </SafeAreaView>
  );
};
export default Login;
