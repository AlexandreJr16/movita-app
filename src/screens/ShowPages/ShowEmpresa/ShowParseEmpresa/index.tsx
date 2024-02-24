import { View, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../contexts";
import HeaderPerfil from "../../../../components/Perfil/HeaderPerfil";
import ImagemBuffer from "../../../../components/Default/Imagem";
import MovelDefault from "../../../../assents/defaults/Projeto";
import HeaderShowItem from "../../../../components/ShowItem/Header";
import ButtonPerfil from "../../../../components/Perfil/Button";

type Empresa = {
  img: any;
  nome: string;
  projetos: any[];
  endereco: { bairro: string; cep: string; cidade: string; estado: string };
  nota: any;
};

//Tela de pré-visualização da empresa, provavelmente vai ser deltada
const ShowParseEmpresa = ({ route, navigation }) => {
  const id = route.params.id;
  const color = route.params.color;
  const { getEmpresasById } = useContext(AuthContext);
  const [empresa, setEmpresa] = useState<Empresa>();

  //Função que busca os dados da empresa pelo ID
  const fetchData = async () => {
    try {
      const proj = await getEmpresasById(id);
      setEmpresa(proj);
    } catch (error) {
      console.error("Erro ao obter o projeto:", error);
    }
  };

  //Executa quando a tela é renderizada
  useEffect(() => {
    fetchData();
  }, []);

  //Função para adicionar like a empresa (Eu real esqueci de preencher isso e não lembro como faz isso)
  const addLike = () => {};

  //Função para deletar like
  const deleteLike = () => {};

  //Função para ir para a página que mostra as informações completas da empresa
  const handlePage = () => {
    navigation.navigate("PerfilEmpresa", { id: id, color: color });
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={"#2f2f2f"} barStyle="light-content" />
      {empresa && (
        <View style={styles.itensContent}>
          <HeaderPerfil
            color={color}
            navigation={navigation}
            visiblePerfil={true}
          />
          {empresa.img ? (
            <ImagemBuffer imgBuffer={empresa.img} style={styles.img} />
          ) : (
            <MovelDefault />
          )}

          <View style={styles.card}>
            <HeaderShowItem
              data={{
                id: id,
                liked: false,
                deleteLikeObj: deleteLike,
                likeObj: addLike,
                subtitle: `Em ${empresa.endereco.cidade} - ${empresa.endereco.estado}`,
                nota: empresa.nota ? empresa.nota : "0",
                title: empresa.nome,
              }}
            />
            <ButtonPerfil onPress={handlePage} text="Saiba mais sobre nós!" />
          </View>
        </View>
      )}
    </ScrollView>
  );
};
export default ShowParseEmpresa;
