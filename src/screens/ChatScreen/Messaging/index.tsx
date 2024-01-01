import React, { useContext, useEffect, useRef, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import MessageComponent from "../../../components/Chat/MessageComponent/index";
import styles from "./styles";
import socket from "../../../utils/socket";
import AuthContext from "../../../contexts";
import Arrow from "../../../assents/Perfil/Arrow";
import { SafeAreaView } from "react-native-safe-area-context";
import Texto from "../../../components/texto/Texto";
import Logo from "../../../components/Logo/Logo";
import SendMessage from "../../../assents/Chat/SendMessage";

const Messaging = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  const flatListRef = useRef(null);

  const { name, id } = route.params;

  useEffect(() => {
    // ComponentDidMount

    const handleFoundRoom = (roomChats) => {
      setChatMessages(roomChats);
      scrollToBottom();
    };

    // Emit only when the component mounts
    socket.emit("findRoom", id);
    socket.on("foundRoom", handleFoundRoom);

    return () => {
      socket.off("foundRoom", handleFoundRoom);
      socket.emit("disconnectFromSpecificRoom", id);
    };
  }, [id, navigation]);

  useEffect(() => {
    // Update the chat when a new message is received
    const handleNewMessageReceived = (newMessage) => {
      // Update the state by adding the new message to the existing messages
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

    const newMessage = {
      id: `${Date.now()}`,
      message: message,
      time: `${hour}:${mins}`,
      roomId: id,
      userName: user.nome,
    };

    // Update the state by adding the new message to the existing messages
    setChatMessages((prevMessages) => [...prevMessages, newMessage]);

    // Send the new message to the server
    socket.emit("newMessage", {
      room_id: id,
      message,
      user: user.nome,
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
    <SafeAreaView
      style={{ ...styles.messagingscreen, backgroundColor: "#1f1f1f" }}
    >
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
        <View style={styles.messaginginputContainer}>
          <View style={styles.messaginginput}>
            <TextInput
              style={styles.inputMessage}
              value={message}
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
    </SafeAreaView>
  );
};

export default Messaging;
