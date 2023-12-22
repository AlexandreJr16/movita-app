import AuthContext from "../../../contexts";
import React, { useContext } from "react";
import styles from "./styles";
import { View } from "react-native";
import ImagemBuffer from "../../Imagem";
import Texto from "../../texto/Texto";

const ShowPerfil = () => {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {user.img ? (
        <ImagemBuffer imgBuffer={user.img} style={styles.img} />
      ) : null}
      <View style={styles.textContainer}>
        <Texto style={styles.title} weight={"bold"}>
          {user.nome}
        </Texto>
        <Texto weight="regular" style={styles.subtitle}>
          {user.email}
        </Texto>
        <Texto weight="regular" style={styles.subtitle}>
          {user.cpf}
        </Texto>
        <Texto weight="regular" style={styles.subtitle}>
          {user.endereco.cidade} - {user.endereco.estado}
        </Texto>
      </View>
    </View>
  );
};

export default ShowPerfil;
