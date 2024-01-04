import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ChatModal from "../../components/Chat/Modal";
import ChatComponent from "../../components/Chat/ChatComponent/index";
import styles from "./styles";
import socket from "../../utils/socket";
import AuthContext from "../../contexts";
import HeaderPerfil from "../../components/Perfil/HeaderPerfil";
import Texto from "../../components/texto/Texto";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import LoadingIndicator from "../../components/Loading";
import TextoInput from "../../components/texto/TextoInput";
import HeaderMyProduct from "../../components/MeusProjetos/Header";
import Plus from "../../assents/Chat/plus";

const Chat = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState();

  const handleSearch = (value) => {
    setSearch(value);
  };

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
      <View style={{ ...styles.chatscreen, paddingTop: 20 }}>
        <HeaderMyProduct
          navigation={navigation}
          color={"blue"}
          title={"Mensagens"}
        />
        <View style={styles.chatlistContainer}>
          {loading ? (
            <LoadingIndicator visible={loading} />
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

        {visible && <ChatModal setVisible={setVisible} visible={visible} />}
      </View>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => {
          openChatModal();
        }}
      >
        <Plus />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Chat;
