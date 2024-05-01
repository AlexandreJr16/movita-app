import React, { useState } from "react";
import { View, Pressable } from "react-native";
import Texto from "../../Default/texto/Texto";

const ProjetoMessage = ({
  projeto,
}: {
  projeto: {
    id: number;
    title: string;
    detalhes: string;
    messageId: number;
    respondido: boolean;
    resposta: boolean;
  };
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ flex: 1, gap: 15 }}>
      {projeto ? (
        <React.Fragment>
          <View
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Texto style={{ color: "white", fontSize: 18 }} weight="bold">
              {projeto.title}
            </Texto>
            <Texto weight="regular" style={{ color: "#989898", fontSize: 14 }}>
              Projeto do móvel planejado
            </Texto>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Pressable
              onPress={() => {
                setVisible(!visible);
              }}
            >
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                <Texto
                  weight="regular"
                  style={{ color: "white", fontSize: 14 }}
                >
                  Detalhes
                </Texto>
                <Texto weight="bold" style={{ color: "white", fontSize: 14 }}>
                  +
                </Texto>
              </View>
            </Pressable>
            {visible && (
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: 15,
                }}
              >
                <Texto weight="bold"> {projeto.detalhes}</Texto>
              </View>
            )}
          </View>
        </React.Fragment>
      ) : null}
    </View>
  );
};

export default ProjetoMessage;
