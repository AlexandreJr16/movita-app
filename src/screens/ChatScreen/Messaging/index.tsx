import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../../../components/Chat/MessageComponent/index";
import { styles } from "../../.././utils/styles";
import socket from "../../../utils/socket";
import AuthContext from "../../../contexts";

const Messaging = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  const flatListRef = useRef(null);

  const { name, id } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: name });
    socket.emit("findRoom", id);
    socket.on("foundRoom", (roomChats) => {
      setChatMessages(roomChats);
      scrollToBottom();
    });
  }, [id, navigation]);

  useEffect(() => {
    socket.on("foundRoom", (roomChats) => {
      setChatMessages(roomChats);
      scrollToBottom();
    });

    // Cleanup function to remove the socket listener when the component unmounts
    return () => {
      socket.off("foundRoom");
    };
  }, []);

  const handleNewMessage = () => {
    const hour = new Date().getHours().toString().padStart(2, "0");
    const mins = new Date().getMinutes().toString().padStart(2, "0");

    const newMessage = {
      id: `${Date.now()}`, // Use a unique identifier like timestamp
      text: message,
      time: `${hour}:${mins}`,
      user: user.nome,
    };

    setChatMessages((prevMessages) => [...prevMessages, newMessage]);

    socket.emit("newMessage", {
      room_id: id,
      message,
      user: user.nome,
      timestamp: { hour, mins },
    });
    socket.emit("findRoom", id);

    setMessage("");
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
