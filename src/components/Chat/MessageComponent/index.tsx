import React, { useContext, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import AuthContext from "../../../contexts/auth.context";
import Texto from "../../Default/texto/Texto";
import { MessageResponse } from "../../../screens/TabPages/ChatScreen";
import { formattedDate } from "../../../utils/tranformDataToString";
import ImagemBuffer from "../../Default/Imagem";
import { Buffer } from "buffer";

import { GLView } from "expo-gl";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ModelViewer from "./ModelViewer";

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

  const arrayBufferToBase64 = (arrayBuffer) => {
    const base64 = arrayBuffer
      ? Buffer.from(arrayBuffer, "binary").toString("base64")
      : null;
    const url = `data:image/png;base64,${base64}`;

    return url;
  };

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
            {item.tipoMessage === "MODELO_3D" && item.modelo3D ? (
              <React.Fragment>
                {/* Converter modelo 3D para base64 antes de passá-lo para o ModelViewer */}
                <ModelViewer />
                <Texto weight="bold"> OLA</Texto>
              </React.Fragment>
            ) : null}
            {item.tipoMessage === "IMAGEM" && (
              <ImagemBuffer
                imgBuffer={item.imagem}
                key={1}
                style={{ width: 250, height: 250 }}
              />
            )}
            {item.tipoMessage === "TEXTO" && (
              <Texto weight="regular" style={{ color: "white" }}>
                {item.texto}
              </Texto>
            )}
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
