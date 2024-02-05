import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import { Pressable } from "react-native";
import styles from "./styles";
import Texto from "../../Default/texto/Texto";

const AddModel = () => {
  const [imageData, setImageData] = useState(null); // Estado para armazenar dados da imagem em base64

  const picker = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync();

      if (!doc.canceled) {
        // Se o documento foi selecionado com sucesso
        const base64Data = await convertUriToBase64(doc.assets[0].uri);
        setImageData(base64Data);
        console.log("Base64 Data:", base64Data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const convertUriToBase64 = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  return (
    <React.Fragment>
      <Pressable onPress={picker} style={styles.bg}>
        <Texto weight="bold">OLá</Texto>
      </Pressable>
    </React.Fragment>
  );
};
export default AddModel;
