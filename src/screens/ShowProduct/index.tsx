import { View, StatusBar, Pressable, TouchableOpacity } from "react-native";
import Texto from "../../components/Default/texto/Texto";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import React, { useContext, useEffect, useState } from "react";
import ImagemBuffer from "../../components/Default/Imagem";
import HeaderPerfil from "../../components/Perfil/HeaderPerfil";
import AuthContext from "../../contexts";
import HeaderShowItem from "../../components/ShowItem/Header";
import LoadingIndicator from "../../components/Default/Loading";
import FeedBackShowProduct from "../../components/ShowItem/Feedback";
import AddModel from "../../components/Modelo3D/AddModel";
import MovelDefault from "../../assents/defaults/Projeto";
import ImagePickerModal from "../../components/ImageModal";

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
  const [projeto, setProjeto] = useState<Projeto>();
  const { getProject, loading, user, addImageProj } = useContext(AuthContext);
  const userId = user.id;
  const [liked, setLiked] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const imagePicker = () => (visible ? setVisible(false) : setVisible(true));
  useEffect(() => {
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

    fetchData();
  }, []);
  const uploadImage = (bin: any) => {
    const data = { bin, id: projeto.id };
    addImageProj(data);
  };

  const addLike = () => {};
  const deleteLike = () => {};
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
                nota: null,
              }}
            />
            <Texto weight="regular" style={styles.description}>
              {projeto.descricao}:
            </Texto>
            {projeto.Feedback[0] ? (
              <FeedBackShowProduct feedback={projeto.Feedback[0]} />
            ) : (
              <Texto weight={"bold"} style={{ color: "#fff" }}>
                Ainda não há nenhum feedback do cliente
              </Texto>
            )}
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
