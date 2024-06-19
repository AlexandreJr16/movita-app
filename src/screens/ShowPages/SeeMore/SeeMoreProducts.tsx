import React from "react";
import { View, ScrollView } from "react-native";
import Texto from "../../../components/Default/texto/Texto";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";

const SeeMoreProducts = ({ navigation }: any) => {
  return (
    <ScrollView>
      <HeaderPerfil
        navigation={navigation}
        visibleLogo={true}
        visiblePerfil={true}
      />
      <View>
        <Texto weight="bold">Produtos</Texto>
      </View>
    </ScrollView>
  );
};
export default SeeMoreProducts;
