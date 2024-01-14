import { View, TextInput } from "react-native";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import InputDTO from "./InputDTO";
import React from "react";
import TextoInput from "../../Default/texto/TextoInput";

const InputCadastro = ({
  children,
  func,
  text,
  styleContainer,
  secureText,
  inputMode,
}: InputDTO) => {
  return (
    <View style={[styles.container, styleContainer]}>
      {children != undefined ? (
        <Texto weight="regular" style={styles.text}>
          {children}
        </Texto>
      ) : null}
      <TextoInput
        weight="regular"
        onChangeText={func}
        style={styles.input}
        secureTextEntry={secureText}
        value={text}
        inputMode={inputMode}
      />
    </View>
  );
};

export default InputCadastro;
