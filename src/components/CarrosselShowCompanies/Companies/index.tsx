import React from "react";
import { TouchableOpacity, View } from "react-native";
import ImagemBuffer from "../../Default/Imagem";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import DefaultMiniProjeto from "../../../assents/defaults/MiniProjeto";

const Companies = ({
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
      throw new Error(error);
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
        <DefaultMiniProjeto />
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
        <Texto weight="bold" style={styles.nota}>
          {produto.nota ? ` ⭐ ${produto.nota}` : "⭐ 0"}
        </Texto>
      </View>

      <Texto weight="regular" style={styles.description} numberOfLines={1}>
        {/* {produto.descricao} */}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
        exercitationem dolorum voluptates minima deserunt ut omnis vitae
        nostrum, cumque sit fuga maiores velit explicabo aut corporis quos, a
        veniam iste!
      </Texto>
    </TouchableOpacity>
  );
};

export default Companies;
