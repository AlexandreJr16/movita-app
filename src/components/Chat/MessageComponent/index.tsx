import { View, Text } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../.././utils/styles";
import AuthContext from "../../../contexts";

export default function MessageComponent({ item }) {
  const { user } = useContext(AuthContext);
  const status = item.userName !== user.nome;

  return (
    <View>
      <View
        style={
          status
            ? styles.mmessageWrapper
            : [styles.mmessageWrapper, { alignItems: "flex-end" }]
        }
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={
              status
                ? styles.mmessage
                : [styles.mmessage, { backgroundColor: "#7b7b7b" }]
            }
          >
            <Text>{item.message}</Text>
          </View>
        </View>
        <Text style={{ marginLeft: 40 }}>{item.time}</Text>
      </View>
    </View>
  );
}
