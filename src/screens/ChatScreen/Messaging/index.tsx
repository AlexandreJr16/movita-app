import React, { useContext, useEffect, useRef, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import MessageComponent from "../../../components/Chat/MessageComponent/index";
import { styles } from "../../../utils/styles";
import socket from "../../../utils/socket";
import AuthContext from "../../../contexts";

const Messaging = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  const flatListRef = useRef(null);

  const { name, id } = route.params;

  useEffect(() => {
    // ComponentDidMount
    navigation.setOptions({ title: name });

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
    <View style={styles.messagingscreen}>
      <View
        style={[
          styles.messagingscreen,
          { paddingVertical: 15, paddingHorizontal: 10 },
        ]}
      >
        <FlatList
          ref={flatListRef}
          data={chatMessages}
          renderItem={({ item }) => <MessageComponent item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.messaginginputContainer}>
        <TextInput
          style={styles.messaginginput}
          value={message}
          onChangeText={(value) => setMessage(value)}
        />
        <Pressable
          style={styles.messagingbuttonContainer}
          onPress={handleNewMessage}
        >
          <View>
            <Text style={{ color: "#f2f0f1", fontSize: 20 }}>SEND</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Messaging;
