import { ScrollView, View } from "react-native";
import Texto from "../../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import styles from "./styles";

const MeusProjetos = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.bg}>
        <HeaderPerfil navigation={navigation} />
        <ShowPerfil />
        <View style={styles.container}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MeusProjetos;
