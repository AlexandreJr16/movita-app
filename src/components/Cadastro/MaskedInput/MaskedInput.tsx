import { View, TextInput } from "react-native";
import Texto from "../../Default/texto/Texto";
import React from "react";
import TextoInput from "../../Default/texto/TextoInput";
import InputDTO from "./InputDTO";
import styles from "./styles";
import TextoInputMasked from "../../Default/maskedText/MaskedTextoInput";

const InputMaskedCadastro = ({
  children,
  func,
  text,
  styleContainer,
  secureText,
  inputMode,
  masked,
}: InputDTO) => {
  return (
    <View style={[styles.container, styleContainer]}>
      {children != undefined ? (
        <Texto weight="regular" style={styles.text}>
          {children}
        </Texto>
      ) : null}
      <TextoInputMasked
        masked={masked}
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

export default InputMaskedCadastro;
