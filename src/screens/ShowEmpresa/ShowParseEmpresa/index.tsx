import { View, StatusBar, Pressable, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ImagemBuffer from "../../../components/Default/Imagem";
import ImagePickerModal from "../../../components/ImageModal";
import MovelDefault from "../../../assents/defaults/Projeto";
import LoadingIndicator from "../../../components/Default/Loading";
import ButtonPerfil from "../../../components/Perfil/Button";
import HeaderShowItem from "../../../components/ShowItem/Header";
import Texto from "../../../components/Default/texto/Texto";

type Empresa = {
  img: any;
  nome: string;
  projetos: any[];
  endereco: { bairro: string; cep: string; cidade: string; estado: string };
  nota: any;
};

const ShowParseEmpresa = ({ route, navigation }) => {
  const id = route.params.id;
  const color = route.params.color;
  const { getEmpresasById } = useContext(AuthContext);
  const [empresa, setEmpresa] = useState<Empresa>();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proj = await getEmpresasById(id);
        setEmpresa(proj);
      } catch (error) {
        console.error("Erro ao obter o projeto:", error);
      }
    };

    fetchData();
  }, []);

  const addLike = () => {};
  const deleteLike = () => {};
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
