import { View } from "react-native";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import React from "react";
import StarFeedBack from "../../../assents/ShowItem/Start";
import { Star } from "phosphor-react-native";

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
          <Star color="#fff" size={25} weight="fill" />
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
