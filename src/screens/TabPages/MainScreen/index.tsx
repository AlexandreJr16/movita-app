import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import { View, ScrollView, StatusBar, ActivityIndicator } from "react-native";
import AuthContext from "../../../contexts/auth.context";
import styles from "./styles";
import HeaderMain from "../../../components/Main/Header";
import SelectCategory from "../../../components/Main/SelectCategory";
import ShowCompaniesCarrossel from "../../../components/CarrosselShowCompanies";

import ProjetoContext from "../../../contexts/project.context";
import ShowProductsCarousel from "../../../components/CarrosselShowProducts";

export default function MainScreen({ navigation }: { navigation: any }) {
  const { loading, getTopEmpresas } = useContext(AuthContext);
  const [produtos, setProdutos] = useState<any>([]);
  const { getTopProjects, getRandomProjects } = useContext(ProjetoContext);

  //Faz o get da Api quando a página é renderizada e seta os produtos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const topProjects = await getTopProjects(10);
        const topEmpresas = await getTopEmpresas(10);
        const aleatorioProdutos = await getRandomProjects(10);

        setProdutos([topProjects, topEmpresas, aleatorioProdutos[0].produtos]);
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.background}>
      <ScrollView style={styles.background}>
        <StatusBar
          backgroundColor={"#2f2f2f"}
          barStyle="light-content"
          translucent={true}
        />

        <View style={styles.background}>
          <HeaderMain navigation={navigation} />
          <SelectCategory navigation={navigation} />

          <React.Fragment>
            <Suspense fallback={<ActivityIndicator />}>
              <ShowProductsCarousel
                navigation={navigation}
                title={"Projetos bem avaliados:"}
                produtos={produtos[0]}
                color={"#36A5BF"}
                loading={loading}
              />

              <ShowCompaniesCarrossel
                navigation={navigation}
                title={"Empresas bem avaliados:"}
                companies={produtos[1]}
                loading={loading}
              />
              <ShowProductsCarousel
                loading={loading}
                navigation={navigation}
                title={"Outros:"}
                produtos={produtos[2]}
                color={"#36A5BF"}
              />

              <ShowCompaniesCarrossel
                navigation={navigation}
                title={"Empresas bem avaliados:"}
                companies={produtos[1]}
                loading={loading}
              />
              <ShowProductsCarousel
                loading={loading}
                navigation={navigation}
                title={"Outros:"}
                produtos={produtos[2]}
                color={"#36A5BF"}
              />
            </Suspense>
          </React.Fragment>

          {/* {loading && <ActivityIndicator size="large" color="#0000ff" />} */}
        </View>
      </ScrollView>
    </View>
  );
}
