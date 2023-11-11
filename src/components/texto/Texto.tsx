import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";

type StyleOptions = "bold" | "regular";

const FONT_MAP = {
  PoppinsRegular: require("./Poppins-Regular.ttf"),
  PoppinsBold: require("./Poppins-Bold.ttf"),
};

export default function Texto({
  children,
  style,
}: {
  children: string;
  style: StyleOptions;
}) {
  const [textLoaded] = useFonts(FONT_MAP);

  if (!textLoaded) {
    return null;
  }

  const textStyle = style === "bold" ? styles.bold : styles.regular;

  return <Text style={textStyle}>{children}</Text>;
}
