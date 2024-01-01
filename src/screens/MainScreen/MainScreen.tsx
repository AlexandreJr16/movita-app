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
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // Added currentPage state
  const maxPages = 1; // Set your desired maximum number of pages

  const handleLoadMore = async () => {
    const limit = 1; // Change this value based on your requirements
    try {
      if (currentPage <= maxPages) {
        const newProjects = await getRandomProjects(limit);
        // Map and format the new projects to match your existing data structure
        const formattedProjects = newProjects.map((projects) => {
          return projects.produtos.map((item) => ({
            ...item,
            imagem: item.imagem[0],
          }));
        });
        setProdutos([...produtos, ...formattedProjects]);
        setCount(count + limit);
        setCurrentPage(currentPage + 1);
      }
    } catch (error) {
      console.error("Erro ao obter os projetos:", error);
    }
  };

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20; // Adjust this value based on your layout
    if (
      layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom &&
      currentPage <= maxPages
    ) {
      handleLoadMore();
    }
  };

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
        setProdutos([topProjects, ...arr]); // Define o estado
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView onScroll={handleScroll} style={styles.background}>
        <StatusBar
          translucent={true}
          backgroundColor={"#1f1f1f"}
          barStyle="light-content"
        />
        <View style={styles.background}>
          <HeaderMain navigation={navigation} />
          <SelectCategory />

          {produtos.map((item, index) => (
            <ShowProductsCarousel
              key={index.toString()}
              navigation={navigation}
              produtos={item}
            />
          ))}
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
