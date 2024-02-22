import { View } from "react-native";
import Texto from "../../components/Default/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import HeaderMyProduct from "../../components/MeusProjetos/Header";
import AuthContext from "../../contexts";
import ShowProductsCarousel from "../../components/CarrosselShowProducts";
import TextoInput from "../../components/Default/texto/TextoInput";
import ShowCompaniesCarrossel from "../../components/CarrosselShowCompanies";

const EmpresasSearchScreen = ({ navigation }) => {
  const { getTopEmpresas } = useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topEmpresas = await getTopEmpresas(10);
        setProdutos([topEmpresas]);
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <View style={styles.background}>
      <ScrollView style={styles.background}>
        <HeaderMyProduct
          textoSearch="Procurar empresas"
          navigation={navigation}
          title="Projetos Anteriores"
        />
        <ShowCompaniesCarrossel
          navigation={navigation}
          title={"Projetos bem avaliados:"}
          companies={produtos[0]}
        />
      </ScrollView>
    </View>
  );
};
export default EmpresasSearchScreen;
