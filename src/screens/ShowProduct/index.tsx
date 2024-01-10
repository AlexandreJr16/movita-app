import { View, StatusBar } from "react-native";
import Texto from "../../components/texto/Texto";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import React, { useContext, useEffect, useState } from "react";
import ImagemBuffer from "../../components/Imagem";
import HeaderPerfil from "../../components/Perfil/HeaderPerfil";
import AuthContext from "../../contexts";
import HeaderShowItem from "../../components/ShowItem/Header";
import LoadingIndicator from "../../components/Loading";
import FeedBackShowProduct from "../../components/ShowItem/Feedback";

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
  const { getProject, loading, user } = useContext(AuthContext);
  const userId = user.id;
  const [liked, setLiked] = useState<boolean>(false);

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

          <ImagemBuffer imgBuffer={projeto.imagem[0]} style={styles.img} />
          <View style={styles.card}>
            <HeaderShowItem
              data={{
                madeBy: projeto.empresa.nomeFantasia,
                title: projeto.titulo,
                id,
                liked,
              }}
            />
            <Texto weight="regular" style={styles.description}>
              {projeto.descricao}:
            </Texto>
            {projeto.Feedback[0] ? (
              <FeedBackShowProduct feedback={projeto.Feedback[0]} />
            ) : (
              <Texto weight={"bold"} style={{ color: "#fff" }}>
                Ainda não há nada aqui
              </Texto>
            )}
          </View>
        </View>
      )}
      <LoadingIndicator visible={loading} />
    </ScrollView>
  );
};
export default ShowProduct;
