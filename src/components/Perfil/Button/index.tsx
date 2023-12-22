import Texto from "../../texto/Texto";
import styles from "./styles";
import { Pressable, View } from "react-native";

const ButtonPerfil = ({ onPress }: { onPress?: Function }) => {
  return (
    <Pressable style={styles.btn}>
      <Texto weight="bold" style={styles.txt}>
        Alterar
      </Texto>
    </Pressable>
  );
};
export default ButtonPerfil;
