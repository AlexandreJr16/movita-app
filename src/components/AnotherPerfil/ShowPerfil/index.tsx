import AuthContext from "../../../contexts";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { View } from "react-native";
import ImagemBuffer from "../../Default/Imagem";
import Texto from "../../Default/texto/Texto";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import { Buffer } from "buffer";
import { User } from "../../../contexts/dto/user.dto";

const ShowMainDataPerfil = ({ user }: { user: any }) => {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {user.img ? (
          <ImagemBuffer imgBuffer={user.img[0]} style={styles.img} />
        ) : null}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Texto style={styles.title} weight={"bold"}>
          {user.nome}
        </Texto>
        <Texto weight="regular" style={styles.subtitle}>
          {user.email}
        </Texto>

        <Texto weight="regular" style={styles.subtitle}>
          {user.endereco.cidade} - {user.endereco.estado}
        </Texto>
      </View>
    </View>
  );
};

export default ShowMainDataPerfil;
