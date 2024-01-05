import { View } from "react-native";
import Texto from "../../texto/Texto";
import styles from "./styles";
import React from "react";

const FeedBackShowProduct = ({
  feedback,
}: {
  feedback: {
    descricao: string;
    empresaId: number;
    id: number;
    nota: number;
    projetoId: number;
    userId: number;
  };
}) => {
  return (
    <View>
      <View>
        <Texto weight="bold">{feedback.nota}</Texto>
      </View>
    </View>
  );
};
export default FeedBackShowProduct;
