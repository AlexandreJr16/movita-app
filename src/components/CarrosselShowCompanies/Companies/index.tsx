import React, { useEffect } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import ImagemBuffer from "../../Default/Imagem";
import Texto from "../../Default/texto/Texto";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import MovelDefault from "../../../assents/defaults/Projeto";
import DefaultMiniProjeto from "../../../assents/defaults/MiniProjeto";

const Companies = ({
  produto,
  navigation,
  color,
  tipo = "empresa",
}: {
  produto: any;
  navigation: any;
  color: any;
  tipo?: "empresa";
}) => {
  const navigateToProduct = () => {
    try {
      navigation.navigate("PerfilEmpresa", { id: produto.id, color: color });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <TouchableOpacity
      onPress={navigateToProduct}
      style={styles.produtoContainer}
    >
      {produto.imagem ? (
        <ImagemBuffer imgBuffer={produto.imagem} style={styles.imagemProduto} />
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

export default Companies;
