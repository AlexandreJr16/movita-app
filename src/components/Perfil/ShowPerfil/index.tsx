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
import ImagePickerModal from "../../ImageModal";

type ImageInfo = {
  buffer: ArrayBuffer;
  name: string;
};

const ShowPerfil = () => {
  const { user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  const pickImage = () => {
    visible ? setVisible(false) : setVisible(true);
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
        <ImagePickerModal visible={visible} imagePicker={pickImage} />
      </View>
    </View>
  );
};

export default ShowPerfil;
