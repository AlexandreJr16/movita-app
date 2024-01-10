import { ScrollView, StatusBar, View } from "react-native";
import styles from "./styles";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import React, { useEffect, useState, useContext } from "react";
import TitleTextPerfil from "../../../components/Perfil/TitleText";
import ShowProductsCarousel from "../../../components/CarrosselShowProducts";
import AuthContext from "../../../contexts";

const MeusFavoritos = ({ navigation }: { navigation: any }) => {
  const { getFavProjects } = useContext(AuthContext);
  const [projetos, setProjetos] = useState();
  const getFav = async () => {
    const projetos = await getFavProjects();
    setProjetos(projetos);
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
          <ShowProductsCarousel
            navigation={navigation}
            produtos={projetos}
            title={"Produtos favoritos"}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default MeusFavoritos;
