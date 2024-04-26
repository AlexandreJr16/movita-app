import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  Pressable,
} from "react-native";
import Plus from "../../../assents/Chat/plus";
import ChatComponent from "../../../components/Chat/ChatComponent";
import Texto from "../../../components/Default/texto/Texto";
import HeaderMyProduct from "../../../components/MeusProjetos/Header";
import AuthContext from "../../../contexts/auth.context";
import socket from "../../../utils/socket";
import styles from "./styles";
import VitaNotFound from "../../../assents/Vita/VitaNotFound";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export type RoomResponse = {
  id: number;
  userId1: number;
  userId2: number;
  Message: MessageResponse[];
  name: string;
  img: any;
};

export type MessageResponse = {
  id: number;
  texto: string | null;
  imagem: Buffer;
  modelo3D: Buffer | null;
  userName: string;
  createAt: Date;
  roomId: number;
  tipoMessage: "TEXTO" | "IMAGEM" | "MODELO_3D" | "BRIEFING";
  briefing?: {
    id: number;
    title: string;
    answered: boolean;
    question: [{ text: string; response: string }];
  };
};

const Chat = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState<RoomResponse[]>([]);
  const [search, setSearch] = useState();

  //Debounce para melhorar a perfomace da pesquisa
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  //handleSearch para alterar o valor a ser pesquisado
  const handleSearch = debounce((value) => {
    filterRooms(value);
    setSearch(value);
  }, 300);

  //filterRooms para filtrar as salas de conversa de acordo com o handleSearch
  const filterRooms = (searchString) => {
    const filteredRooms = rooms.filter((savedRooms) =>
      savedRooms.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setRooms(filteredRooms);
  };

  //Use effect que ao abrir a página de conversa ele procura a lista de salas de papo papo do user
  useEffect(() => {
    const handleRoomsList = (newRooms) => {
      setRooms(newRooms);
    };

    socket.emit("roomList", { id: user.id });

    socket.on("roomsList", handleRoomsList);

    return () => {
      socket.off("roomsList", handleRoomsList);
    };
  }, []);

  //handle para mudar a visibilidade do Modal
  const openChatModal = () => {
    navigation.navigate("AddRoom");
  };

  const keyExtractor = (item) => item.id.toString();

  //Função que retorna o item que renderiza a pré-visualização dos bate papos
  const renderChatItem = ({ item }) => {
    return <ChatComponent navigation={navigation} item={item} />;
  };
  return (
    // <Pressable style={styles.chatscreen}>
    <View style={styles.chatscreen}>
      <StatusBar backgroundColor={"#2f2f2f"} barStyle="light-content" />
      <HeaderMyProduct
        ShowBack={false}
        textoSearch="Procurar conversas"
        navigation={navigation}
        color={"blue"}
        title={"Mensagens"}
        handleSearch={handleSearch}
        showFilter={false}
      />

      <View style={styles.chatlistContainer}>
        {rooms.length > 0 ? (
          <FlatList
            data={rooms}
            scrollEnabled={true}
            renderItem={renderChatItem}
            keyExtractor={keyExtractor}
          />
        ) : (
          <View style={styles.chatemptyContainer}>
            <Texto weight="bold" style={styles.chatemptyText}>
              Você não possui conversas
            </Texto>
            <VitaNotFound />
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.createButton} onPress={openChatModal}>
        <Plus />
      </TouchableOpacity>
    </View>
  );
};

export default Chat;
