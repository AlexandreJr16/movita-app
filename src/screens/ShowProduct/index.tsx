import { View } from "react-native";
import Texto from "../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import React from "react";
import ImagemBuffer from "../../components/Imagem";

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

const ShowProduct = ({ route }) => {
  const produto: Produto = route.params.produto;

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.container}>
        <ImagemBuffer imgBuffer={produto.imagem} style={styles.img} />
        <Texto weight="bold" style={{ color: "white" }}>
          Titulo: {produto.titulo}
        </Texto>
        <Texto weight="bold" style={{ color: "white" }}>
          Descrição: {produto.descricao}
        </Texto>
        <Texto weight="bold" style={{ color: "white" }}>
          Nota: {produto.nota}
        </Texto>
        <Texto weight="bold" style={{ color: "white" }}>
          Feito por: {produto.empresa.nomeFantasia}
        </Texto>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ShowProduct;
