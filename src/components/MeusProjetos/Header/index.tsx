import React, { useContext, useEffect, useState } from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import Logo from "../../Default/Logo/Logo";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import AuthContext from "../../../contexts";
import { Buffer } from "buffer";
import ImagemBuffer from "../../Default/Imagem";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderPerfil from "../../Perfil/HeaderPerfil";
import FiltroBlue from "../../../assents/MeusProjetos/FiltroBlue";
import FiltroRed from "../../../assents/MeusProjetos/FiltroRed";
import LupaAzul from "../../../assents/MeusProjetos/LupaAzul";
import LupaRed from "../../../assents/MeusProjetos/LupaRed";
import { Pressable } from "react-native";
import TextoInput from "../../Default/texto/TextoInput";

const HeaderMyProduct = ({
  navigation,
  color = "blue",
  title,
  handleSearch,
  textoSearch,
  ShowBack = true,
  showFilter = true,
}: {
  navigation: any;
  color?: "blue" | "red";
  title: any;
  handleSearch?: any;
  textoSearch: string;
  ShowBack?: boolean;
  showFilter?: boolean;
}) => {
  const { user } = useContext(AuthContext);
  const nav = ShowBack ? navigation : null;
  return (
    <View style={{ ...styles.headerCard }}>
      <HeaderPerfil visiblePerfil={true} navigation={nav} />
      <Texto style={styles.titleMessage} weight="bold">
        {title}
      </Texto>
      <View style={styles.boxInput}>
        <View style={styles.textInput}>
          <TextoInput
            onChangeText={handleSearch}
            weight="regular"
            placeholder={textoSearch}
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

        {showFilter && (
          <Pressable
            style={styles.filterBtn}
            onPress={() => {
              console.log("Ihago bobão");
            }}
          >
            {color == "blue" ? <FiltroBlue /> : <FiltroRed />}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default HeaderMyProduct;
