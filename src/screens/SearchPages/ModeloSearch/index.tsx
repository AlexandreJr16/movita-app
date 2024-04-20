import { View } from "react-native";
import Texto from "../../../components/Default/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import HeaderMyProduct from "../../../components/MeusProjetos/Header";
import AuthContext from "../../../contexts/auth.context";
import ShowProductsCarousel from "../../../components/CarrosselShowProducts";
import ProjetoContext from "../../../contexts/project.context";
import VitaNotFound from "../../../assents/Vita/VitaNotFound";

const ModelosSearch = ({ navigation }) => {
  const { getTopProjects } = useContext(ProjetoContext);
  const [produtos, setProdutos] = useState([]);

  // Faz o get dos projetos
  const fetchData = async () => {
    try {
      const topProjects = await getTopProjects(10);
      setProdutos([topProjects, topProjects]);
    } catch (error) {
      console.error("Erro ao obter os projetos:", error);
    }
  };

  //Executa ao renderizar página
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScrollView style={styles.background}>
      <HeaderMyProduct
        textoSearch="Procurar Projetos"
        navigation={navigation}
        color={"blue"}
        title="Projetos Anteriores"
        handleSearch={undefined}
      />
      {produtos ? (
        produtos.map((product, i) => (
          <ShowProductsCarousel
            key={i}
            navigation={navigation}
            title={"Projetos bem avaliados:"}
            produtos={product}
          />
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Texto
            weight="bold"
            style={{
              ...styles.emptyText,
            }}
          >
            Não conseguimos encontrar este modelo.
          </Texto>
          <VitaNotFound />
        </View>
      )}
    </ScrollView>
  );
};
export default ModelosSearch;
