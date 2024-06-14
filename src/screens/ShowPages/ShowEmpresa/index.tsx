import { FlatList, ScrollView, StatusBar, View } from "react-native";
import React, { Suspense, useContext, useEffect, useState } from "react";
import styles from "./styles";
import AuthContext from "../../../contexts/auth.context";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowMainDataPerfil from "../../../components/AnotherPerfil/ShowPerfil";
import ShowProductsCarousel from "../../../components/CarrosselShowProducts";
import Texto from "../../../components/Default/texto/Texto";
import FeedBackShowProduct from "../../../components/ShowItem/Feedback";
import LoadingIndicator from "../../../components/Default/Loading";

const ShowEmpresaPerfil = ({ route, navigation }) => {
  const id = route.params.id;
  const { getEmpresasById, loading } = useContext(AuthContext);
  const [user, setUser] = useState<any>(undefined);

  //Faz o get dos dados da empresa pelo Id
  const getEmpresa = async () => {
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
                <Suspense fallback={null}>
                  <ScrollView style={{ flex: 1, width: "100%" }}>
                    {user.feedback.map((item: any, i: number) => (
                      <FeedBackShowProduct key={i} feedback={item} />
                    ))}
                  </ScrollView>
                </Suspense>
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
export default ShowEmpresaPerfil;
