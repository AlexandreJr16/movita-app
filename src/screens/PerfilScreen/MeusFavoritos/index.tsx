import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import React from "react";

const MeusFavoritos = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <StatusBar
        translucent={true}
        backgroundColor={"#1f1f1f"}
        barStyle="light-content"
      />
      <ScrollView style={styles.bg}>
        <HeaderPerfil navigation={navigation} />
        <ShowPerfil />
        <View style={styles.container}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MeusFavoritos;
