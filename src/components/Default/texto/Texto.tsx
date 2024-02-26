import React from "react";
import { Text, ViewStyle } from "react-native";
import styles from "./styles";
import {
  useFonts,
  Inter_700Bold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

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
    Inter_700Bold,
    Inter_500Medium,
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
