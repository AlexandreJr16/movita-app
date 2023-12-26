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

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.container}>
        <HeaderPerfil
          color="#36A5BF"
          navigation={navigation}
          visiblePerfil={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default ShowProduct;
