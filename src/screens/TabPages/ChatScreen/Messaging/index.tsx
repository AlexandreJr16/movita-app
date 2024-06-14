import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import {
  View,
  Pressable,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  FlatList,
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
  texto?: string | null;
  imagem?: any;
  modelo3D?: Buffer | null;
  userName?: string;
  roomId?: number;
  tipoMessage?: "TEXTO" | "IMAGEM" | "MODELO_3D" | "BRIEFING" | "PROJETO";
  briefing?: {
    title: string;
    answered: boolean;
    question: [{ text: string; response: string }];
  };
  project?: {
    title: string;
    detalhes: string;
  };
};

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

const Messaging = ({ route, navigation }: { route: any; navigation: any }) => {
  const { user } = useContext(AuthContext);
  const { findProjetoByUserCompany } = useContext(ProjetoContext);
  const scrollViewRef = useRef<ScrollView>(null);

  const [chatMessages, setChatMessages] = useState<MessageResponse[]>([]);
  const [visibleImagePicker, setVisibleImagePicker] = useState(false);
  const [visibleAnex, setVisibleAnex] = useState(false);
  const [projects, setProjects] = useState<ProjetosResponseType[]>([]);

  // Texto sendo digitado
  const [message, setMessage] = useState("");

  // Cor da barra de digitação
  const [variableColor, setVariableColor] = useState<string | null>("#5A5A5A");

  const nome =
    user?.tipoUser === "empresa"
      ? user?.Empresa && user.Empresa[0]?.nomeFantasia
      : user?.Cliente && user.Cliente[0]?.nome;

  const itemParam: RoomResponse = route.params;

  const handleLastMessage = (text: string) => {
    // Função não utilizada no código fornecido
  };

  // Função de digitação
  const focusText = async () => {
    setVariableColor(null);
    await new Promise((resolve) => setTimeout(resolve, 500));
    scrollToBottom();
  };

  // Função de sair da digitação
  const blurText = async () => {
    setVariableColor("#5A5A5A");
  };

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  // Procurar bate-papos
  useEffect(() => {
    const handleFoundRoom = (roomChats: MessageResponse[]) => {
      setChatMessages(roomChats);
      scrollToBottom();
    };

    socket.emit("findRoom", { roomId: itemParam.id, take: 5, skip: 0 });
    socket.on("foundRoom", handleFoundRoom);

    return () => {
      socket.off("foundRoom", handleFoundRoom);
      socket.emit("disconnectFromSpecificRoom", itemParam.id);
    };
  }, [itemParam]);

  // Receber mensagens
  useEffect(() => {
    const handleNewMessageReceived = (newMessage: MessageResponse) => {
      if (nome === newMessage.userName) return;
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      scrollToBottom();
    };

    socket.on("newMessageReceived", handleNewMessageReceived);

    return () => {
      socket.off("newMessageReceived", handleNewMessageReceived);
    };
  }, [nome]);

  // Enviar nova mensagem
  const handleNewMessage = () => {
    if (message === "") return;

    const newMessage: MessageResponse = {
      tipoMessage: "TEXTO",
      texto: message,
      userName: nome,
      roomId: itemParam.id,
      id: Math.random() * 3142142,
      createAt: new Date(),
    };

    setChatMessages((prevMessages) => [...prevMessages, newMessage]);
    socket.emit("newMessage", newMessage);

    setMessage("");
    scrollToBottom();
  };

  // Pegar todos os itens associados
  const handleGetProjectsByChat = async () => {
    try {
      const response: ProjetosResponseType[] = await findProjetoByUserCompany({
        clienteId: itemParam.userId1,
        empresaId: itemParam.userId2,
      });
      setProjects(response);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  useEffect(() => {
    handleGetProjectsByChat();
  }, []);

  const handleNewImage = (imagem: Buffer) => {
    if (!imagem) return;

    const newMessage: MessageResponse = {
      tipoMessage: "IMAGEM",
      imagem,
      userName: nome,
      roomId: itemParam.id,
      id: Math.random() * 3142142,
      createAt: new Date(),
    };

    setChatMessages((prevMessages) => [...prevMessages, newMessage]);
    socket.emit("newMessage", newMessage);
  };

  // Enviar novo modelo 3D
  const handleNewModel = (modelo: Buffer) => {
    if (!modelo) return;
    const newMessage: MessageResponse = {
      tipoMessage: "MODELO_3D",
      modelo3D: modelo,
      userName: nome,
      roomId: itemParam.id,
      id: Math.random() * 3142142,
      createAt: new Date(),
    };
    socket.emit("newMessage", newMessage);
  };

  // Enviar Projeto (Apenas teste)
  const picker = () => {
    const dto: SendMessage = {
      tipoMessage: "PROJETO",
      userName: nome,
      roomId: itemParam.id,
      project: { title: "OLA", detalhes: "ELE é bonito" },
    };
    socket.emit("newMessage", dto);
  };

  const loadImage = (base64Image: any) => {
    handleNewImage(base64Image);
  };

  return (
    <View style={styles.messagingscreen}>
      <HeaderChat name={itemParam.name} navigation={navigation} />
      <FixedProjects projetos={projects} navigation={navigation} />
      <View style={styles.messaContainer}>
        <ImageBackground
          resizeMode="cover"
          style={{ flex: 1, padding: 5 }}
          source={require("../../../../assents/Chat/bg.png")}
        >
          <FlatList
            data={chatMessages}
            keyExtractor={(item) => `${item.id}`}
            inverted
            renderItem={({ item }) => (
              <MessageComponent
                item={item}
                navigation={navigation}
                users={{ user1: itemParam.userId1, user2: itemParam.userId2 }}
                different={false}
              />
            )}
          />
          {visibleAnex && (
            <View
              style={{
                width: "100%",
                backgroundColor: "#626262",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                paddingVertical: 10,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            >
              <Pressable
                onPress={() => setVisibleImagePicker(true)}
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
              backgroundColor: variableColor || undefined,
            }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "#8D8D8D",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 30,
              }}
            >
              <View style={styles.messaginginput}>
                <TouchableOpacity
                  style={styles.messagingbuttonContainer}
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
                  onChangeText={setMessage}
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
        setFalse={() => setVisibleImagePicker(false)}
        imagePicker={() => setVisibleImagePicker(false)}
        uploadFunction={loadImage}
      />
    </View>
  );
};

export default Messaging;

const HeaderChat = ({
  navigation,
  name,
}: {
  navigation: any;
  name: string;
}) => (
  <React.Fragment>
    <StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <Arrow color="#fff" />
      </Pressable>
      <Texto weight="bold" style={styles.textTitle}>
        {name}
      </Texto>
      <Logo color="#fff" />
    </View>
  </React.Fragment>
);
