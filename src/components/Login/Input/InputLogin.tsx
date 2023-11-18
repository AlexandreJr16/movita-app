import { View, TextInput } from "react-native";
import Texto from "../../texto/Texto";
import styles from "./styles";
import InputDTO from "./InputDTO";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const InputLogin = ({ Icon, placeholder, func, secureText }: InputDTO) => {
  const [textLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  if (!textLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        onChange={func}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#878787"}
        secureTextEntry={secureText}
      ></TextInput>
    </View>
  );
};

export default InputLogin;
