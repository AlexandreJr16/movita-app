import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, StatusBar, View } from "react-native";
import BlueBack from "../../../../assents/Cadastro/BlueBack";
import styles from "../../styles";
import Logo from "../../../../assents/Perfil/Logo";
import InputCadastro from "../../../../components/Cadastro/Input/InputCadastro";
import LoadingIndicator from "../../../../components/Default/Loading";
import Texto from "../../../../components/Default/texto/Texto";
import Carrossel from "../../../../components/Login/Carrossel/Carrossel";
import LoginButton from "../../../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../../../contexts";

const SignUpScreen6 = ({ navigation }) => {
  const { loading } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar translucent={true} barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <View style={styles.logo1}>
              <Pressable onPress={undefined}>
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
              Sei lá oq
            </Texto>
          </View>
          <View style={styles.inputContainer}>
            <InputCadastro
              styleContainer={{ width: "100%" }}
              text={"Não sei oq"}
              func={(value) => () => {}}
            >
              Não sei oq
            </InputCadastro>

            <InputCadastro
              styleContainer={{ width: "100%" }}
              text={"Nao sei oq"}
              func={(value) => () => {}}
            >
              nao sei oq
            </InputCadastro>
          </View>

          <LoginButton text="nao sei oq" func={() => {}} />
          <LoadingIndicator visible={loading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen6;
