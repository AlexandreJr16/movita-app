import React, { useContext, useEffect, useState } from "react";
import { View, Image, TextInput } from "react-native";
import Logo from "../../Logo/Logo";
import Texto from "../../texto/Texto";
import styles from "./styles";
import AuthContext from "../../../contexts";
import { Buffer } from "buffer";
import ImagemBuffer from "../../Imagem";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderPerfil from "../../Perfil/HeaderPerfil";
import FiltroBlue from "../../../assents/MeusProjetos/FiltroBlue";
import FiltroRed from "../../../assents/MeusProjetos/FiltroRed";
import LupaAzul from "../../../assents/MeusProjetos/LupaAzul";
import LupaRed from "../../../assents/MeusProjetos/LupaRed";
import { Pressable } from "react-native";
import TextoInput from "../../texto/TextoInput";

const HeaderMyProduct = ({
  navigation,
  color,
  title,
}: {
  navigation: any;
  color: "blue" | "red";
  title: any;
}) => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.headerCard}>
      <HeaderPerfil visiblePerfil={true} navigation={navigation} />
      <Texto style={styles.titleMessage} weight="bold">
        {title}
      </Texto>
      <View style={styles.boxInput}>
        <View style={styles.textInput}>
          <TextoInput
            weight="regular"
            placeholder={
              color == "blue" ? "Pesquise Projetos..." : "Pesquise Empresas..."
            }
            placeholderColor={color == "blue" ? "#36A5BF" : "#A64029"}
            style={
              color == "blue"
                ? {
                    lineHeight: 18.4,
                    letterSpacing: 0.16,
                    fontSize: 16,
                    color: "#36A5BF",
                    flex: 1,
                  }
                : {
                    lineHeight: 18.4,
                    letterSpacing: 0.16,
                    fontSize: 16,
                    color: "#A64029",
                    flex: 1,
                  }
            }
          ></TextoInput>
          <Pressable>{color == "blue" ? <LupaAzul /> : <LupaRed />}</Pressable>
        </View>
        <Pressable
          style={styles.filterBtn}
          onPress={() => {
            console.log("Ihago bobão");
          }}
        >
          {color == "blue" ? <FiltroBlue /> : <FiltroRed />}
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderMyProduct;
