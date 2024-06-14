import { TouchableOpacity, View } from "react-native";
import React from "react";
import BlueBack from "../../../assents/Cadastro/BlueBack";
import Logo from "../../Default/Logo/Logo";
import styles from "./styles";

const HeaderForgotScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <BlueBack />
      </TouchableOpacity>
      <Logo />
    </View>
  );
};
export default HeaderForgotScreen;
