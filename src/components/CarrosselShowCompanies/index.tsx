import { View, FlatList } from "react-native";
import Texto from "../Default/texto/Texto";
import Produto from "./Companies";
import styles from "./styles";
import React from "react";

const ShowCompaniesCarrossel = ({
  companies,
  navigation,
  color = "#fff",
  title = "Outros",
  tipo = "empresa",
}: {
  companies: any;
  navigation: any;
  color?: any;
  title?: any;
  tipo?: "empresa";
}) => {
  return (
    <View style={styles.container}>
      {companies == undefined ? null : (
        <React.Fragment>
          <View style={styles.textContainer}>
            <Texto weight="regular" style={styles.title}>
              {title}
            </Texto>
            <Texto weight="regular" style={styles.yellowText}>
              Ver mais
            </Texto>
          </View>
          {companies[0] != null ? (
            <FlatList
              style={{ width: "100%" }}
              data={companies}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Produto
                  color={color}
                  navigation={navigation}
                  produto={item}
                  tipo={tipo}
                />
              )}
            />
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
export default ShowCompaniesCarrossel;
