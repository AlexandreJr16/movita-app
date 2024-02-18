import React, { useContext } from "react";
import { Modal, Pressable, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";
import ButtonPerfil from "../Perfil/Button";
import ButtonImageModalPicker from "./ModalImagemButton";
import AuthContext from "../../contexts";

const ImagePickerModal = ({
  visible,
  imagePicker,
  uploadFunction,
}: {
  visible: any;
  imagePicker: any;
  uploadFunction: any;
}) => {
  const { addImageUser } = useContext(AuthContext);
  const pickImageFromGalery = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.4,
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
        quality: 0.4,
        base64: true,
      });
      if (!result.canceled) {
        uploadFunction(result.assets[0].base64);
        // addImageUser(result.assets[0]);
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
        console.log("OI");
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
