import { View, FlatList, Pressable } from "react-native";
import Texto from "../Default/texto/Texto";
import Companies from "./Companies";
import styles from "./styles";
import React, { Suspense } from "react";
import { ScrollView } from "react-native";
import SkeletonProduto from "../CarrosselShowProducts/Product/Skeleton/SkeletonProduto";

const ShowCompaniesCarrossel = ({
  companies,
  navigation,
  color = "#fff",
  title = "Outros",
  loading = false,
  seeMore,
}: {
  companies: any[];
  navigation: any;
  color?: any;
  title?: any;
  loading?: boolean;
  seeMore?: boolean;
}) => {
  return (
    <React.Fragment>
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
        <View style={styles.container}>
          {companies == undefined ? null : (
            <Suspense>
              <View style={styles.textContainer}>
                <Texto weight="regular" style={styles.title}>
                  {title}
                </Texto>
                {seeMore == true ? (
                  <Pressable
                    onPress={() => {
                      navigation.navigate("SeeMoreEmpresa");
                    }}
                  >
                    <Texto weight="regular" style={styles.yellowText}>
                      Ver mais
                    </Texto>
                  </Pressable>
                ) : null}
              </View>
              {companies[0] != null ? (
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  style={{
                    width: "100%",
                  }}
                >
                  {companies.map((item, index) => (
                    <Companies
                      navigation={navigation}
                      produto={item}
                      key={index}
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
            </Suspense>
          )}
        </View>
      )}
    </React.Fragment>
  );
};
export default ShowCompaniesCarrossel;
