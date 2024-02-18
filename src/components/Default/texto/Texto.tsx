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
  color?: string;
  fontSize?: number;
  marginRight?: number;
}

interface TextProps {
  children: any;
  weight: StyleOptions;
  style?: CustomViewStyle | null;
  numberOfLines?: number;
}

export default function Texto({
  children,
  weight,
  style,
  numberOfLines,

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
    <Text
      style={[textStyle, style]}
      numberOfLines={numberOfLines}
      {...restProps}
    >
      {children}
    </Text>
  );
}
