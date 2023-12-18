import { ScrollView, View } from "react-native";
import Texto from "../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import HeaderMain from "../../components/Main/Header";
import SelectCategory from "../../components/Main/SelectCategory";

const PerfilScreen = () => {
  return (
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.background}>
        <HeaderMain />
        <SelectCategory />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerfilScreen;
