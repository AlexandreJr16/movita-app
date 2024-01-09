import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, StatusBar } from "react-native";
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
  const [savedRooms, setSavedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState();

  const handleSearch = (value) => {
    filterRooms(value);
    setSearch(value);
  };
  const filterRooms = (searchString) => {
    const filteredRooms = savedRooms.filter((savedRooms) =>
      savedRooms.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setRooms(filteredRooms);
  };

  useEffect(() => {
    const handleRoomsList = (newRooms) => {
      setRooms(newRooms);
      setSavedRooms(newRooms);
      setLoading(false);
    };

    socket.emit("roomList", { id: user.id });

    socket.on("roomsList", handleRoomsList);

    return () => {
      socket.off("roomsList", handleRoomsList);
    };
  }, []);

  const openChatModal = () => {
    setVisible(true);
  };

  const keyExtractor = (item) => item.id.toString();

  const renderChatItem = ({ item }) => (
    <ChatComponent navigation={navigation} item={item} />
  );

  return (
    <View style={styles.chatscreen}>
      <StatusBar backgroundColor={"#1f1f1f"} barStyle="light-content" />
      <HeaderMyProduct
        navigation={navigation}
        color={"blue"}
        title={"Mensagens"}
        handleSearch={handleSearch}
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
            <Texto weight="bold" style={styles.chatemptyText}>
              Nenhum contato encontrada.
            </Texto>
          </View>
        )}
      </View>

      {visible && <ChatModal setVisible={setVisible} visible={visible} />}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => {
          openChatModal();
        }}
      >
        <Plus />
      </TouchableOpacity>
    </View>
  );
};

export default Chat;
