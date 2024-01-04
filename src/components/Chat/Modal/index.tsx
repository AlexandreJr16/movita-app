import { View, Text, TextInput, Pressable, Modal } from "react-native";
import React, { useContext, useState } from "react";
import styles from "./styles";
import socket from "../../../utils/socket";
import Texto from "../../texto/Texto";
import TextoInput from "../../texto/TextoInput";
import AuthContext from "../../../contexts";

const ChatModal = ({ setVisible, visible }) => {
  const { user } = useContext(AuthContext);
  const closeModal = () => setVisible(false);
  const [groupName, setGroupName] = useState("");

  const handleCreateRoom = () => {
    //👇🏻 sends a message containing the group name to the server
    socket.emit("createRoom", { userId1: user.id, email: groupName });
    socket.emit("roomList", { id: user.id });

    closeModal();
  };
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <Texto weight="bold" style={styles.modalsubheading}>
            Digite o email para o chat:
          </Texto>
          <TextoInput
            style={styles.modalinput}
            placeholder="juninho@gmail.com"
            onChangeText={(value) => {
              setGroupName(value);
            }}
          />
          <View style={styles.modalbuttonContainer}>
            <Pressable style={styles.modalbutton} onPress={handleCreateRoom}>
              <Texto weight="bold" style={styles.modaltext}>
                CREATE
              </Texto>
            </Pressable>

            <Pressable
              style={[styles.modalbutton, { backgroundColor: "#E14D2A" }]}
              onPress={closeModal}
            >
              <Texto weight="bold" style={styles.modaltext}>
                CANCEL
              </Texto>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChatModal;
