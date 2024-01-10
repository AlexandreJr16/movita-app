import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import ImagemBuffer from "../../Default/Imagem";
import Texto from "../../Default/texto/Texto";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Produto = ({ produto, navigation, color }) => {
  const navigateToProduct = () => {
    try {
      navigation.navigate("Product", { id: produto.id, color: color });
    } catch (error) {
      throw new Error(error);
    }
    // navigation.navigate("Product");
  };

  return (
    <TouchableOpacity
      onPress={navigateToProduct}
      style={styles.produtoContainer}
    >
      <ImagemBuffer
        imgBuffer={produto.imagem[0]}
        style={styles.imagemProduto}
      />
      <Texto weight="regular" style={styles.nomeProduto}>
        {produto.titulo}
      </Texto>
    </TouchableOpacity>
  );
};

export default Produto;
