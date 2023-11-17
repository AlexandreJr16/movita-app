import { Pressable } from "react-native";
import Texto from "../../texto/Texto";
import { Image } from "react-native";
import styles from "./styles";
import React from "react";
import BlackArrow from "../../../assents/Splash/BlackArrow";
import WhiteArrow from "../../../assents/Splash/WhiteArrow";

type ButtonDTO = {
  children: string;
  colorBg: string;
  color: string;
  onPress: () => void;
};

export default function Button({
  children,
  colorBg,
  color,
  onPress,
}: ButtonDTO) {
  const img =
    color == "#1f1f1f" || color == "#1F1F1F" ? <BlackArrow /> : <WhiteArrow />;

  return (
    <Pressable
      style={[{ backgroundColor: colorBg }, styles.button]}
      onPress={onPress}
    >
      <Texto
        weight="regular"
        style={{
          color: color,
          marginLeft: 5,
          marginTop: 5,
          fontSize: 16,
          marginRight: 25,
        }}
      >
        {children}
      </Texto>
      {img}
    </Pressable>
  );
}
