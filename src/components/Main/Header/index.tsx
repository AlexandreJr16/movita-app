import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Logo from "../../Logo/Logo";
import Texto from "../../texto/Texto";
import styles from "./styles";
import AuthContext from "../../../contexts/auth";

const HeaderMain = () => {
  const { user } = useContext(AuthContext);

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
        </View>
      </View>
    </View>
  );
};

export default HeaderMain;
