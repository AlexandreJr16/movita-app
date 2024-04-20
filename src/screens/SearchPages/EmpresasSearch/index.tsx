import { View } from "react-native";
import Texto from "../../../components/Default/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import HeaderMyProduct from "../../../components/MeusProjetos/Header";
import AuthContext from "../../../contexts/auth.context";
import ShowProductsCarousel from "../../../components/CarrosselShowProducts";
import TextoInput from "../../../components/Default/texto/TextoInput";
import ShowCompaniesCarrossel from "../../../components/CarrosselShowCompanies";
import VitaNotFound from "../../../assents/Vita/VitaNotFound";

const EmpresasSearchScreen = ({ navigation }) => {
  const { getTopEmpresas } = useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);

  //Get de dados dos projetos
  const fetchData = async () => {
    try {
      const topEmpresas = await getTopEmpresas(10);
      setProdutos([topEmpresas]);
    } catch (error) {
      console.error("Erro ao obter os projetos:", error);
    }
  };

  //Executa ao renderizar página
  useEffect(() => {
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
        {produtos ? (
          produtos.map((product, i) => (
            <ShowCompaniesCarrossel
              key={i}
              navigation={navigation}
              title={"Projetos bem avaliados:"}
              companies={product}
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
              Não conseguimos encontrar esta empresa.
            </Texto>
            <VitaNotFound />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default EmpresasSearchScreen;
