import { View } from "react-native";
import Texto from "../../components/Default/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import HeaderMyProduct from "../../components/MeusProjetos/Header";
import AuthContext from "../../contexts";
import ShowProductsCarousel from "../../components/CarrosselShowProducts";

const MeusProjetosScreen = ({ navigation }) => {
  const { getTopProjects } = useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topProjects = await getTopProjects(10);
        setProdutos([topProjects]);
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ScrollView style={styles.background}>
      <HeaderMyProduct
        navigation={navigation}
        color={"blue"}
        title="Projetos Anteriores"
        handleSearch={undefined}
      />
      <ShowProductsCarousel
        navigation={navigation}
        title={"Projetos bem avaliados:"}
        produtos={produtos[0]}
      />
    </ScrollView>
  );
};
export default MeusProjetosScreen;
