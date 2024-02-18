import React, { useEffect } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import ImagemBuffer from "../../Default/Imagem";
import Texto from "../../Default/texto/Texto";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import MovelDefault from "../../../assents/defaults/Projeto";
import DefaultMiniProjeto from "../../../assents/defaults/MiniProjeto";

const Produto = ({
  produto,
  navigation,
  color,
  tipo = "projeto",
}: {
  produto: any;
  navigation: any;
  color: any;
  tipo?: "projeto";
}) => {
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
      {produto.imagem[0] ? (
        <ImagemBuffer
          imgBuffer={produto.imagem[0]}
          style={styles.imagemProduto}
        />
      ) : (
        <DefaultMiniProjeto />
      )}
      <Texto weight="bold" style={styles.title}>
        {produto.titulo}
      </Texto>
      <Texto weight="regular" style={styles.status}>
        {/* {produto.status} */}Cozinha
      </Texto>
      <Texto weight="regular" style={styles.description} numberOfLines={1}>
        {/* {produto.descricao} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in
        nam, ut asperiores pariatur cumque aperiam et rerum alias deleniti
        inventore quisquam sunt quae magni suscipit, nulla laborum voluptates
        exercitationem!
      </Texto>
    </TouchableOpacity>
  );
};

export default Produto;
