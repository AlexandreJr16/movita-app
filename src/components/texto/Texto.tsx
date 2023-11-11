import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

type StyleOptions = "bold" | "regular";

interface TextProps {
  children: string;
  weight: StyleOptions;
  fontSize: number;
  // Adicione uma propriedade genérica para futuros atributos
  [key: string]: any;
}

export default function Texto({
  children,
  weight,
  fontSize,
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
    <Text style={[textStyle, { fontSize }]} {...restProps}>
      {children}
    </Text>
  );
}
