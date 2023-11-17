import { View, TextInput } from "react-native";
import Texto from "../../texto/Texto";
import styles from "./styles";
import InputDTO from "./InputDTO";
import React, { useState } from "react";
import UserIcon from "../../../assents/Login/UserIcon";

const InputLogin = ({ Icon, placeholder, func }: InputDTO) => {
  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        onChange={func}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#878787"}
      ></TextInput>
    </View>
  );
};

export default InputLogin;
