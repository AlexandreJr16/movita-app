import React, { useContext, useEffect, useState } from "react";
import { View, Image } from "react-native";
import Logo from "../../Logo/Logo";
import Texto from "../../texto/Texto";
import styles from "./styles";
import AuthContext from "../../../contexts/auth";
import { Buffer } from "buffer";

const HeaderMain = () => {
  const { user } = useContext(AuthContext);
  const base64 = user.img
    ? Buffer.from(user.img, "binary").toString("base64")
    : null;
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
          {base64 && <Image source={{ uri: base64 }} style={styles.sla} />}
          <Texto weight="bold" style={{ color: "white" }}>
            oi
          </Texto>
        </View>
      </View>
    </View>
  );
};

export default HeaderMain;
