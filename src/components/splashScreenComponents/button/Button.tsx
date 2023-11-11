import { Pressable } from "react-native";
import Texto from "../../texto/Texto";
import { Image } from "react-native";
import styles from "./styles";

type ButtonDTO = {
  children: string;
  colorBg: string;
  color: string;
};

export default function Button({ children, colorBg, color }: ButtonDTO) {
  const img =
    color == "#1f1f1f"
      ? require("../../../assents/blackArrow.png")
      : require("../../../assents/whiteArrow.png");
  return (
    <Pressable style={[{ backgroundColor: colorBg }, styles.button]}>
      <Texto
        weight="regular"
        fontSize={16}
        style={{ color: color, marginLeft: 5, marginTop: 5 }}
      >
        {children}
      </Texto>
      <Image source={img} style={styles.arrowImage} />
    </Pressable>
  );
}
