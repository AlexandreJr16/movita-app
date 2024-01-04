import { View, TextInput } from "react-native";
import Texto from "../../texto/Texto";
import styles from "./styles";
import InputDTO from "./InputDTO";
import React from "react";
import TextoInput from "../../texto/TextoInput";

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
      <TextoInput
        weight="regular"
        onChangeText={func}
        style={styles.input}
        secureTextEntry={secureText}
        value={text}
      />
    </View>
  );
};

export default InputCadastro;
