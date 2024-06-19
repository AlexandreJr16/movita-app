import React from "react";
import { TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { Star } from "phosphor-react-native";
import Companies from "../../../../components/CarrosselShowCompanies/Companies";
import ImagemBuffer from "../../../../components/Default/Imagem";
import Texto from "../../../../components/Default/texto/Texto";

const CompaniesSeeMore = ({
  produto,
  navigation,
  color = "#fff",
}: {
  produto: any;
  navigation: any;
  color?: any;
}) => {
  const navigateToProduct = () => {
    try {
      navigation.navigate("PerfilEmpresa", { id: produto.id, color: color });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity
      onPress={navigateToProduct}
      style={styles.produtoContainer}
    >
      {produto.imagem ? (
        <ImagemBuffer imgBuffer={produto.imagem} style={styles.imagemProduto} />
      ) : (
        <View style={styles.imagemProduto}>
          <Texto weight="bold" style={{ color: "#8f8f8f", fontSize: 25 }}>
            {produto.titulo[0].toUpperCase()}
          </Texto>
        </View>
      )}
      <View style={styles.viewSuperior}>
        <View style={styles.viewSuperiorDireita}>
          <Texto weight="bold" style={styles.title}>
            {produto.titulo}
          </Texto>
          <Texto weight="regular" style={styles.status}>
            {produto.Endereco ? produto.Endereco : null}
          </Texto>
        </View>
        <View
          style={{
            ...styles.nota,
            paddingHorizontal: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 5,
            paddingVertical: 1,
          }}
        >
          <Star size={20} color="#FFC501" weight="fill" />
          <Texto weight="bold" style={styles.nota}>
            {produto.nota ? produto.nota : " 0"}
          </Texto>
        </View>
      </View>

      <Texto weight="regular" style={styles.description} numberOfLines={1}>
        {produto.descricao ??
          ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
        exercitationem dolorum voluptates minima deserunt ut omnis vitae
        nostrum, cumque sit fuga maiores velit explicabo aut corporis quos, a
        veniam iste!`}
      </Texto>
    </TouchableOpacity>
  );
};

export default CompaniesSeeMore;
