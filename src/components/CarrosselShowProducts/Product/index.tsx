import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity } from "react-native";
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
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const navigateToProduct = () => {
    try {
      navigation.navigate("Product", { id: produto.id, color: color });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(produto);

  return produto ? (
    <Animated.View style={{ ...styles.produtoContainer, opacity: fadeAnim }}>
      <TouchableOpacity onPress={navigateToProduct}>
        {produto.imagem && produto.imagem[0] ? (
          <ImagemBuffer
            imgBuffer={produto.imagem[0]}
            style={styles.imagemProduto}
          />
        ) : (
          <DefaultMiniProjeto />
        )}
        <Texto weight="bold" style={styles.title}>
          {produto.titulo ? produto.titulo : produto.nome ?? "Sem nome"}
        </Texto>
        <Texto weight="regular" style={styles.status}>
          {produto.status ?? `Sem categoria`}
        </Texto>
        <Texto weight="regular" style={styles.description} numberOfLines={1}>
          {produto.descricao ??
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in
            nam, ut asperiores pariatur cumque aperiam et rerum alias deleniti
            inventore quisquam sunt quae magni suscipit, nulla laborum voluptates
            exercitationem!`}
        </Texto>
      </TouchableOpacity>
    </Animated.View>
  ) : null;
};

export default Produto;
