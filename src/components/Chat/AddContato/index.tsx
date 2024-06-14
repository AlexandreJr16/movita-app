import { View, Text, Pressable } from "react-native";
import React, {
  Suspense,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import ChatRoutes from "../../../routes/tab/chat.routes";
import socket from "../../../utils/socket";
import ImagemBuffer from "../../Default/Imagem";
import AuthContext from "../../../contexts/auth.context";
import Texto from "../../Default/texto/Texto";

//DTO para a criação de sala de bate papo
type createRoomDTO = {
  userId1: number;
  userId2: number;
};

//DTO para o componente
type ComponentDTO = {
  id: number;
  imagem: ArrayBuffer;
  nome: string;
  navigation: any;
};

const AddContatoComponent = ({
  id,
  imagem,
  nome,
  navigation,
}: ComponentDTO) => {
  const { user } = useContext(AuthContext);

  //Faz a requisição para criar uma nova sala
  const createRoom = (dto: createRoomDTO) => {
    console.log(dto, "CRiando");
    const { userId1, userId2 } = dto;
    socket.emit("createRoom", { userId1, userId2 });
    socket.emit("roomList", { id: user.id });
    navigation.goBack();
  };

  return (
    <Suspense>
      <View style={styles.cchat}>
        {imagem ? (
          <ImagemBuffer
            imgBuffer={imagem}
            style={styles.cavatar}
          ></ImagemBuffer>
        ) : (
          <View
            style={{
              ...styles.cavatar,
              backgroundColor: "#f2f2f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Texto weight="bold" style={{ fontSize: 25 }}>
              {nome[0].toUpperCase()}
            </Texto>
          </View>
        )}

        <View style={styles.crightContainer}>
          <View>
            <Texto weight="bold" style={styles.cusername}>
              {nome}
            </Texto>
          </View>
          <Pressable
            style={styles.timeStyle}
            onPress={() => createRoom({ userId1: user.id, userId2: id })}
          >
            <Ionicons name="add" color={"#fff"} style={{ fontSize: 25 }} />
          </Pressable>
        </View>
      </View>
    </Suspense>
  );
};

export default AddContatoComponent;
