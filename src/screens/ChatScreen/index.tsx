import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import ChatModal from "../../components/Chat/Modal";
import styles from "./styles";
import socket from "../../utils/socket";
import AuthContext from "../../contexts";
import Texto from "../../components/Default/texto/Texto";
import HeaderMyProduct from "../../components/MeusProjetos/Header";
import Plus from "../../assents/Chat/plus";
import ChatComponent from "../../components/Chat/ChatComponent";

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
      <StatusBar backgroundColor={"#2f2f2f"} barStyle="light-content" />
      <HeaderMyProduct
        textoSearch="Procurar conversas"
        navigation={navigation}
        color={"blue"}
        title={"Mensagens"}
        handleSearch={handleSearch}
      />

      <View style={styles.chatlistContainer}>
        {rooms.length > 0 ? (
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
