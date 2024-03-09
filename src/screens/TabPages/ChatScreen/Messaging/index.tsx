import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  Pressable,
  StatusBar,
  ImageBackground,
} from "react-native";
import SendMessage from "../../../../assents/Chat/SendMessage";
import AddSource from "../../../../assents/Chat/addSoruce";
import Arrow from "../../../../assents/Perfil/Arrow";
import Logo from "../../../../assents/Perfil/Logo";
import MessageComponent from "../../../../components/Chat/MessageComponent";
import Texto from "../../../../components/Default/texto/Texto";
import TextoInput from "../../../../components/Default/texto/TextoInput";
import AuthContext from "../../../../contexts";
import socket from "../../../../utils/socket";
import styles from "./styles";

const Messaging = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [variableColor, setVariableColor] = useState("#5A5A5A");
  const [lastMessage, setLastMessage] = useState<string | null>(null);
  const [nome, setNome] = useState(
    user.tipoUser === "empresa"
      ? user.Empresa[0].nomeFantasia
      : user.Cliente[0].nome
  );
  const flatListRef = useRef(null);

  const { name, id } = route.params;

  const handleLastMessage = (text: string) => {
    setLastMessage(text);
  };

  //Função de digitação
  const focusText = async () => {
    setVariableColor(null);
    await new Promise((resolve) => setTimeout(resolve, 500));
    scrollToBottom();
  };

  //Função de sair da digitação
  const blurText = async () => {
    setVariableColor("#5A5A5A");
  };

  //Procurar bate-papos
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

  //Receber mensagens
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

  //Enviar nova mensagem
  const handleNewMessage = () => {
    if (message === "") return;

    const timestamp = new Date();
    const hour = timestamp
      .getHours()
      .toLocaleString()
      .toString()
      .padStart(2, "0");
    const mins = timestamp
      .getMinutes()
      .toLocaleString()
      .toString()
      .padStart(2, "0");

    const newMessage = {
      id: `${Date.now()}`,
      message,
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
    scrollToBottom();
  };

  //Scrolar para o fim do bate papo
  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View style={styles.messagingscreen}>
      <StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Arrow color="#fff" />
        </Pressable>
        <Texto weight="bold" style={styles.textTitle}>
          {name}
        </Texto>
        <Logo color="#fff" />
      </View>
      <View style={styles.messaContainer}>
        <ImageBackground
          resizeMode="cover"
          imageStyle={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
          style={{
            flex: 1,
            paddingTop: 15,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
          }}
          source={require("../../../../assents/Chat/bg.png")}
        >
          <FlatList
            ref={flatListRef}
            data={chatMessages}
            renderItem={({ item, index }) => {
              let different;
              if (index == chatMessages.length - 1) {
                different = true;
              } else if (
                chatMessages[index].userName != chatMessages[index + 1].userName
              ) {
                different = true;
              }
              return <MessageComponent item={item} different={different} />;
            }}
            keyExtractor={(item) => item.id}
            style={{ paddingHorizontal: 15 }}
            onContentSizeChange={scrollToBottom}
          />
          <View
            style={{
              ...styles.messaginginputContainer,
              backgroundColor: variableColor,
            }}
          >
            <View style={styles.messaginginput}>
              <Pressable
                style={styles.messagingbuttonContainer}
                onPress={handleNewMessage}
              >
                <AddSource />
              </Pressable>
              <TextoInput
                onFocus={focusText}
                onBlur={blurText}
                weight="regular"
                style={styles.inputMessage}
                value={message}
                placeholderColor="#fff"
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
        </ImageBackground>
      </View>
    </View>
  );
};

export default Messaging;
