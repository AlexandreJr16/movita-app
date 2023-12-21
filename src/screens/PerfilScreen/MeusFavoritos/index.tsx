import { ScrollView, View } from "react-native";
import Texto from "../../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import BlackArrowPerfil from "../../../assents/Perfil/BlackArrow";
import SelectButton from "../../../components/Perfil/SelectButton";
import Lock from "../../../assents/Perfil/Lock";

const MeusFavoritos = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.bg}>
        <HeaderPerfil navigation={navigation} />
        <ShowPerfil />
        <View style={styles.container}>
          <SelectButton
            icon={<Lock />}
            arrow={<BlackArrowPerfil />}
            fontColor={"#000"}
            bgColor={"#fff"}
            onPress={() => {
              navigation.navigate("updatePerfil");
            }}
          >
            Detalhes da conta
          </SelectButton>
          <SelectButton
            icon={<Lock />}
            arrow={<BlackArrowPerfil />}
            fontColor={"#000"}
            bgColor={"#fff"}
            onPress={() => {
              navigation.navigate("updatePerfil");
            }}
          >
            Detalhes da conta
          </SelectButton>
          <SelectButton
            icon={<Lock />}
            arrow={<BlackArrowPerfil />}
            fontColor={"#000"}
            bgColor={"#fff"}
            onPress={() => {
              navigation.navigate("updatePerfil");
            }}
          >
            Detalhes da conta
          </SelectButton>
          <SelectButton
            icon={<Lock />}
            arrow={<BlackArrowPerfil />}
            fontColor={"#000"}
            bgColor={"#fff"}
            onPress={() => {
              navigation.navigate("updatePerfil");
            }}
          >
            Detalhes da conta
          </SelectButton>
          <SelectButton
            icon={<Lock />}
            arrow={<BlackArrowPerfil />}
            fontColor={"#000"}
            bgColor={"#fff"}
            onPress={() => {
              navigation.navigate("updatePerfil");
            }}
          >
            Detalhes da conta
          </SelectButton>
          <SelectButton
            icon={<Lock />}
            arrow={<BlackArrowPerfil />}
            fontColor={"#000"}
            bgColor={"#fff"}
            onPress={() => {
              navigation.navigate("updatePerfil");
            }}
          >
            Detalhes da conta
          </SelectButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MeusFavoritos;
