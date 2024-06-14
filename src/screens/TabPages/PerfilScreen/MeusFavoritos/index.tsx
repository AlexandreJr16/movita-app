import { ActivityIndicator, ScrollView, StatusBar, View } from "react-native";
import styles from "./styles";
import React, { useEffect, useState, useContext, Suspense, lazy } from "react";
import HeaderPerfil from "../../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../../components/Perfil/ShowPerfil";
import TitleTextPerfil from "../../../../components/Perfil/TitleText";
import AuthContext from "../../../../contexts/auth.context";
import ProjetoContext from "../../../../contexts/project.context";
import ShowProductsCarousel from "../../../../components/CarrosselShowProducts";

const MeusFavoritos = ({ navigation }: { navigation: any }) => {
  const { getFavProjects } = useContext(ProjetoContext);
  const [projetos, setProjetos] = useState<any>();

  //get da api dos projetos favoritos
  const getFav = async () => {
    const likes = await getFavProjects();
    const proj = likes
      ? likes.map((obj: { projeto: any }) => obj.projeto)
      : null;
    setProjetos(proj);
  };
  useEffect(() => {
    getFav();
  }, []);

  return (
    <View style={styles.background}>
      <StatusBar
        translucent={true}
        backgroundColor={"#1f1f1f"}
        barStyle="light-content"
      />
      <ScrollView>
        <HeaderPerfil navigation={navigation} />
        <ShowPerfil />
        <View style={styles.container}>
          <TitleTextPerfil>Meus Favoritos</TitleTextPerfil>
          <Suspense fallback={<ActivityIndicator />}>
            <ShowProductsCarousel
              navigation={navigation}
              produtos={projetos}
              title={"Produtos favoritos"}
            />
          </Suspense>
        </View>
      </ScrollView>
    </View>
  );
};
export default MeusFavoritos;
