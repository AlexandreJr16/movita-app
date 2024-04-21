import AuthContext from "../../../contexts/auth.context";
import { useContext, useState, useEffect } from "react";
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
import UserContext from "../../../contexts/user.context";

type ImageInfo = {
  buffer: ArrayBuffer;
  name: string;
};

const ShowPerfil = () => {
  const { user } = useContext(AuthContext);
  const { addImageUser } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [endereco, setEndereco] = useState<string>();

  useEffect(() => {
    const name =
      user.tipoUser == "empresa"
        ? user.Empresa[0].nomeFantasia
        : user.Cliente[0].nome;
    const cpf =
      user.tipoUser == "empresa" ? user.Empresa[0].cnpj : user.Cliente[0].cpf;
    const endereco =
      user.tipoUser == "empresa"
        ? user.Empresa[0].Endereco.cidade && user.Empresa[0].Endereco.estado
          ? `${user.Empresa[0].Endereco.cidade} - ${user.Empresa[0].Endereco.estado}`
          : null
        : user.Cliente[0].Endereco.cidade && user.Cliente[0].Endereco.estado
        ? `${user.Cliente[0].Endereco.cidade} - ${user.Cliente[0].Endereco.estado}`
        : null;
    setEndereco(endereco);
    setName(name);
    setCpf(cpf);
  }, []);

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
          {name}
        </Texto>
        <Texto weight="regular" style={styles.subtitle}>
          {user.email}
        </Texto>
        <Texto weight="regular" style={styles.subtitle}>
          {cpf}
        </Texto>
        <Texto weight="regular" style={styles.subtitle}>
          {endereco}
        </Texto>
        <ImagePickerModal
          visible={visible}
          imagePicker={pickImage}
          uploadFunction={addImageUser}
        />
      </View>
    </View>
  );
};

export default ShowPerfil;
