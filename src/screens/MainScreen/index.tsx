import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, StatusBar, ActivityIndicator } from "react-native";
import AuthContext from "../../contexts";
import styles from "./styles";
import HeaderMain from "../../components/Main/Header";
import SelectCategory from "../../components/Main/SelectCategory";
import { SafeAreaView } from "react-native-safe-area-context";
import ShowProductsCarousel from "../../components/CarrosselShowProducts";
import LoadingIndicator from "../../components/Default/Loading";

export default function MainScreen({ navigation }) {
  const { getTopProjects, loading, getTopEmpresas, getRandomProjects } =
    useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topProjects = await getTopProjects(4);
        const topEmpresas = await getTopEmpresas(4);
        const aleatorioProdutos = await getRandomProjects(4);

        await setProdutos([topProjects, topEmpresas, aleatorioProdutos[0]]);
        console.log(produtos[2].produtos);
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.background}>
      <ScrollView style={styles.background}>
        <StatusBar backgroundColor={"#1f1f1f"} barStyle="light-content" />
        <View style={styles.background}>
          <HeaderMain navigation={navigation} />
          <SelectCategory navigation={navigation} />
          {!loading && (
            <React.Fragment>
              <ShowProductsCarousel
                navigation={navigation}
                title={"Projetos bem avaliados:"}
                produtos={produtos[0]}
                tipo="projeto"
                color={"#36A5BF"}
              />
              <ShowProductsCarousel
                navigation={navigation}
                title={"Empresas bem avaliados:"}
                produtos={produtos[1]}
                tipo="empresa"
              />
              <ShowProductsCarousel
                navigation={navigation}
                title={"Outros:"}
                produtos={produtos[2].produtos}
                tipo="projeto"
                color={"#36A5BF"}
              />
            </React.Fragment>
          )}
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
      </ScrollView>
    </View>
  );
}
