import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Texto from "../../texto/Texto";
import BlueBack from "../../../assents/Cadastro/BlueBack";
import Logo from "../../Logo/Logo";
import styles from "./styles";

const HeaderForgotScreen = ({ navigation }) => {
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
