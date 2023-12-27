import { View, ScrollView, FlatList } from "react-native";
import Texto from "../texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import Produto from "./Product";
import styles from "./styles";
import React from "react";

const ShowProductsCarousel = ({
  produtos,
  navigation,
  color = "#fff",
}: {
  produtos: any;
  navigation: any;
  color?: any;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Texto weight="regular" style={styles.title}>
          Projetos recomendados:
        </Texto>
        <Texto weight="regular" style={styles.blueText}>
          Ver mais
        </Texto>
      </View>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Produto color={color} navigation={navigation} produto={item} />
        )}
      />
    </View>
  );
};
export default ShowProductsCarousel;
