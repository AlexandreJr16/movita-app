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
import UserDefault from "../../../assents/defaults/User";

type ImageInfo = {
  buffer: ArrayBuffer;
  name: string;
};

const ShowPerfil = () => {
  const { user, addImageUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true,
      });
      if (!result.canceled) {
        addImageUser(result.assets[0]);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        {user.imagem ? (
          <ImagemBuffer imgBuffer={user.imagem} style={styles.img} />
        ) : (
          <UserDefault />
        )}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Texto style={styles.title} weight={"bold"}>
          {user.Cliente[0].nome}
        </Texto>
        <Texto weight="regular" style={styles.subtitle}>
          {user.email}
        </Texto>
        <Texto weight="regular" style={styles.subtitle}>
          {user.Cliente[0].cpf}
        </Texto>
        {/* <Texto weight="regular" style={styles.subtitle}>
          {user.endereco.cidade} - {user.endereco.estado}
        </Texto> */}
      </View>
    </View>
  );
};

export default ShowPerfil;
