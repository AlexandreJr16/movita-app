import { View } from "react-native";
import Texto from "../../texto/Texto";
import styles from "./styles";
import React from "react";
import StarFeedBack from "../../../assents/ShowItem/Start";

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
    <View style={styles.feedbackContainer}>
      <View style={styles.topFeedback}>
        <View style={styles.notaContainer}>
          <StarFeedBack />
          <Texto weight="bold" style={styles.notaFont}>
            {feedback.nota}
          </Texto>
        </View>
        <Texto weight="bold" style={styles.title}>
          Avaliação do cliente
        </Texto>
      </View>
      <Texto weight="regular" style={styles.description}>
        {feedback.descricao}
      </Texto>
    </View>
  );
};
export default FeedBackShowProduct;
