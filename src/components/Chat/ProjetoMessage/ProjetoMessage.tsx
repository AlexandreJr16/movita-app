import React, { useContext, useState } from "react";
import { View, Pressable } from "react-native";
import Texto from "../../Default/texto/Texto";
import Button from "../../splashScreen/button/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProjetoContext from "../../../contexts/project.context";
import { AuthContex } from "../../../contexts/providersContext";
import AuthContext from "../../../contexts/auth.context";

type EnviarResposta = {
  users: { user1: number; user2: number };
  titulo: string;
  descricao: string;
};

const ProjetoMessage = ({
  projeto,
  users,
}: {
  projeto: {
    id: number;
    title: string;
    detalhes: string;
    messageId: number;
    respondido: boolean;
    resposta: boolean;
  };
  users: { user1: number; user2: number };
}) => {
  const { createProjeto } = useContext(ProjetoContext);
  const { user } = useContext(AuthContext);

  const [visible, setVisible] = useState(false);

  const handleResponderProjeto = async (value: boolean) => {
    const dto: EnviarResposta = {
      descricao: projeto.detalhes,
      titulo: projeto.title,
      users: users,
    };
    const response = await createProjeto(dto);
    if (response) {
    }
  };

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
                <Texto weight="bold" style={{ color: "white", fontSize: 13 }}>
                  {projeto.detalhes}
                </Texto>
              </View>
            )}
            {user.tipoUser == "cliente" ? (
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  width: "100%",
                  gap: 10,
                  paddingTop: 15,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    handleResponderProjeto(true);
                  }}
                  style={{
                    backgroundColor: "#238298",
                    width: "100%",
                    paddingHorizontal: 25,
                    paddingVertical: 8,
                  }}
                >
                  <Texto weight="bold" style={{ color: "#fff" }}>
                    Aceitar
                  </Texto>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleResponderProjeto(false);
                  }}
                  style={{
                    backgroundColor: "#D06A52",
                    width: "100%",
                    paddingHorizontal: 25,
                    paddingVertical: 8,
                  }}
                >
                  <Texto weight="bold" style={{ color: "#fff" }}>
                    Recusar
                  </Texto>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </React.Fragment>
      ) : null}
    </View>
  );
};

export default ProjetoMessage;
