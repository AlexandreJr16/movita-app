import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import ImagemBuffer from "../../Imagem";
import Texto from "../../texto/Texto";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Produto = ({ produto, navigation, color }) => {
  const navigateToProduct = () => {
    navigation.navigate("Product", { produto: produto, color: color });
    // navigation.navigate("Product");
  };

  return (
    <TouchableOpacity
      onPress={navigateToProduct}
      style={styles.produtoContainer}
    >
      <ImagemBuffer imgBuffer={produto.imagem} style={styles.imagemProduto} />
      <Texto weight="regular" style={styles.nomeProduto}>
        {produto.titulo}
      </Texto>
    </TouchableOpacity>
  );
};

export default Produto;
