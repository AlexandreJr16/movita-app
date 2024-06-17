import React from "react";
import { TextInput, TextStyle } from "react-native";
import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { MaskedTextInput, mask } from "react-native-mask-text";

interface CustomTextStyle extends TextStyle {
  letterSpacing?: number;
  color?: string;
  fontSize?: number;
  marginRight?: number;
}

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: any;
  weight?: "regular" | "bold";
  style?: CustomTextStyle | null;
  placeholderColor?: any;
  secureTextEntry?: boolean;
  inputMode?: any;
  onFocus?: any;
  onBlur?: any;
  masked?: any;
}

export default function TextoInputMasked({
  placeholder,
  value,
  onChangeText,
  weight = "regular",
  style,
  placeholderColor = "#7A7979",
  secureTextEntry = false,
  inputMode = null,
  onFocus,
  onBlur,
  masked,
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
    <MaskedTextInput
      mask={masked ?? null}
      onFocus={onFocus}
      onBlur={onBlur}
      inputMode={inputMode}
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
