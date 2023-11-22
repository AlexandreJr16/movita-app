import { View, TextInput } from "react-native";
import Texto from "../../texto/Texto";
import styles from "./styles";
import InputDTO from "./InputDTO";
import React from "react";

const InputCadastro = ({
  children,
  func,
  text,
  styleContainer,
  secureText,
}: InputDTO) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <Texto weight="regular" style={styles.text}>
        {children}
      </Texto>
      <TextInput
        onChangeText={func}
        style={styles.input}
        secureTextEntry={secureText}
      >
        {text}
      </TextInput>
    </View>
  );
};

export default InputCadastro;
