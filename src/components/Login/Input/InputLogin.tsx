import { View, TextInput, Pressable } from "react-native";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import InputDTO from "./InputDTO";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import TextoInput from "../../Default/texto/TextoInput";
import { Eye, EyeSlash } from "phosphor-react-native";

const InputLogin = ({ Icon, placeholder, func, secureText }: InputDTO) => {
  const [visible, setVisible] = useState(true);
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
        secureTextEntry={visible && secureText}
      ></TextoInput>
      {secureText ? (
        !visible ? (
          <Pressable
            onPress={() => {
              setVisible(!visible);
            }}
          >
            <Eye color="#878787" size={30} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setVisible(!visible);
            }}
          >
            <EyeSlash color="#878787" size={30} />
          </Pressable>
        )
      ) : null}
    </View>
  );
};

export default InputLogin;
