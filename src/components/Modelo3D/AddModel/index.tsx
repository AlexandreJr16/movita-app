import * as DocumentPicker from "expo-document-picker";
import React, { useState, useContext } from "react";
import { Pressable } from "react-native";
import styles from "./styles";
import Texto from "../../Default/texto/Texto";
import AuthContext from "../../../contexts";

interface Params {
  id: number;
}

const AddModel = (dto: Params) => {
  const { addModel } = useContext(AuthContext);
  const [imageData, setImageData] = useState(null);
  const picker = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync();

      if (!doc.canceled) {
        const base64Data = await convertUriToBase64(doc.assets[0].uri);
        setImageData(base64Data);
        const data = { modeloBin: base64Data, projetoId: dto.id };
        const oi = await addModel(data);
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
