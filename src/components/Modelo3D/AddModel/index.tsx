import * as DocumentPicker from "expo-document-picker";
import React, { useState, useContext } from "react";
import { Pressable } from "react-native";
import styles from "./styles";
import Texto from "../../Default/texto/Texto";
import AuthContext from "../../../contexts/auth.context";
import * as FileSystem from "expo-file-system";

interface Params {
  id: number;
}

const AddModel = (dto: Params) => {
  const { addModel } = useContext(AuthContext);
  const [imageData, setImageData] = useState(null);
  const picker = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync({
        multiple: false,
        copyToCacheDirectory: true,
      });
      if (!doc.canceled) {
        // const base64Data = await convertUriToBase64(doc.assets[0].uri);
        const base64 = await FileSystem.readAsStringAsync(doc.assets[0].uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        // setImageData(base64Data);
        const data = { modeloBin: base64, projetoId: dto.id };
        const model = await addModel(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const convertUriToBase64 = async (uri: any) => {
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
