import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../../contexts/auth";
import styles from "./styles";
import Texto from "../../components/texto/Texto";
import Logo from "../../components/Logo/Logo";
import HeaderMain from "../../components/Main/Header";

export default function MainScrenn() {
  const {} = useContext(AuthContext);
  return (
    <View style={styles.background}>
      <SafeAreaView style={{ backgroundColor: "#1f1f1f" }}>
        <HeaderMain />
      </SafeAreaView>
    </View>
  );
}
