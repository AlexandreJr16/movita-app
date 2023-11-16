import { View, Image } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./styles";
import { useState } from "react";
import React from "react";
import Carrossel from "../../components/Login/Carrossel/Carrossel";

const carousel = [{ color: "1f1f1f", imgSource: "www" }];

const Login = () => {
  const [imgHeader, setImgHeader] = useState(
    require("../../assents/Login/logo.png")
  );
  const cond = true;

  return (
    <View style={styles.container}>
      <Carrossel />
    </View>
  );
};
export default Login;
