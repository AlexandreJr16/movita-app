import { View } from "react-native";
import Texto from "../../../components/Default/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import HeaderMyProduct from "../../../components/MeusProjetos/Header";
import AuthContext from "../../../contexts/auth.context";

import ShowCompaniesCarrossel from "../../../components/CarrosselShowCompanies";
import VitaNotFound from "../../../assents/Vita/VitaNotFound";
import debounce from "../../../utils/debounce";

const EmpresasSearchScreen = ({ navigation }: { navigation: any }) => {
  const { getTopEmpresas, findEmpresasByName } = useContext(AuthContext);
  const [produtos, setProdutos] = useState<any>([]);
  const [value, setValue] = useState<any>();

  //Get de dados dos projetos
  const fetchData = async () => {
    try {
      const topEmpresas = await getTopEmpresas(10);
      setProdutos([topEmpresas, topEmpresas]);
    } catch (error) {
      console.error("Erro ao obter os projetos:", error);
    }
  };
  const handleSearch = async (value: any) => {
    setValue(value);
    if (value == "") {
      fetchData();
    } else {
      const prod = await findEmpresasByName(value);
      setProdutos([prod]);
    }
  };
  const handleSearchDebounce = debounce(handleSearch, 1000);

  //Executa ao renderizar página
  useEffect(() => {
    fetchData();
  }, []);

  function saoTodosVaziosOuNulos(produtos: any) {
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
    <View style={styles.background}>
      <ScrollView style={styles.background}>
        <HeaderMyProduct
          handleSearch={handleSearchDebounce}
          textoSearch="Procurar empresas"
          navigation={navigation}
          title="Empresas Anteriores"
        />
        {!saoTodosVaziosOuNulos(produtos) ? (
          produtos.map((product: any[], i: React.Key | null | undefined) => (
            <ShowCompaniesCarrossel
              key={i}
              navigation={navigation}
              title={"Empresas bem avaliados:"}
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
