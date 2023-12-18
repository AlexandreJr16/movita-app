import { View } from "react-native";
import Arrow from "../../../assents/Perfil/Arrow";
import LogoWhiteBlack from "../../../assents/Perfil/Logo";
import styles from "./styles";

const HeaderPerfil = () => {
  return (
    <View style={styles.header}>
      <Arrow />
      <LogoWhiteBlack />
    </View>
  );
};
export default HeaderPerfil;
