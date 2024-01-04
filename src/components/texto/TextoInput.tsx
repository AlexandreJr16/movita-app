import React from "react";
import { TextInput, TextStyle } from "react-native";
import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

interface CustomTextStyle extends TextStyle {
  letterSpacing?: number;
  color?: string;
  fontSize?: number;
  marginRight?: number;
}

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  weight: "regular" | "bold";
  style?: CustomTextStyle | null;
  placeholderColor?: any;
  secureTextEntry?: boolean;
}

export default function TextoInput({
  placeholder,
  value,
  onChangeText,
  weight,
  style,
  placeholderColor = "#7A7979",
  secureTextEntry = false,
  ...restProps
}: TextInputProps) {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const textInputStyle =
    weight === "regular"
      ? { fontFamily: "Poppins_500Medium" }
      : { fontFamily: "Poppins_600SemiBold" };

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[textInputStyle, style]}
      placeholderTextColor={placeholderColor}
      secureTextEntry={secureTextEntry}
      {...restProps}
    />
  );
}
