import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./styles";
import ImagemBuffer from "../../Imagem";
import Texto from "../../texto/Texto";

const Produto = ({ produto }) => {
  return (
    <View style={styles.produtoContainer}>
      <ImagemBuffer imgBuffer={produto.imagem} style={styles.imagemProduto} />
      <Texto weight="regular" style={styles.nomeProduto}>
        {produto.nome}
      </Texto>
    </View>
  );
};
export default Produto;
