import { ScrollView, StatusBar, View } from "react-native";
import Texto from "../../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import styles from "./styles";
import TitleTextPerfil from "../../../components/Perfil/TitleText";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts";
import ShowProductsCarousel from "../../../components/CarrosselShowProducts";
import React from "react";
import LoadingIndicator from "../../../components/Loading";

const MeusProjetos = ({ navigation }: { navigation: any }) => {
  const { getAllProjetosByCliente, user, loading } = useContext(AuthContext);

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchTopProjects = async () => {
      const topProjects = await getAllProjetosByCliente(user.id);
      setProdutos(topProjects);
    };

    fetchTopProjects();
  }, []);
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={"#1f1f1f"} barStyle="light-content" />
      <ScrollView style={styles.bg}>
        <HeaderPerfil navigation={navigation} />
        <ShowPerfil />
        <View style={styles.container}>
          <TitleTextPerfil>Meus Projetos</TitleTextPerfil>
          <ShowProductsCarousel
            color={"#36A5BF"}
            produtos={produtos}
            navigation={navigation}
          />
        </View>
        <LoadingIndicator visible={loading} />
      </ScrollView>
    </View>
  );
};
export default MeusProjetos;
