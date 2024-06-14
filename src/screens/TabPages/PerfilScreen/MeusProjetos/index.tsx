import { ActivityIndicator, ScrollView, StatusBar, View } from "react-native";
import styles from "./styles";
import { lazy, useContext, useEffect, useState, Suspense } from "react";
import React from "react";
import HeaderPerfil from "../../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../../components/Perfil/ShowPerfil";
import TitleTextPerfil from "../../../../components/Perfil/TitleText";
import AuthContext from "../../../../contexts/auth.context";
import ProjetoContext from "../../../../contexts/project.context";
import ShowProductsCarousel from "../../../../components/CarrosselShowProducts";

const MeusProjetos = ({ navigation }: { navigation: any }) => {
  const { getAllProjetosByCliente } = useContext(ProjetoContext);

  const [produtos, setProdutos] = useState<any>([]);

  //get da api dos projetos do usuarios e filtra em 3 tipos: esperando confirmação, andamento e concluído
  //Passível de alterações futuras de acordo com a quantidade de estados que um projeto pode estar
  const fetchTopProjects = async () => {
    const topProjects = await getAllProjetosByCliente();
    if (topProjects[0]) {
      const esperandoProj = topProjects.filter(
        (proj: { status: string }) => proj.status == "Esperando confirmação"
      );
      const andamentoProj = topProjects.filter(
        (proj: { status: string }) => proj.status == "Andamento"
      );
      const concluidoProj = topProjects.filter(
        (proj: { status: string }) => proj.status == "Concluído"
      );

      setProdutos([esperandoProj, andamentoProj, concluidoProj]);
    } else setProdutos([{}, {}, {}]);
  };
  //Ao renderizar a página roda a função fetchTopProjects
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
