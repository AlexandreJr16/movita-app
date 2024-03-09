import AuthContext from "../../../contexts/auth.context";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { View } from "react-native";
import ImagemBuffer from "../../Default/Imagem";
import Texto from "../../Default/texto/Texto";
import { TouchableOpacity } from "react-native";

const ShowMainDataPerfil = ({
  user,
  imgNotArray = false,
}: {
  user: any;
  imgNotArray?: boolean;
}) => {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {imgNotArray ? (
          user.img ? (
            <ImagemBuffer imgBuffer={user.img} style={styles.img} />
          ) : null
        ) : user.img ? (
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
