import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { styles } from "./styles";
import AuthContext from "../../../contexts/auth.context";
import Texto from "../../Default/texto/Texto";
import { MessageResponse } from "../../../screens/TabPages/ChatScreen";
import { formattedDate } from "../../../utils/tranformDataToString";
import ImagemBuffer from "../../Default/Imagem";

export default function MessageComponent({
  item,
  different,
}: {
  item: MessageResponse;
  different: boolean;
}) {
  const { user } = useContext(AuthContext);
  const nome =
    user.tipoUser == "empresa"
      ? user.Empresa[0].nomeFantasia
      : user.Cliente[0].nome;
  const status = item.userName !== nome;

  useEffect(() => {
    if (item.imagem) console.log(item.imagem);
  }, []);

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
            {item.imagem ? (
              <View>
                <Texto weight="bold">Ola</Texto>
                <ImagemBuffer
                  imgBuffer={item.imagem}
                  key={1}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            ) : null}
            <Texto weight="regular" style={{ color: "white" }}>
              {item.texto}
            </Texto>
          </View>
        </View>
        {different ? (
          <Texto
            weight="regular"
            style={{ left: 0, color: "#9f9f9f", fontSize: 11 }}
          >
            {"createAt" in item
              ? formattedDate(item.createAt)
              : new Date().toLocaleString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
          </Texto>
        ) : null}
      </View>
    </View>
  );
}
