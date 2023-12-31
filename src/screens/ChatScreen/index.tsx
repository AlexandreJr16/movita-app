import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ChatModal from "../../components/Chat/Modal";
import ChatComponent from "../../components/Chat/ChatComponent/index";
import { styles } from "../../utils/styles";
import socket from "../../utils/socket";
import AuthContext from "../../contexts";

const Chat = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para tratar a atualização da lista de salas
    const handleRoomsList = (newRooms) => {
      setRooms(newRooms);
      setLoading(false);
    };

    // Emitir o evento "roomList" assim que o componente for montado
    socket.emit("roomList", { id: user.id });

    // Adicionar o ouvinte de eventos "roomsList"
    socket.on("roomsList", handleRoomsList);

    // Detach event listener when component unmounts
    return () => {
      socket.off("roomsList", handleRoomsList);
    };
  }, []); // Dependência vazia para garantir que este useEffect seja executado apenas uma vez, sem depender de variáveis externas

  const openChatModal = () => {
    setVisible(true);
  };

  const keyExtractor = (item) => item.id.toString();

  const renderChatItem = ({ item }) => (
    <ChatComponent navigation={navigation} item={item} />
  );

  return (
    <SafeAreaView style={styles.chatscreen}>
      <View style={styles.chattopContainer}>
        <View style={styles.chatheader}>
          <Text style={styles.chatheading}>Chats</Text>
          <Pressable onPress={openChatModal}>
            <Feather name="edit" size={24} color="green" />
          </Pressable>
        </View>
      </View>

      <View style={styles.chatlistContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : rooms.length > 0 ? (
          <FlatList
            data={rooms}
            renderItem={renderChatItem}
            keyExtractor={keyExtractor}
          />
        ) : (
          <View style={styles.chatemptyContainer}>
            <Text style={styles.chatemptyText}>No rooms created!</Text>
            <Text>Click the icon above to create a Chat room</Text>
          </View>
        )}
      </View>

      {visible && <ChatModal setVisible={setVisible} />}
    </SafeAreaView>
  );
};

export default Chat;
