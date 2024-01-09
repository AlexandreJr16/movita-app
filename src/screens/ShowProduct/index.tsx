import { View } from "react-native";
import Texto from "../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
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
  const { getProject, loading } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proj = await getProject(id);
        setProjeto(proj);
      } catch (error) {
        console.error("Erro ao obter o projeto:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ScrollView style={styles.container}>
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
              }}
            />
            <Texto weight="regular" style={styles.description}>
              {/* {projeto.descricao}: */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              tempore, ab neque voluptatem numquam molestiae perspiciatis
              necessitatibus iure temporibus aperiam aliquid libero consectetur,
              atque architecto deleniti rerum, sequi labore vel.
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
