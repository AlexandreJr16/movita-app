import { View, ScrollView, FlatList } from "react-native";
import Texto from "../texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import Produto from "./Product";
import styles from "./styles";
import React, { useContext, useEffect } from "react";
import AuthContext from "../../contexts";

const ShowProductsCarousel = ({
  produtos,
  navigation,
  color = "#fff",
  title = "Outros",
  tipo = "projeto",
}: {
  produtos: any;
  navigation: any;
  color?: any;
  title?: any;
  tipo?: "projeto" | "empresa";
}) => {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Texto weight="regular" style={styles.title}>
          {title}
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
          //Futuramente mudar para enviar para outro tipo de tela
        )}
      />
    </View>
  );
};
export default ShowProductsCarousel;
