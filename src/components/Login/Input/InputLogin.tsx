import { View } from "react-native";
import Texto from "../../texto/Texto";
import styles from "./styles";
import InputDTO from "./InputDTO";
import React from "react";

const InputLogin = ({ text }: InputDTO) => {
  return (
    <View>
      <Texto weight="regular" style={}>
        {text}
      </Texto>
    </View>
  );
};

export default InputLogin;
