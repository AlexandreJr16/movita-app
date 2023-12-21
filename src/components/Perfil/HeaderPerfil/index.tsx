import { Pressable, View } from "react-native";
import Arrow from "../../../assents/Perfil/Arrow";
import LogoWhiteBlack from "../../../assents/Perfil/Logo";
import styles from "./styles";
import Logo from "../../Logo/Logo";

const HeaderPerfil = ({
  navigation,
  visibleLogo,
}: {
  navigation?: any;
  visibleLogo?: boolean;
}) => {
  return (
    <View style={styles.header}>
      <Pressable
        style={visibleLogo ? { opacity: 0 } : {}}
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
      <Logo color="#FFFFFF" size="35" style={styles.logo}></Logo>
    </View>
  );
};
export default HeaderPerfil;
