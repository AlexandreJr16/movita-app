import { View, TextInput } from "react-native";
import Texto from "../../texto/Texto";
import styles from "./styles";
import InputDTO from "./InputDTO";
import React from "react";

const InputLogin = ({ children }: InputDTO) => {
  return (
    <View style={styles.container}>
      <Texto weight="regular" style={styles.text}>
        {children}
      </Texto>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default InputLogin;
