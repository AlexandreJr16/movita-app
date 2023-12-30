import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../utils/styles";
import ChatRoutes from "../../../routes/chat.routes";

const ChatComponent = ({
  item,
  navigation,
  user,
}: {
  item: any;
  navigation: any;
  user?: any;
}) => {
  const [messages, setMessages] = useState<{
    id: string;
    text: string;
    time: string;
    user: string;
  }>({ id: "oi", text: "errou", time: "1:76", user: "Ale" });

  //👇🏻 Retrieves the last message in the array from the item prop

  useLayoutEffect(() => {
    // if (item.messages.length - 1 > 4) {
    //   setMessages(item.messages[item.messages.length - 1]);
    // } else
    setMessages({ id: "1", text: "Ola", time: "12:98", user: "Ale" });
  }, []);

  ///👇🏻 Navigates to the Messaging screen
  const handleNavigation = () => {
    navigation.navigate("Message", {
      id: item.id,
      name: item.name,
    });
  };

  return (
    <Pressable style={styles.cchat} onPress={handleNavigation}>
      <Ionicons
        name="person-circle-outline"
        size={45}
        color="black"
        style={styles.cavatar}
      />

      <View style={styles.crightContainer}>
        <View>
          <Text style={styles.cusername}>{item.name}</Text>

          <Text style={styles.cmessage}>
            {messages?.text ? messages.text : "Tap to start chatting"}
          </Text>
        </View>
        <View>
          <Text style={styles.ctime}>
            {messages?.time ? messages.time : "now"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ChatComponent;
