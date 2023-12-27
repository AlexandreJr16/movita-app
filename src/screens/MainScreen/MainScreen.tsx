import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import AuthContext from "../../contexts";
import styles from "./styles";
import HeaderMain from "../../components/Main/Header";
import SelectCategory from "../../components/Main/SelectCategory";
import { SafeAreaView } from "react-native-safe-area-context";
import ShowProductsCarousel from "../../components/CarrosselShowProducts";
import LoadingIndicator from "../../components/Loading";

export default function MainScreen({ navigation }) {
  const { getTopProjects, loading } = useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchTopProjects = async () => {
      const topProjects = await getTopProjects(10);
      setProdutos(topProjects);
    };

    fetchTopProjects();
  }, []);
  return (
    <SafeAreaView>
      <StatusBar
        translucent={true}
        backgroundColor={"#1f1f1f"}
        barStyle="light-content"
      />
      <ScrollView style={styles.background}>
        <HeaderMain navigation={navigation} />
        <SelectCategory />
        <ShowProductsCarousel navigation={navigation} produtos={produtos} />
        <LoadingIndicator visible={loading} />
      </ScrollView>
    </SafeAreaView>
  );
}
