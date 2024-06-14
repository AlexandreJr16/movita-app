import React from "react";
import styles from "../styles";
import { View } from "react-native";

const SkeletonProduto = () => {
  return (
    <View style={{ ...styles.produtoContainer, gap: 10 }}>
      <View style={{ ...styles.imagemProduto, backgroundColor: "#2F2F2F" }} />
      <View style={{ ...styles.status, width: 150, height: 20 }}></View>
    </View>
  );
};

export default SkeletonProduto;
