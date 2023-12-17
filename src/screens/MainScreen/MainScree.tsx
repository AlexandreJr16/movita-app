import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../../contexts/auth";
import styles from "./styles";
import Texto from "../../components/texto/Texto";
import Logo from "../../components/Logo/Logo";
import Carrossel from "../../components/Login/Carrossel/Carrossel";
import NavBar from "../../components/NavBar/NavBar";

export default function MainScrenn() {
  const { token, user } = useContext(AuthContext);
  const { nome } = user;
  return (
    <View style={styles.background}>

        <View style={styles.topPage}>
          <SafeAreaView>
            <View style={styles.logo}>
              <Logo color="#FFFFFF" size="32"/>
            </View>
            
            
            <View style={styles.welcome}>
              <View style={styles.message}>
                <Texto weight="bold" style={styles.titleMessage}>
                  Olá, {nome}!
                </Texto>
                <Texto weight="bold" style={styles.subtitleMessage}>
                  Seja bem-vindo ao Movita!
                </Texto>
              </View>
      
              <View style={styles.photo}></View>
            </View>
          </SafeAreaView>
        </View>

        <NavBar/>


    </View>
  );
}
