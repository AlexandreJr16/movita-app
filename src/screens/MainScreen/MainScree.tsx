import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../../contexts/auth";
import styles from "./styles";
import Texto from "../../components/texto/Texto";
import Logo from "../../components/Logo/Logo";


export default function MainScrenn() {
  const { token } = useContext(AuthContext);
  return (
    <View style={styles.background}>
      <SafeAreaView>
        <Logo color='#FFFFFF' size='50'></Logo>
        <View>
          <Texto weight="bold" style={styles.titleMessage}>Olá, Fulano</Texto>
          <Texto weight="bold" style={styles.subtitleMessage}>Seja bem-vindo(a) ao Movita!</Texto>
        </View>
      </SafeAreaView>
    </View>
  );
}
