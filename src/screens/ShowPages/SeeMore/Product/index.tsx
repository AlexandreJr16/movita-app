import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import ImagemBuffer from "../../../../components/Default/Imagem";
import Texto from "../../../../components/Default/texto/Texto";

const ProdutoSeeMore = ({
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
  // console.log(produto.imagem);

  return produto ? (
    <TouchableOpacity
      onPress={navigateToProduct}
      style={{ ...styles.produtoContainer, opacity: fadeAnim }}
    >
      {produto.imagem && produto.imagem[0] ? (
        <ImagemBuffer
          imgBuffer={produto.imagem[0]}
          style={styles.imagemProduto}
        />
      ) : (
        <View style={styles.imagemProduto}>
          <Texto weight="bold" style={{ color: "#3f3f3f", fontSize: 25 }}>
            ?
          </Texto>
        </View>
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
  ) : null;
};

export default ProdutoSeeMore;
