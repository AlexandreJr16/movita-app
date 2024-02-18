import { View, Text } from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import AuthContext from "../../../contexts";
import Texto from "../../Default/texto/Texto";

export default function MessageComponent({ item }: { item: any }) {
  const { user } = useContext(AuthContext);
  const nome =
    user.tipoUser == "empresa"
      ? user.Empresa[0].nomeFantasia
      : user.Cliente[0].nome;
  const status = item.userName !== nome;

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
