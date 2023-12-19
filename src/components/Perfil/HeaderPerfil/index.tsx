import { Pressable, View } from "react-native";
import Arrow from "../../../assents/Perfil/Arrow";
import LogoWhiteBlack from "../../../assents/Perfil/Logo";
import styles from "./styles";

const HeaderPerfil = ({ navigation }: { navigation?: any }) => {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => {
          try {
            navigation.goBack();
          } catch (error) {
            console.log("Apenas tentou voltar mais que podia");
          }
        }}
      >
        <Arrow />
      </Pressable>
      <LogoWhiteBlack />
    </View>
  );
};
export default HeaderPerfil;
