import React, { useContext } from "react";
import { Modal, Pressable, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";
import ButtonPerfil from "../Perfil/Button";
import ButtonImageModalPicker from "./ModalImagemButton";
import AuthContext from "../../contexts/auth.context";
import UserContext from "../../contexts/user.context";

const ImagePickerModal = ({
  visible,
  imagePicker,
  uploadFunction,
  setFalse,
}: {
  visible: any;
  imagePicker: any;
  uploadFunction: any;
  setFalse?: any;
}) => {
  const pickImageFromGalery = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.2,
        base64: true,
      });
      if (!result.canceled) {
        uploadFunction(result.assets[0].base64);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const pickImageFromCamera = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.2,
        base64: true,
      });
      if (!result.canceled) {
        uploadFunction(result.assets[0].base64);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        setFalse();
      }}
      statusBarTranslucent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <ButtonImageModalPicker
            text="Tirar foto"
            onPress={() => {
              imagePicker();
              pickImageFromCamera();
            }}
          />
          <ButtonImageModalPicker
            text="Buscar na galeria"
            onPress={() => {
              imagePicker();
              pickImageFromGalery();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerModal;
