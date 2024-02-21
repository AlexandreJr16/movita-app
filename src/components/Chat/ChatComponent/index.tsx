import { View, Text, Pressable } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import ChatRoutes from "../../../routes/tab/chat.routes";
import socket from "../../../utils/socket";
import ImagemBuffer from "../../Default/Imagem";
import AuthContext from "../../../contexts";
import Texto from "../../Default/texto/Texto";

const ChatComponent = ({
  item,
  navigation,
}: {
  item: any;
  navigation: any;
}) => {
  const [messages, setMessages] = useState<{
    id: string;
    messagem: string;
    time: string;
    user: string;
  }>({ id: "oi", messagem: "errou", time: "1:76", user: "Ale" });

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

      setMessages({
        user: lastMessage.userName,
        messagem: lastMessage.message,
        time: formattedTime,
        id: lastMessage.roomId,
      });
    } else {
      setMessages({
        id: "1",
        messagem: `Diga olá para ${item.name}`,
        time: "",
        user: "Ale",
      });
    }
  }, []);

  const handleNavigation = () => {
    navigation.navigate("Message", {
      id: item.id,
      name: item.name,
    });
    socket.emit("joinRoom", item.id);
  };

  return (
    <Pressable style={styles.cchat} onPress={handleNavigation}>
      <ImagemBuffer imgBuffer={item.img} style={styles.cavatar}></ImagemBuffer>

      <View style={styles.crightContainer}>
        <View>
          <Texto weight="bold" style={styles.cusername}>
            {item.name}
          </Texto>

          <Texto weight="regular" style={styles.cmessage}>
            {messages?.messagem ? messages.messagem : "Tap to start chatting"}
          </Texto>
        </View>
        <View style={styles.timeStyle}>
          <Texto weight="regular" style={styles.ctime}>
            {messages?.time ? messages.time : ""}
          </Texto>
        </View>
      </View>
    </Pressable>
  );
};

export default ChatComponent;
