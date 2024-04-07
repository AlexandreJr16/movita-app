import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Pressable,
  StatusBar,
  ImageBackground,
  FlatList,
} from "react-native";
import SendMessage from "../../../../assents/Chat/SendMessage";
import AddSource from "../../../../assents/Chat/addSoruce";
import Arrow from "../../../../assents/Perfil/Arrow";
import Logo from "../../../../assents/Perfil/Logo";
import Texto from "../../../../components/Default/texto/Texto";
import TextoInput from "../../../../components/Default/texto/TextoInput";
import AuthContext from "../../../../contexts/auth.context";
import socket from "../../../../utils/socket";
import styles from "./styles";
import { MessageResponse, RoomResponse } from "..";
import MessageComponent from "../../../../components/Chat/MessageComponent";
import ImagePickerModal from "../../../../components/ImageModal";

export type SendMessage = {
  texto: string | null;
  imagem: any;
  modelo3d: Buffer | null;
  userName: string;
  roomId: number;
  tipoMessage: "TEXTO" | "IMAGEM" | "MODELO_3D";
};

const Messaging = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);
  const [chatMessages, setChatMessages] = useState<MessageResponse[]>();
  const [visibleImagePicker, setVisibleImagePicker] = useState(false);

  //Texto sendo digitado
  const [message, setMessage] = useState("");

  //Cor da  barra de digitação
  const [variableColor, setVariableColor] = useState("#5A5A5A");

  const [lastMessage, setLastMessage] = useState<string | null>(null);
  const nome =
    user.tipoUser === "empresa"
      ? user.Empresa[0].nomeFantasia
      : user.Cliente[0].nome;

  const flatListRef = useRef(null);

  const item: RoomResponse = route.params;

  const handleLastMessage = (text: string) => {
    setLastMessage(text);
  };

  //Função de digitação
  const focusText = async () => {
    setVariableColor(null);
    await new Promise((resolve) => setTimeout(resolve, 500));
    scrollToBottom();
  };

  //Função de sair da digitação
  const blurText = async () => {
    setVariableColor("#5A5A5A");
  };

  //Procurar bate-papos
  useEffect(() => {
    const handleFoundRoom = (roomChats: MessageResponse[]) => {
      setChatMessages(roomChats);
      roomChats.map((room) => {
        if (room.imagem) console.log(room.imagem.toString("base64"), "O");
      });
      scrollToBottom();
    };

    socket.emit("findRoom", item.id);
    socket.on("foundRoom", handleFoundRoom);

    return () => {
      socket.off("foundRoom", handleFoundRoom);
      socket.emit("disconnectFromSpecificRoom", item.id);
    };
  }, [item]);

  //Receber mensagens
  useEffect(() => {
    const handleNewMessageReceived = (newMessage) => {
      if (nome == newMessage.userName) return;
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      console.log(newMessage, "\n");
      scrollToBottom();
    };

    socket.on("newMessageReceived", handleNewMessageReceived);

    return () => {
      socket.off("newMessageReceived", handleNewMessageReceived);
    };
  }, []);

  //Enviar nova mensagem
  const handleNewMessage = () => {
    if (message === "") return;

    const newMessage: MessageResponse = {
      tipoMessage: "TEXTO",
      texto: message,
      imagem: null,
      modelo3d: undefined,
      userName: nome,
      roomId: item.id,
      id: Math.random() * 3142142,
      createAt: new Date(),
    };

    setChatMessages((prevMessages) => [...prevMessages, newMessage]);

    socket.emit("newMessage", newMessage);

    setMessage("");
    scrollToBottom();
  };
  const handleNewImage = (imagem: Buffer) => {
    if (!imagem) return;

    const newMessage: MessageResponse = {
      tipoMessage: "IMAGEM",
      texto: null,
      imagem: imagem,
      modelo3d: undefined,
      userName: nome,
      roomId: item.id,
      id: Math.random() * 3142142,
      createAt: new Date(),
    };

    socket.emit("newMessage", newMessage);
  };

  //Scrolar para o fim do bate papo
  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const loadImage = (base64Image: any) => {
    handleNewImage(base64Image);
  };

  return (
    <View style={styles.messagingscreen}>
      <StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Arrow color="#fff" />
        </Pressable>
        <Texto weight="bold" style={styles.textTitle}>
          {item.name}
        </Texto>
        <Logo color="#fff" />
      </View>
      <View style={styles.messaContainer}>
        <ImageBackground
          resizeMode="cover"
          imageStyle={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
          style={{
            flex: 1,
            paddingTop: 15,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
          }}
          source={require("../../../../assents/Chat/bg.png")}
        >
          <FlatList
            ref={flatListRef}
            data={chatMessages}
            renderItem={({ item, index }) => {
              let different;
              if (index == chatMessages.length - 1) {
                different = true;
              } else if (
                chatMessages[index].userName != chatMessages[index + 1].userName
              ) {
                different = true;
              }

              return <MessageComponent item={item} different={different} />;
            }}
            keyExtractor={(item) =>
              "id" in item ? `${item.id}` : `${Math.random() * 3}`
            }
            style={{ paddingHorizontal: 15 }}
            onContentSizeChange={scrollToBottom}
          />
          <View
            style={{
              width: "100%",
              backgroundColor: "#626262",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              paddingVertical: 10,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
          >
            <Pressable
              onPress={() => {
                setVisibleImagePicker(true);
              }}
              style={{
                backgroundColor: "#36A5BF",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 16,
              }}
            >
              <Texto style={{ color: "#fff", fontSize: 18 }} weight="regular">
                Anexar imagem
              </Texto>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#D06A52",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 16,
              }}
            >
              <Texto style={{ color: "#fff", fontSize: 18 }} weight="regular">
                Anexar arquivo
              </Texto>
            </Pressable>
          </View>
          <View
            style={{
              ...styles.messaginginputContainer,
              backgroundColor: variableColor,
            }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "#8D8D8D",
                display: "flex",

                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 30,
              }}
            >
              <View style={styles.messaginginput}>
                <Pressable
                  style={styles.messagingbuttonContainer}
                  onPress={handleNewMessage}
                >
                  <AddSource />
                </Pressable>
                <TextoInput
                  onFocus={focusText}
                  onBlur={blurText}
                  weight="regular"
                  style={styles.inputMessage}
                  value={message}
                  placeholderColor="#fff"
                  onChangeText={(value) => setMessage(value)}
                  placeholder="Digite aqui"
                />
                <Pressable
                  style={styles.messagingbuttonContainer}
                  onPress={handleNewMessage}
                >
                  <SendMessage />
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <ImagePickerModal
        visible={visibleImagePicker}
        setFalse={() => {
          setVisibleImagePicker(false);
        }}
        imagePicker={() => {
          setVisibleImagePicker(false);
        }}
        uploadFunction={loadImage}
      />
    </View>
  );
};

export default Messaging;
