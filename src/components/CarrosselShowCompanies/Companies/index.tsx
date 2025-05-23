import React from "react";
import { TouchableOpacity, View } from "react-native";
import ImagemBuffer from "../../Default/Imagem";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import DefaultMiniProjeto from "../../../assents/defaults/MiniProjeto";
import { Star } from "phosphor-react-native";

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
      console.log(error);
    }
  };

  return (
    <TouchableOpacity
      onPress={navigateToProduct}
      style={styles.produtoContainer}
    >
      {produto.imagem ? (
        <ImagemBuffer
          imgBuffer={produto.imagem ?? produto.imagem[0] ?? null}
          style={styles.imagemProduto}
        />
      ) : (
        <DefaultMiniProjeto />
      )}
      <View style={styles.viewSuperior}>
        <View style={styles.viewSuperiorDireita}>
          <Texto weight="bold" style={styles.title}>
            {produto.titulo ?? produto.nomeFantasia ?? produto.nome ?? ""}
          </Texto>
          <Texto weight="regular" style={styles.status}>
            {produto.Endereco ? produto.Endereco : "Endereço não definido"}
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

export default Companies;
