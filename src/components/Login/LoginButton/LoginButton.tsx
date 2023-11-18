import { Button, View, Pressable } from "react-native";
import LoginButtonDTO from "./LoginButtonDTO";
import React from "react";
import Texto from "../../texto/Texto";
import styles from "./styles";

const LoginButton = ({ text, func }: LoginButtonDTO) => {
  return (
    <Pressable style={styles.button} onPress={func}>
      <Texto weight="regular" style={styles.texto}>
        {text}
      </Texto>
    </Pressable>
  );
};
export default LoginButton;
