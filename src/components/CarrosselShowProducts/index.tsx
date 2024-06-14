import React from "react";
import { View, ScrollView } from "react-native";
import Texto from "../Default/texto/Texto";
import Produto from "./Product";
import SkeletonProduto from "./Product/Skeleton/SkeletonProduto";
import styles from "./styles";

const ShowProductsCarousel = ({
  produtos = [],
  navigation,
  color = "#fff",
  title = "Outros",
  loading = false,
}: any) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ScrollView
          style={{ width: "100%" }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <SkeletonProduto key={index} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.textContainer}>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Texto weight="regular" style={styles.title}>
              {title}
            </Texto>
            <Texto weight="regular" style={styles.yellowText}>
              Ver mais
            </Texto>
          </View>
          {produtos.length > 0 ? (
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{
                width: "100%",
              }}
            >
              {produtos.map((item: { id: any }, i: any) => (
                <Produto
                  key={`${item.id}-${i}`}
                  color={color}
                  navigation={navigation}
                  produto={item}
                  tipo="projeto"
                />
              ))}
            </ScrollView>
          ) : (
            <View
              style={{
                flex: 1,
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
        </View>
      )}
    </View>
  );
};

export default ShowProductsCarousel;
