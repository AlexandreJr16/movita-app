import AuthContext from "../../../contexts";
import React, { useContext, useState } from "react";
import styles from "./styles";
import { View } from "react-native";
import ImagemBuffer from "../../Imagem";
import Texto from "../../texto/Texto";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";

const ShowPerfil = () => {
  const { user, addImageUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (
        !result.canceled &&
        result.assets &&
        result.assets.length > 0 &&
        result.assets[0].uri
      ) {
        setImage(result.assets[0].uri);
        await addImageUser(result);
      }
    } catch (error) {
      console.error("Erro ao escolher imagem:", error);
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
        <Texto weight="regular" style={styles.subtitle}>
          {user.endereco.cidade} - {user.endereco.estado}
        </Texto>
      </View>
    </View>
  );
};

export default ShowPerfil;
