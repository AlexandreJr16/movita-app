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
  onBlur,
  error,
}: {
  title?: string;
  func?: any;
  secureText?: boolean;
  value?: any;
  onBlur?: any;
  error: any;
}) => {
  return (
    <View style={styles.container}>
      <Texto weight="bold" style={styles.text}>
        {title}
      </Texto>
      <TextoInput
        onBlur={onBlur}
        weight="regular"
        onChangeText={func}
        style={styles.input}
        secureTextEntry={secureText}
        placeholder="Digite Aqui"
        placeholderColor={"#9f9f9f"}
        value={value}
      ></TextoInput>
      {error && (
        <Texto weight="bold" style={{ color: "red" }}>
          {error}
        </Texto>
      )}
    </View>
  );
};
export default InputPerfil;
