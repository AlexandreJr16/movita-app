import { ScrollView, StatusBar, View } from "react-native";
import styles from "./styles";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import React, { useEffect } from "react";
import TitleTextPerfil from "../../../components/Perfil/TitleText";
import ShowProductsCarousel from "../../../components/CarrosselShowProducts";

const MeusFavoritos = ({ navigation }: { navigation: any }) => {
  useEffect(() => {}, []);

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
          <TitleTextPerfil>Detalhes da conta</TitleTextPerfil>
          <ShowProductsCarousel
            navigation={navigation}
            produtos={undefined}
            title={"Produtos favoritos"}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default MeusFavoritos;
