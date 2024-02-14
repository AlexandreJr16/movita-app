import React, { useContext, useEffect, useState } from "react";
import { View, Image } from "react-native";
import Logo from "../../Default/Logo/Logo";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import AuthContext from "../../../contexts";
import { Buffer } from "buffer";
import ImagemBuffer from "../../Default/Imagem";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderMain = ({ navigation }: { navigation: any }) => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.headerCard}>
      <Logo
        color="#FFFFFF"
        size="35"
        style={styles.logo}
        navigation={navigation}
      ></Logo>
      <View style={styles.infoContainer}>
        <View style={styles.welcome}>
          <Texto weight="bold" style={styles.titleMessage}>
            {user
              ? `Olá, ${user.Cliente[0] ? user.Cliente[0].nome : "TOM"}`
              : "Olá, Cliente"}
          </Texto>
          <Texto weight="bold" style={styles.subtitleMessage}>
            Seja bem-vindo(a) ao Movita!
          </Texto>
        </View>
        {user.imagem ? (
          <ImagemBuffer imgBuffer={user.imagem} style={styles.img} />
        ) : null}
      </View>
    </View>
  );
};

export default HeaderMain;
