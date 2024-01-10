import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import { Pressable, View } from "react-native";

const ButtonPerfil = ({ onPress }: { onPress?: any }) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Texto weight="bold" style={styles.txt}>
        Alterar
      </Texto>
    </Pressable>
  );
};
export default ButtonPerfil;
