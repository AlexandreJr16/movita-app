import React, { useContext, useEffect, useState } from "react";
import { View, Image } from "react-native";
import Logo from "../../Default/Logo/Logo";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import AuthContext from "../../../contexts";
import { Buffer } from "buffer";
import ImagemBuffer from "../../Default/Imagem";
import { SafeAreaView } from "react-native-safe-area-context";
import UserDefault from "../../../assents/defaults/User";

const HeaderMain = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState<string>();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const name =
      user.tipoUser == "empresa"
        ? user.Empresa[0].nomeFantasia
        : user.Cliente[0].nome;
    setName(name);
  }, []);

  return (
    <View style={styles.headerCard}>
      <Logo
        color="#FFFFFF"
        size="30"
        style={styles.logo}
        navigation={navigation}
      ></Logo>
      <View style={styles.infoContainer}>
        <View style={styles.welcome}>
          <Texto weight="bold" style={styles.titleMessage}>
            {user ? `Olá, ${name}` : "Olá, Cliente"}
          </Texto>
          <Texto weight="bold" style={styles.subtitleMessage}>
            SEJA BEM-VINDO AO MOVITA
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
