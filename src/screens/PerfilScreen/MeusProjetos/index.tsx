import { ActivityIndicator, ScrollView, StatusBar, View } from "react-native";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import styles from "./styles";
import TitleTextPerfil from "../../../components/Perfil/TitleText";
import { lazy, useContext, useEffect, useState, Suspense } from "react";
import AuthContext from "../../../contexts";
import React from "react";
const ShowProductsCarousel = lazy(
  () => import("../../../components/CarrosselShowProducts")
);

const MeusProjetos = ({ navigation }: { navigation: any }) => {
  const { getAllProjetosByCliente, user, loading } = useContext(AuthContext);

  const [produtos, setProdutos] = useState([]);

  const fetchTopProjects = async () => {
    const topProjects = await getAllProjetosByCliente();
    if (topProjects[0]) {
      const esperandoProj = topProjects.filter(
        (proj) => proj.status == "Esperando confirmação"
      );
      const andamentoProj = topProjects.filter(
        (proj) => proj.status == "Andamento"
      );
      const concluidoProj = topProjects.filter(
        (proj) => proj.status == "Concluído"
      );

      setProdutos([esperandoProj, andamentoProj, concluidoProj]);
    } else setProdutos([{}, {}, {}]);
  };
  useEffect(() => {
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
          <Suspense fallback={<ActivityIndicator />}>
            <ShowProductsCarousel
              color={"#36A5BF"}
              title={"Projetos em Espera"}
              produtos={produtos[0]}
              navigation={navigation}
            />
            <ShowProductsCarousel
              color={"#36A5BF"}
              title={"Projetos em Andamento"}
              produtos={produtos[1]}
              navigation={navigation}
            />
            <ShowProductsCarousel
              color={"#36A5BF"}
              title={"Projetos Concluídos"}
              produtos={produtos[2]}
              navigation={navigation}
            />
          </Suspense>
        </View>
      </ScrollView>
    </View>
  );
};
export default MeusProjetos;
