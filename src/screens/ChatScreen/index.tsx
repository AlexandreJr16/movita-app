import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import ChatModal from "../../components/Chat/Modal";
import ChatComponent from "../../components/Chat/ChatComponent/index";
import { styles } from "../../utils/styles";
import socket from "../../utils/socket";
import { API_URL } from "../../../configs";

const Chat = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  //👇🏻 Dummy list of rooms
  const [rooms, setRooms] = useState([]);

  //👇🏻 Runs when the component mounts

  //👇🏻 Runs whenever there is new trigger from the backend
  useLayoutEffect(() => {
    function fetchGroups() {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setRooms(data))
        .catch((err) => console.error(err));
    }
    fetchGroups();
  }, []);

  //👇🏻 Runs whenever there is new trigger from the backend
  useEffect(() => {
    socket.on("roomsList", (rooms) => {
      setRooms(rooms);
    });
  }, [socket]);

  return (
    <SafeAreaView style={styles.chatscreen}>
      <View style={styles.chattopContainer}>
        <View style={styles.chatheader}>
          <Text style={styles.chatheading}>Chats</Text>

          {/* 👇🏻 Logs "ButtonPressed" to the console when the icon is clicked */}
          <Pressable
            onPress={() => {
              setVisible(true);
            }}
          >
            <Feather name="edit" size={24} color="green" />
          </Pressable>
        </View>
      </View>

      <View style={styles.chatlistContainer}>
        {rooms.length > 0 ? (
          <FlatList
            data={rooms}
            renderItem={({ item }) => (
              <ChatComponent navigation={navigation} item={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.chatemptyContainer}>
            <Text style={styles.chatemptyText}>No rooms created!</Text>
            <Text>Click the icon above to create a Chat room</Text>
          </View>
        )}
      </View>
      {visible ? <ChatModal setVisible={setVisible} /> : ""}
    </SafeAreaView>
  );
};

export default Chat;
