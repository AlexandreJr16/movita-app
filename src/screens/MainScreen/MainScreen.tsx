import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, StatusBar, ActivityIndicator } from "react-native";
import AuthContext from "../../contexts";
import styles from "./styles";
import HeaderMain from "../../components/Main/Header";
import SelectCategory from "../../components/Main/SelectCategory";
import { SafeAreaView } from "react-native-safe-area-context";
import ShowProductsCarousel from "../../components/CarrosselShowProducts";
import LoadingIndicator from "../../components/Loading";

export default function MainScreen({ navigation }) {
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
    <View style={styles.background}>
      <ScrollView style={styles.background}>
        <StatusBar
          translucent={true}
          backgroundColor={"#1f1f1f"}
          barStyle="light-content"
        />
        <View style={styles.background}>
          <HeaderMain navigation={navigation} />
          <SelectCategory navigation={navigation} />
          {!loading && (
            <ShowProductsCarousel
              navigation={navigation}
              title={"Projetos bem avaliados:"}
              produtos={produtos[0]}
              tipo="projeto"
              color={"#36A5BF"}
            />
          )}
          {!loading && (
            <ShowProductsCarousel
              navigation={navigation}
              title={"Empresas bem avaliados:"}
              produtos={produtos[1]}
              tipo="empresa"
            />
          )}
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
      </ScrollView>
    </View>
  );
}
