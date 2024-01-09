import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import React from "react";

const MeusFavoritos = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.background}>
      <StatusBar
        translucent={true}
        backgroundColor={"#1f1f1f"}
        barStyle="light-content"
      />
      <ScrollView>
        <HeaderPerfil navigation={navigation} />
        <ShowPerfil />
        <View style={styles.container}></View>
      </ScrollView>
    </View>
  );
};
export default MeusFavoritos;
