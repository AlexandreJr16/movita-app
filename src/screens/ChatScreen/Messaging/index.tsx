import React, { useContext, useEffect, useRef, useState } from "react";
import { View, FlatList, Pressable, StatusBar } from "react-native";
import MessageComponent from "../../../components/Chat/MessageComponent/index";
import styles from "./styles";
import socket from "../../../utils/socket";
import AuthContext from "../../../contexts";
import Arrow from "../../../assents/Perfil/Arrow";
import Texto from "../../../components/Default/texto/Texto";
import Logo from "../../../components/Default/Logo/Logo";
import SendMessage from "../../../assents/Chat/SendMessage";
import TextoInput from "../../../components/Default/texto/TextoInput";

const Messaging = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [variableColor, setVariableColor] = useState("#5A5A5A");
  const [nome, setNome] = useState(
    user.tipoUser == "empresa"
      ? user.Empresa[0].nomeFantasia
      : user.Cliente[0].nome
  );

  const flatListRef = useRef(null);

  const { name, id } = route.params;

  const focusText = async () => {
    setVariableColor(null);
    await new Promise((resolve) => setTimeout(resolve, 500));
    scrollToBottom();
  };
  const blurText = async () => {
    setVariableColor("#5A5A5A");
  };

  useEffect(() => {
    const handleFoundRoom = (roomChats) => {
      setChatMessages(roomChats);
      scrollToBottom();
    };

    socket.emit("findRoom", id);
    socket.on("foundRoom", handleFoundRoom);

    return () => {
      socket.off("foundRoom", handleFoundRoom);
      socket.emit("disconnectFromSpecificRoom", id);
    };
  }, [id, navigation]);

  useEffect(() => {
    const handleNewMessageReceived = (newMessage) => {
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      scrollToBottom();
    };

    socket.on("newMessageReceived", handleNewMessageReceived);

    return () => {
      socket.off("newMessageReceived", handleNewMessageReceived);
    };
  }, []);

  const handleNewMessage = () => {
    if (message === "") return;

    const timestamp = new Date();
    const hour = timestamp.getHours().toString().padStart(2, "0");
    const mins = timestamp.getMinutes().toString().padStart(2, "0");
    // timestamp.getHours().toLocaleString();  Eu tenho que fazer alguma coisa assim

    const newMessage = {
      id: `${Date.now()}`,
      message: message,
      time: `${hour}:${mins}`,
      roomId: id,
      userName: nome,
    };

    setChatMessages((prevMessages) => [...prevMessages, newMessage]);

    socket.emit("newMessage", {
      room_id: id,
      message,
      user: nome,
      timestamp: { hour, mins },
    });

    setMessage("");
    scrollToBottom(); // Scroll to bottom after sending the message
  };

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View style={{ ...styles.messagingscreen }}>
      <StatusBar barStyle="light-content" backgroundColor={"#1f1f1f"} />
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (error) {
              console.log("Apenas tentou voltar mais que podia");
            }
          }}
        >
          <Arrow color={"#fff"} />
        </Pressable>
        <Texto weight="bold" style={styles.textTitle}>
          {name}
        </Texto>
        <Logo color="#fff" />
      </View>
      <View style={[styles.messaContainer]}>
        <FlatList
          ref={flatListRef}
          data={chatMessages}
          renderItem={({ item }) => <MessageComponent item={item} />}
          keyExtractor={(item) => item.id}
          style={{ paddingHorizontal: 15 }}
          onContentSizeChange={() => {
            scrollToBottom();
          }}
        />
        <View
          style={{
            ...styles.messaginginputContainer,
            backgroundColor: variableColor,
          }}
        >
          <View style={styles.messaginginput}>
            <TextoInput
              onFocus={focusText}
              onBlur={blurText}
              weight="regular"
              style={styles.inputMessage}
              value={message}
              placeholderColor={"#fff"}
              onChangeText={(value) => setMessage(value)}
              placeholder="Digite aqui"
            />
            <Pressable
              style={styles.messagingbuttonContainer}
              onPress={handleNewMessage}
            >
              <SendMessage />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Messaging;
