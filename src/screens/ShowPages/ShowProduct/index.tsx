import { View, StatusBar, Pressable, TouchableOpacity } from "react-native";
import Texto from "../../../components/Default/texto/Texto";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import React, { useContext, useEffect, useState } from "react";
import ImagemBuffer from "../../../components/Default/Imagem";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import AuthContext from "../../../contexts/auth.context";
import HeaderShowItem from "../../../components/ShowItem/Header";
import LoadingIndicator from "../../../components/Default/Loading";
import FeedBackShowProduct from "../../../components/ShowItem/Feedback";
import AddModel from "../../../components/Modelo3D/AddModel";
import MovelDefault from "../../../assents/defaults/Projeto";
import ImagePickerModal from "../../../components/ImageModal";
import ProjetoContext from "../../../contexts/project.context";

type Projeto = {
  id: number;
  titulo: string;
  descricao: string;
  imagem: any;
  status: string;
  nota: number;
  cliente: {
    id: number;
    nome: string;
    sobrenome: string;
  };
  empresa: {
    id: number;
    nomeFantasia: string;
    telefone: string;
  };
  Feedback: [
    {
      descricao: string;
      empresaId: number;
      id: number;
      nota: number;
      projetoId: number;
      userId: number;
    }
  ];
};

const ShowProduct = ({ route, navigation }) => {
  const id = route.params.id;
  const color = route.params.color;

  //Usa o context para pegar as informações e funções que podem ser acessadas globalmente
  const { loading, user, likeProject, deleteLikeProject } =
    useContext(AuthContext);

  const { getProject, addImageProj } = useContext(ProjetoContext);

  //UseStates
  const [projeto, setProjeto] = useState<Projeto>();
  const [liked, setLiked] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const userId = user.id;

  //Apenas faz o handle da visibilidade do modal de Get Imagem
  const imagePicker = () => (visible ? setVisible(false) : setVisible(true));

  //Pega os dados do projeto
  const fetchData = async () => {
    try {
      const proj = await getProject(id);
      proj.Like.map((liked) => {
        if (liked.userId == userId) setLiked(true);
      });
      setProjeto(proj);
    } catch (error) {
      console.error("Erro ao obter o projeto:", error);
    }
  };

  //Executado ao renderizar a página
  useEffect(() => {
    fetchData();
  }, []);

  //Função usada para enviar imagens
  const uploadImage = (bin: any) => {
    const data = { bin, id: projeto.id };
    addImageProj(data);
  };

  //Função para adicionar like
  const addLike = (value) => {
    likeProject(value);
  };
  //Função para deletar like
  const deleteLike = (value) => {
    deleteLikeProject(value);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={"#2f2f2f"} barStyle="light-content" />
      {projeto && (
        <View style={styles.itensContent}>
          <HeaderPerfil
            color={color}
            navigation={navigation}
            visiblePerfil={true}
          />
          {projeto.imagem[0] ? (
            <ImagemBuffer imgBuffer={projeto.imagem[0]} style={styles.img} />
          ) : (
            <MovelDefault />
          )}
          <View style={styles.card}>
            <HeaderShowItem
              data={{
                subtitle: projeto.empresa.nomeFantasia,
                title: projeto.titulo,
                id,
                liked,
                deleteLikeObj: deleteLike,
                likeObj: addLike,
                nota: projeto.nota ? `${projeto.nota}` : "0",
              }}
            />

            {projeto.Feedback[0] ? (
              <FeedBackShowProduct feedback={projeto.Feedback[0]} />
            ) : (
              <Texto weight={"bold"} style={{ color: "#fff" }}>
                Ainda não há nenhum feedback do cliente
              </Texto>
            )}
            {/* ADD Model e ImagePicker Modal servem apeans para o desenvolvimento */}
            <AddModel id={projeto.id} />
            <TouchableOpacity onPress={imagePicker}>
              <Texto weight="bold">Adicione a foto ao projeto</Texto>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <ImagePickerModal
        imagePicker={imagePicker}
        visible={visible}
        uploadFunction={uploadImage}
      />
      <LoadingIndicator visible={loading} />
    </ScrollView>
  );
};
export default ShowProduct;
