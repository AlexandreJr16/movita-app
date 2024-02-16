import React from "react";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import { Pressable, View } from "react-native";

const ButtonImageModalPicker = ({
  onPress,
  text,
}: {
  onPress?: any;
  text?: string;
}) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Texto weight="bold" style={styles.txt}>
        {text}
      </Texto>
    </Pressable>
  );
};
export default ButtonImageModalPicker;
