import { View } from "react-native";
import Texto from "../../texto/Texto";
import styles from "./styles";
import React from "react";

const HeaderShowItem = ({
  data,
}: {
  data: { title: string; madeBy: string };
}) => {
  return (
    <View style={styles.boxCardTop}>
      <Texto weight="bold" style={styles.titulo}>
        {data.title}
      </Texto>
      <View style={styles.boxTopRightCard}>
        <View style={styles.fabTitleBox}>
          <Texto weight="bold" style={styles.fabTitleBox}>
            {data.madeBy}
          </Texto>
        </View>
        <Texto weight="bold" style={styles.heartBox}>
          S2
        </Texto>
      </View>
    </View>
  );
};
export default HeaderShowItem;
