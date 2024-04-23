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
import debounce from "../../../utils/debounce";

const ModelosSearch = ({ navigation }) => {
  const { getTopProjects, findProjetoByName } = useContext(ProjetoContext);
  const [produtos, setProdutos] = useState([]);
  const [value, setValue] = useState();
  const [visible, setVisible] = useState(true);

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

  const handleSearch = async (value) => {
    setValue(value);
    if (value == "") {
      fetchData();
    } else {
      const prod = await findProjetoByName(value);
      console.log([prod, prod]);
      setProdutos([prod, prod]);
    }
  };
  const handleSearchDebounce = debounce(handleSearch, 1000);

  function saoTodosVaziosOuNulos(produtos) {
    if (!Array.isArray(produtos)) {
      return false;
    }
    for (let i = 0; i < produtos.length; i++) {
      const arrayInterno = produtos[i];
      if (!Array.isArray(arrayInterno) || arrayInterno.length !== 0) {
        return false;
      }
    }
    return true;
  }

  return (
    <ScrollView style={styles.background}>
      <HeaderMyProduct
        textoSearch="Procurar Projetos"
        navigation={navigation}
        color={"blue"}
        title="Projetos Anteriores"
        handleSearch={handleSearchDebounce}
      />
      {!saoTodosVaziosOuNulos(produtos) ? (
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
