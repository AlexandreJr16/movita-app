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
  TouchableOpacity,
} from "react-native";
import { Buffer } from "buffer";
import { ScrollView } from "react-native-gesture-handler";
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
import FixedProjects from "../../../../components/Chat/ShowFixedProjects/FixedProjects";

export type SendMessage = {
  texto: string | null;
  imagem: any;
  modelo3D: Buffer | null;
  userName: string;
  roomId: number;
  tipoMessage: "TEXTO" | "IMAGEM" | "MODELO_3D" | "BRIEFING" | "PROJETO";
  briefing?: {
    title: string;
    answered: boolean;
    question: [{ text: string; response: string }];
  };
  project: {
    title: string;
    detalhes: string;
  };
};

// "contratanteId": 1,
// "createdAt": "2024-05-01T13:48:00.069Z",
// "descricao": "Descrição do novo projeto",
//  "fabricanteId": 2,
//  "id": 1,
//   "imagem": [],
//    "nota": 0,
//    "status": "Esperando confirmação",
//     "titulo": "Novo Projeto",
//      "updatedAt": "2024-05-01T13:48:00.069Z"

export type ProjetosResponseType = {
  id: number;
  titulo: string;
  descricao: string;
  status: string;
  nota: number;
  imagem: Buffer[];

  contratanteId: number;
  fabricanteId: number;

  createdAt: string;
  updatedAt: string;
};

const Messaging = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);
  const { findProjetoByUserCompany } = useContext(ProjetoContext);
  const scrollViewRef = useRef(null);

  const [chatMessages, setChatMessages] = useState<MessageResponse[]>();
  const [visibleImagePicker, setVisibleImagePicker] = useState(false);
  const [visibleAnex, setVisibleAnex] = useState(false);
  const [projects, setProjects] = useState<ProjetosResponseType[]>();

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
      project: null,
    };

    console.log(newMessage);
    setChatMessages((prevMessages) => [...prevMessages, newMessage]);

    socket.emit("newMessage", newMessage);

    setMessage("");
    scrollToBottom();
  };

  // Pegar todos os itens associados
  const handleGetProjectsByChat = async () => {
    const response: ProjetosResponseType[] = await findProjetoByUserCompany({
      clienteId: item.userId1,
      empresaId: item.userId2,
    });
    setProjects(response);
  };

  useEffect(() => {
    handleGetProjectsByChat();
  }, []);

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
      project: null,
    };

    socket.emit("newMessage", newMessage);
    setTimeout(() => {}, 2000);
    setChatMessages((prevMessages) => [...prevMessages, newMessage]);

    socket.emit("findRoom", item.id);
  };

  // Mandar Modelo
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
      project: null,
    };
    socket.emit("newMessage", newMessage);
  };

  //Enviar Projeto ---  --- --- --- --- --- --- Apenas teste
  const picker = () => {
    const dto: SendMessage = {
      tipoMessage: "PROJETO",
      texto: null,
      imagem: null,
      modelo3D: null,
      userName: nome,
      roomId: item.id,
      briefing: null,
      project: { title: "OLA", detalhes: "ELE é bonito" },
    };
    socket.emit("newMessage", dto);
  };
  //--------------------------- --- --- --- --- ---

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
      <FixedProjects projetos={projects} navigation={navigation} />
      <View style={styles.messaContainer}>
        <ImageBackground
          resizeMode="cover"
          style={{
            flex: 1,
            paddingTop: 15,
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
                      users={{ user1: item.userId1, user2: item.userId2 }}
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
              <TouchableOpacity
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
              </TouchableOpacity>
              <TouchableOpacity
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
              </TouchableOpacity>
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
                <TouchableOpacity
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
                </TouchableOpacity>
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
                <TouchableOpacity
                  style={styles.messagingbuttonContainer}
                  onPress={handleNewMessage}
                >
                  <SendMessage />
                </TouchableOpacity>
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
