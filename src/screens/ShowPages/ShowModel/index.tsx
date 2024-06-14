import { FlatList, ScrollView, StatusBar, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import Texto from "../../../components/Default/texto/Texto";
import LoadingIndicator from "../../../components/Default/Loading";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import AuthContext from "../../../contexts/auth.context";
import ShowMainDataPerfil from "../../../components/AnotherPerfil/ShowPerfil";
import ShowProductsCarousel from "../../../components/CarrosselShowProducts";
import FeedBackShowProduct from "../../../components/ShowItem/Feedback";

const ShowModel = ({ route, navigation }) => {
  const id = route.params.id;
  const { getEmpresasById, loading } = useContext(AuthContext);
  const [user, setUser] = useState<any>(undefined);

  //Faz o Get dos dados da empresa
  const getEmpresa = async () => {
    //O backend precisa retornar o modelo 3d e conseguir renderizar de alguma forma aqui
    const user = await getEmpresasById(id);

    setUser(user);
  };

  //Executa quando a página é renderizada
  useEffect(() => {
    getEmpresa();
  }, []);
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={"#1f1f1f"} barStyle="light-content" />
      <ScrollView>
        {user != undefined ? (
          <React.Fragment>
            <HeaderPerfil navigation={navigation} />
            <ShowMainDataPerfil imgNotArray={true} user={user} />
            <View style={styles.container}>
              <ShowProductsCarousel
                produtos={user.projetos}
                navigation={navigation}
                title={"Projeto anteriores"}
              />
              <View style={styles.textContainer}>
                <Texto weight="regular" style={styles.title}>
                  Comentários
                </Texto>
                <Texto weight="regular" style={styles.blueText}>
                  Ver mais
                </Texto>
              </View>
              {user.feedback[0] ? (
                <ScrollView style={{ flex: 1, width: "100%" }}>
                  {user.feedback.map((item: any, i: number) => (
                    <FeedBackShowProduct key={i} feedback={item} />
                  ))}
                </ScrollView>
              ) : (
                <Texto weight="bold" style={{ color: "#fff" }}>
                  Nenhum item
                </Texto>
              )}
            </View>
          </React.Fragment>
        ) : null}
        <LoadingIndicator visible={loading} />
      </ScrollView>
    </View>
  );
};
export default ShowModel;
