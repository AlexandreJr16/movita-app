import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Logo from "../../Logo/Logo";
import Texto from "../../texto/Texto";
import styles from "./styles";
import AuthContext from "../../../contexts/auth";
import { Buffer } from "buffer";

const HeaderMain = () => {
  const { user } = useContext(AuthContext);
  const base64 = user.img
    ? Buffer.from(user.img, "binary").toString("base64")
    : "Alexandre Pereira de Souza Junior";

  return (
    <View style={styles.headerCard}>
      <Logo color="#FFFFFF" size="40"></Logo>
      <View style={styles.infoContainer}>
        <View>
          <Texto weight="bold" style={styles.titleMessage}>
            Olá, {user.nome}
          </Texto>
          <Texto weight="bold" style={styles.subtitleMessage}>
            Seja bem-vindo(a) ao Movita!
          </Texto>
          <Texto weight="bold" style={{ color: "white" }}>
            {base64}
          </Texto>
        </View>
      </View>
    </View>
  );
};

export default HeaderMain;
