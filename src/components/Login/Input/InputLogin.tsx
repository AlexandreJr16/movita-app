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
import TextoInput from "../../texto/TextoInput";

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
      <TextoInput
        weight="regular"
        onChangeText={func}
        style={styles.input}
        placeholder={placeholder}
        placeholderColor={"#878787"}
        secureTextEntry={secureText}
      ></TextoInput>
    </View>
  );
};

export default InputLogin;
