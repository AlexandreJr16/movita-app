import { View } from "react-native";
import Texto from "../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import HeaderMyProduct from "../../components/MeusProjetos/Header";
import AuthContext from "../../contexts";
import ShowProductsCarousel from "../../components/CarrosselShowProducts";

const MeusProjetosScreen = ({ navigation }) => {
  const { getTopProjects, loading, getTopEmpresas } = useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topProjects = await getTopProjects(10);
        const topEmpresas = await getTopEmpresas(10);
        setProdutos([topProjects, topEmpresas]);
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.background}>
        <HeaderMyProduct
          navigation={navigation}
          color={"blue"}
          title="Projetos Anteriores"
        />
        <ShowProductsCarousel
          navigation={navigation}
          title={"Projetos bem avaliados:"}
          produtos={produtos[0]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default MeusProjetosScreen;
