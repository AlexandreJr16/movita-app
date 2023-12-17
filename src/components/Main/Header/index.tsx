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
    <SafeAreaView style={styles.headerCard}>
      <Logo color="#FFFFFF" size="35" style={styles.logo}></Logo>
      <View style={styles.infoContainer}>
        <View style={styles.welcome}>
          <Texto weight="bold" style={styles.titleMessage}>
<<<<<<< HEAD
            {/* Olá, {user.nome} */}
            {user ? `Olá, ${user.nome}` : "Olá, Cliente"}
=======
            {/*Olá, {user.nome} */}
            Olá, Alexandre
>>>>>>> 21e718b555e6653a611f48fb01fc5af353865bce
          </Texto>
          <Texto weight="bold" style={styles.subtitleMessage}>
            Seja bem-vindo(a) ao Movita!
          </Texto>
        </View>
<<<<<<< HEAD
        {/* <ImagemBuffer imgBuffer={user.img} style={styles.img} /> */}
        {user.img ? (
          <ImagemBuffer imgBuffer={user.img} style={styles.img} />
        ) : null}
=======
         {/*<ImagemBuffer imgBuffer={user.img} style={styles.img} />*/
         }
>>>>>>> 21e718b555e6653a611f48fb01fc5af353865bce
      </View>
    </SafeAreaView>
  );
};

export default HeaderMain;
