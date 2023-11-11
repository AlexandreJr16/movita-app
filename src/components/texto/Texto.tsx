import React from "react";
import { Text, ViewStyle } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

type StyleOptions = "bold" | "regular";

interface CustomViewStyle extends ViewStyle {
  letterSpacing?: number;
  lineHeight?: number;
}

interface TextProps {
  children: string;
  weight: StyleOptions;
  fontSize: number;
  style?: CustomViewStyle;
}

export default function Texto({
  children,
  weight,
  fontSize,
  style,
  ...restProps
}: TextProps) {
  const [textLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!textLoaded) {
    return null;
  }

  const textStyle = weight === "bold" ? styles.bold : styles.regular;

  return (
    <Text style={[textStyle, { fontSize }, style]} {...restProps}>
      {children}
    </Text>
  );
}
