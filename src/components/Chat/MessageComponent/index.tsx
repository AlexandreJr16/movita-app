import { View, Text } from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import AuthContext from "../../../contexts";
import Texto from "../../Default/texto/Texto";

type Room = {
  id: number;
  userId: number;
  userId2: number;
};
type MessageReceived = {
  createAt: string;
  id: number;
  message: string;
  room: Room;
  userName: string;
};
type CreateNowMessage = {
  id: string;
  message: string;
  roomId: number;
  time: string;
  userName: string;
};

export default function MessageComponent({
  item,
  different,
}: {
  item: MessageReceived | CreateNowMessage;
  different: boolean;
}) {
  const { user } = useContext(AuthContext);
  const nome =
    user.tipoUser == "empresa"
      ? user.Empresa[0].nomeFantasia
      : user.Cliente[0].nome;
  const status = item.userName !== nome;

  useEffect(() => {});

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
        {different ? (
          <Texto
            weight="regular"
            style={{ left: 0, color: "#9f9f9f", fontSize: 11 }}
          >
            {"createAt" in item
              ? new Date(item.createAt).toLocaleString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : item.time}
          </Texto>
        ) : null}
      </View>
    </View>
  );
}
