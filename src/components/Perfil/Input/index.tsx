import { TextInput, View } from "react-native";
import Texto from "../../Default/texto/Texto";
import InputLogin from "../../Login/Input/InputLogin";
import styles from "./styles";
import React from "react";
import TextoInput from "../../Default/texto/TextoInput";

const InputPerfil = ({
  title,
  func,
  secureText,
  value,
}: {
  title?: string;
  func?: any;
  secureText?: boolean;
  value?: any;
}) => {
  return (
    <View style={styles.container}>
      <Texto weight="bold" style={styles.text}>
        {title}
      </Texto>
      <TextoInput
        weight="regular"
        onChangeText={func}
        style={styles.input}
        secureTextEntry={secureText}
        placeholder="Digite Aqui"
        placeholderColor={"#9f9f9f"}
        value={value}
      ></TextoInput>
    </View>
  );
};
export default InputPerfil;
