import { ScrollView, View } from "react-native";
import Texto from "../../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import styles from "./styles";
import TitleTextPerfil from "../../../components/Perfil/TitleText";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts";
import ShowProductsCarousel from "../../../components/CarrosselShowProducts";

const MeusProjetos = ({ navigation }: { navigation: any }) => {
  const { getAllProjetosByCliente, user } = useContext(AuthContext);

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchTopProjects = async () => {
      const topProjects = await getAllProjetosByCliente(user.id);
      setProdutos(topProjects);
    };

    fetchTopProjects();
  }, []);
  return (
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.bg}>
        <HeaderPerfil navigation={navigation} />
        <ShowPerfil />
        <View style={styles.container}>
          <TitleTextPerfil>Meus Projetos</TitleTextPerfil>
          <ShowProductsCarousel produtos={produtos} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MeusProjetos;
