import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  View,
  Pressable,
  StatusBar,
  ImageBackground,
  FlatList,
} from "react-native";
import { Buffer } from "buffer";
import { ScrollView } from "react-native-gesture-handler";
import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
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
import ProjetoContext from "../../../../contexts/project.context";

export type SendMessage = {
  texto: string | null;
  imagem: any;
  modelo3d: Buffer | null;
  userName: string;
  roomId: number;
  tipoMessage: "TEXTO" | "IMAGEM" | "MODELO_3D" | "BRIEFING";
  briefing?: {
    title: string;
    answered: boolean;
    question: [{ text: string; response: string }];
  };
};

const Messaging = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);
  const { findProjetoByUserCompany } = useContext(ProjetoContext);
  const scrollViewRef = useRef(null);

  const [chatMessages, setChatMessages] = useState<MessageResponse[]>();
  const [visibleImagePicker, setVisibleImagePicker] = useState(false);
  const [visibleAnex, setVisibleAnex] = useState(false);

  //Texto sendo digitado
  const [message, setMessage] = useState("");

  //Cor da  barra de digitação
  const [variableColor, setVariableColor] = useState("#5A5A5A");

  const [lastMessage, setLastMessage] = useState<string | null>(null);
  const nome =
    user.tipoUser === "empresa"
      ? user.Empresa[0].nomeFantasia
      : user.Cliente[0].nome;

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
    const handleFoundRoom = async (roomChats: MessageResponse[]) => {
      setChatMessages(roomChats);
      roomChats.map((sala) => {
        if (sala.modelo3D) console.log(sala.modelo3D);
      });
      const projetos = await findProjetoByUserCompany({
        clienteId: item.userId1,
        empresaId: item.userId2,
      });
      console.log(projetos, "OAOAOOA");
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
      modelo3D: undefined,
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
      modelo3D: undefined,
      userName: nome,
      roomId: item.id,
      id: Math.random() * 3142142,
      createAt: new Date(),
    };

    socket.emit("newMessage", newMessage);
    setTimeout(() => {}, 2000);
    socket.emit("findRoom", item.id);
  };

  // Enviar novo modelo 3D
  const handleNewModel = (modelo: Buffer, nome: string) => {
    if (!modelo) return;
    const newMessage: MessageResponse = {
      tipoMessage: "MODELO_3D",
      texto: null,
      imagem: null,
      modelo3D: modelo,
      userName: nome,
      roomId: item.id,
      id: Math.random() * 3142142,
      createAt: new Date(),
    };
    console.log(newMessage);
    socket.emit("newMessage", newMessage);
  };

  // const picker = async () => {
  //   try {
  //     const doc = await DocumentPicker.getDocumentAsync({
  //       multiple: false,
  //       copyToCacheDirectory: true,
  //     });
  //     if (!doc.canceled) {
  //       const base64 = await FileSystem.readAsStringAsync(doc.assets[0].uri, {
  //         encoding: FileSystem.EncodingType.Base64,
  //       });
  //       const nome = doc.assets[0].name;

  //       // Converter o base64 em buffer
  //       const buffer = Buffer.from(base64, "base64");

  //       handleNewModel(buffer, nome);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const picker = () => {
    const dto = {
      tipoMessage: "BRIEFING",
      texto: null,
      imagem: null,
      modelo3D: undefined,
      userName: nome,
      roomId: item.id,
      id: Math.random() * 3142142,
      createAt: new Date(),
      briefing: {
        answered: false,
        title: "MOVEL NOVO",
        question: [
          { text: "QUAL È O NOME DO SEU IMRAO MAIS NOVO", response: null },
          { text: "QUAL È O NOME DO SEU IMRAO MAIS Velho", response: null },
          { text: "QUAL È O NOME DO SEU Irmão do meio", response: null },
        ],
      },
    };
    console.log(dto);
    socket.emit("newMessage", dto);
  };

  //Scrolar para o fim do bate papo
  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

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
          <Suspense>
            <ScrollView ref={scrollViewRef}>
              {chatMessages &&
                chatMessages.map((msg, index) => {
                  let different;
                  if (index == chatMessages.length - 1) {
                    different = true;
                  } else if (
                    chatMessages[index].userName !=
                    chatMessages[index + 1].userName
                  ) {
                    different = true;
                  }

                  return (
                    <MessageComponent
                      key={index}
                      item={msg}
                      different={different}
                      navigation={navigation}
                    ></MessageComponent>
                  );
                })}
            </ScrollView>
          </Suspense>
          {visibleAnex && (
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
                onPress={picker}
              >
                <Texto style={{ color: "#fff", fontSize: 18 }} weight="regular">
                  Anexar arquivo
                </Texto>
              </Pressable>
            </View>
          )}
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
                  // onPress={handleNewMessage}
                  onPress={() => {
                    setVisibleAnex(!visibleAnex);
                    setTimeout(() => {
                      scrollToBottom();
                    }, 1000);
                  }}
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
