import { ScrollView, View } from "react-native";
import Texto from "../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import HeaderMain from "../../components/Main/Header";
import SelectCategory from "../../components/Main/SelectCategory";
import HeaderPerfil from "../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../components/Perfil/ShowPerfil";

const PerfilScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.bg}>
        <HeaderPerfil />
        <ShowPerfil />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerfilScreen;
