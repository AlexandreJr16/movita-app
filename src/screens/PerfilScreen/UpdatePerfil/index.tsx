import { SafeAreaView, ScrollView, View } from "react-native";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import styles from "./styles";

const UpdatePerfil = () => {
  return (
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.bg}>
        <HeaderPerfil />
        <ShowPerfil />
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UpdatePerfil;
