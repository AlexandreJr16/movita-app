import AuthContext from "../../../contexts";
import { useContext, useState } from "react";
import styles from "./styles";
import { View } from "react-native";
import ImagemBuffer from "../../Default/Imagem";
import Texto from "../../Default/texto/Texto";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import { Buffer } from "buffer";
import React from "react";

const ShowPerfil = () => {
  const { user, addImageUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true,
      });
      addImageUser(result.assets[0]);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        {user.img ? (
          <ImagemBuffer imgBuffer={user.img} style={styles.img} />
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
          {user.cpf}
        </Texto>
        {/* <Texto weight="regular" style={styles.subtitle}>
          {user.endereco.cidade} - {user.endereco.estado}
        </Texto> */}
      </View>
    </View>
  );
};

export default ShowPerfil;
