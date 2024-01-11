import React, { useEffect } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import ImagemBuffer from "../../Default/Imagem";
import Texto from "../../Default/texto/Texto";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Produto = ({
  produto,
  navigation,
  color,
  tipo = "projeto",
}: {
  produto: any;
  navigation: any;
  color: any;
  tipo?: "projeto" | "empresa";
}) => {
  const navigateToProduct = () => {
    try {
      tipo == "projeto"
        ? navigation.navigate("Product", { id: produto.id, color: color })
        : navigation.navigate("Perfil", { id: produto.id, color: color });
    } catch (error) {
      throw new Error(error);
    }
    // navigation.navigate("Product");
  };

  useEffect(() => {
    if (produto.imagem[0] == undefined) console.log(produto);
  }, []);
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
