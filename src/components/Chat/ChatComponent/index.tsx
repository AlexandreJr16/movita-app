import { View, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import styles from "./styles";
import socket from "../../../utils/socket";
import ImagemBuffer from "../../Default/Imagem";
import Texto from "../../Default/texto/Texto";
import {
  MessageResponse,
  RoomResponse,
} from "../../../screens/TabPages/ChatScreen";
import { formattedDate } from "../../../utils/tranformDataToString";
import { TouchableOpacity } from "react-native-gesture-handler";

const ChatComponent = ({
  item,
  navigation,
}: {
  item: RoomResponse;
  navigation: any;
}) => {
  const [messages, setMessages] = useState<MessageResponse>();

  useLayoutEffect(() => {
    const lastMessage = item.Message[item.Message.length - 1];

    if (lastMessage != undefined) {
      const createdAtDate = new Date(lastMessage.createAt);
      const now = new Date();
      const timeDifference = now.getTime() - createdAtDate.getTime();
      let formattedTime;

      if (timeDifference < 86400000) {
        formattedTime = `${createdAtDate.getHours()}:${createdAtDate
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;
      } else {
        const daysAgo = Math.floor(timeDifference / 86400000);
        formattedTime = `há ${daysAgo} dias`;
      }

      setMessages(lastMessage);
    }
  }, []);

  // Navegar para a tela de chat
  const handleNavigation = () => {
    navigation.navigate("Message", item);
    socket.emit("joinRoom", item.id);
  };

  return (
    <Pressable style={styles.cchat} onPress={handleNavigation}>
      {item.img ? (
        <ImagemBuffer
          imgBuffer={item.img}
          style={styles.cavatar}
        ></ImagemBuffer>
      ) : (
        <View
          style={{
            ...styles.cavatar,
            backgroundColor: "#f2f2f2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Texto weight="bold" style={{ fontSize: 25 }}>
            {item.name[0].toUpperCase()}
          </Texto>
        </View>
      )}
      <View style={styles.crightContainer}>
        <View>
          <Texto weight="bold" style={styles.cusername}>
            {item.name}
          </Texto>

          <Texto weight="regular" style={styles.cmessage}>
            {messages?.texto ? messages.texto : "Tap to start chatting"}
          </Texto>
        </View>
        <View style={styles.timeStyle}>
          <Texto weight="regular" style={styles.ctime}>
            {messages?.createAt ? formattedDate(messages.createAt) : ""}
          </Texto>
        </View>
      </View>
    </Pressable>
  );
};

export default ChatComponent;
