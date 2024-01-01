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
  const { getTopProjects, loading, getRandomProjects } =
    useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topProjects = await getTopProjects(10);
        const randomProjects = await getRandomProjects(2);
        // Combina os projetos dos carrosséis em um único array
        const arr = randomProjects.map((projects) => {
          return projects.produtos.map((item) => ({
            ...item,
            imagem: item.imagem[0],
          }));
        });
        setProdutos([topProjects, ...arr]); // Define o estad
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <SafeAreaView>
      <StatusBar
        translucent={true}
        backgroundColor={"#1f1f1f"}
        barStyle="light-content"
      />
      <ScrollView style={styles.background}>
        <View>
          <HeaderMain navigation={navigation} />
          <SelectCategory />

          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            produtos.map((item, index) => (
              <ShowProductsCarousel
                key={index}
                navigation={navigation}
                produtos={item}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
