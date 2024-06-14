import React, { useContext, useMemo } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import AuthContext from "../../../contexts/auth.context";
import Texto from "../../Default/texto/Texto";
import { MessageResponse } from "../../../screens/TabPages/ChatScreen";
import { formattedDate } from "../../../utils/tranformDataToString";
import ImagemBuffer from "../../Default/Imagem";
import { Buffer } from "buffer";

import ModelViewer from "./ModelViewer";
import BriefingComponent from "../BriefingComponent";
import ProjetoMessage from "../ProjetoMessage/ProjetoMessage";

export default function MessageComponent({
  item,
  different,
  navigation,
  users,
}: {
  item: MessageResponse;
  different: boolean;
  navigation: any;
  users: { user1: number; user2: number };
}) {
  const { user } = useContext(AuthContext);
  const nome = useMemo(() => {
    return user.tipoUser === "empresa"
      ? user.Empresa[0].nomeFantasia
      : user.Cliente[0].nome;
  }, [user]);

  const status = item.userName !== nome;

  const arrayBufferToBase64 = useMemo(() => {
    return (arrayBuffer: any) => {
      const base64 = arrayBuffer
        ? Buffer.from(arrayBuffer, "binary").toString("base64")
        : null;
      return `data:image/png;base64,${base64}`;
    };
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
                : [styles.mmessage, { backgroundColor: "#464646" }]
            }
          >
            {item.tipoMessage === "MODELO_3D" && item.modelo3D && (
              <React.Fragment>
                <ModelViewer base64={arrayBufferToBase64(item.modelo3D)} />
                <Texto weight="bold"> OLA</Texto>
              </React.Fragment>
            )}
            {item.tipoMessage === "IMAGEM" && (
              <ImagemBuffer
                imgBuffer={item.imagem}
                key={1}
                style={{
                  width: "90%",
                  height: 200,
                  minWidth: 200,
                  borderRadius: 16,
                }}
              />
            )}
            {item.tipoMessage === "TEXTO" && (
              <Texto weight="regular" style={{ color: "white" }}>
                {item.texto}
              </Texto>
            )}
            {item.tipoMessage === "BRIEFING" && (
              <BriefingComponent
                navigation={navigation}
                briefing={item.briefing}
              />
            )}
            {item.tipoMessage === "PROJETO" && (
              <ProjetoMessage users={users} projeto={item.project} />
            )}
          </View>
        </View>
        {different && (
          <Texto
            weight="regular"
            style={{ left: 0, color: "#9f9f9f", fontSize: 11 }}
          >
            {formattedDate(item.createAt)}
          </Texto>
        )}
      </View>
    </View>
  );
}
