import { View, FlatList, ScrollView } from "react-native";
import Texto from "../Default/texto/Texto";
import Produto from "./Product";
import styles from "./styles";
import React, { useState } from "react";

const ShowProductsCarousel = ({
  produtos,
  navigation,
  color = "#fff",
  title = "Outros",
  tipo = "projeto",
}: {
  produtos: any[] | null;
  navigation: any;
  color?: any;
  title?: any;
  tipo?: "projeto";
}) => {
  if (produtos == null) produtos = [];
  return (
    <View style={styles.container}>
      {produtos.length == 0 ? null : (
        <React.Fragment>
          <View style={styles.textContainer}>
            <Texto weight="regular" style={styles.title}>
              {title}
            </Texto>
            <Texto weight="regular" style={styles.yellowText}>
              Ver mais
            </Texto>
          </View>
          {produtos ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ width: "100%" }}
            >
              {produtos.map((item, i) => (
                <Produto
                  key={`${item.id}-${i}`}
                  color={color}
                  navigation={navigation}
                  produto={item}
                  tipo={tipo}
                />
              ))}
            </ScrollView>
          ) : (
            <View
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 25,
              }}
            >
              <Texto weight="bold" style={{ color: "#fff" }}>
                Nenhum item
              </Texto>
            </View>
          )}
        </React.Fragment>
      )}
    </View>
  );
};
export default ShowProductsCarousel;
