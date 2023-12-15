import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../../contexts/auth";
import styles from "./styles";
import Texto from "../../components/texto/Texto";
import Logo from "../../components/Logo/Logo";
import HeaderMain from "../../components/Main/Header";

export default function MainScrenn() {
  const { token, user } = useContext(AuthContext);
  const { nome } = user;
  return (
    <View style={styles.background}>
      <SafeAreaView>
        <HeaderMain image={user.imagem} name={nome} />
      </SafeAreaView>
    </View>
  );
}
