import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assents/Login/Logo";
import Carrossel from "../../components/Login/Carrossel/Carrossel";
import styles from "./styles";
import Texto from "../../components/texto/Texto";
import InputCadastro from "../../components/Cadastro/Input/InputCadastro";

const SignUpScreen = () => {
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
              Informe seu nome completo:
            </Texto>
          </View>
          <View style={styles.inputContainer}>
            <InputCadastro>Nome</InputCadastro>
            <InputCadastro>Sobrenome</InputCadastro>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUpScreen;
