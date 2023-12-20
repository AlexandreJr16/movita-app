import React, { useContext, useEffect, useState } from "react";
import { View, Image } from "react-native";
import Logo from "../../Logo/Logo";
import Texto from "../../texto/Texto";
import styles from "./styles";
import AuthContext from "../../../contexts/auth";
import { Buffer } from "buffer";
import ImagemBuffer from "../../Imagem";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderMain = () => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.headerCard}>
      <SafeAreaView style={styles.headerCard}>
        <Logo color="#FFFFFF" size="35" style={styles.logo}></Logo>
        <View style={styles.infoContainer}>
          <View style={styles.welcome}>
            <Texto weight="bold" style={styles.titleMessage}>
              {/* Olá, {user.nome} */}
              {user ? `Olá, ${user.nome}` : "Olá, Cliente"}
            </Texto>
            <Texto weight="bold" style={styles.subtitleMessage}>
              Seja bem-vindo(a) ao Movita!
            </Texto>
          </View>
          {/* <ImagemBuffer imgBuffer={user.img} style={styles.img} /> */}
          {user.img ? (
            <ImagemBuffer imgBuffer={user.img} style={styles.img} />
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HeaderMain;
