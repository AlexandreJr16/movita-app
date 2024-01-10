import { View, Text } from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import AuthContext from "../../../contexts";
import Texto from "../../Default/texto/Texto";

export default function MessageComponent({ item }: { item: any }) {
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
            <Texto weight="regular" style={{ color: "white" }}>
              {item.message}
            </Texto>
          </View>
        </View>
        <Texto weight="regular" style={{ marginLeft: 40, color: "#000" }}>
          {item.time}
        </Texto>
      </View>
    </View>
  );
}
