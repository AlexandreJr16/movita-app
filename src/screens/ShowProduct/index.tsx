import { View } from "react-native";
import Texto from "../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import React from "react";
import ImagemBuffer from "../../components/Imagem";
import HeaderPerfil from "../../components/Perfil/HeaderPerfil";

type Produto = {
  id: number;
  titulo: string;
  descricao: string;
  imagem: any;
  status: string;
  nota: number;
  cliente: {
    id: number;
    nome: string;
    sobrenome: string;
  };
  empresa: {
    id: number;
    nomeFantasia: string;
    telefone: string;
  };
};

const ShowProduct = ({ route, navigation }) => {
  const produto: Produto = route.params.produto;
  const color = route.params.color;

  return (
    <SafeAreaView style={{ backgroundColor: "#1f1f1f", flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.itensContent}>
          <HeaderPerfil
            color={color}
            navigation={navigation}
            visiblePerfil={true}
          />
          <ImagemBuffer imgBuffer={produto.imagem} style={styles.img} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ShowProduct;
