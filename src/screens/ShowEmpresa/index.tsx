import { FlatList, ScrollView, StatusBar, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import Texto from "../../components/Default/texto/Texto";
import LoadingIndicator from "../../components/Default/Loading";
import HeaderPerfil from "../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../components/Perfil/ShowPerfil";
import AuthContext from "../../contexts";
import ShowMainDataPerfil from "../../components/AnotherPerfil/ShowPerfil";
import ShowProductsCarousel from "../../components/CarrosselShowProducts";
import FeedBackShowProduct from "../../components/ShowItem/Feedback";

const ShowEmpresaPerfil = ({ route, navigation }) => {
  const id = route.params.id;
  const { getEmpresasById, loading } = useContext(AuthContext);
  const [user, setUser] = useState<any>(undefined);

  useEffect(() => {
    const getEmpresa = async () => {
      const user = await getEmpresasById(id);
      setUser(user);
    };
    getEmpresa();
  }, []);
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={"#1f1f1f"} barStyle="light-content" />
      <ScrollView>
        {user != undefined ? (
          <React.Fragment>
            <HeaderPerfil navigation={navigation} />
            <ShowMainDataPerfil user={user} />
            <View style={styles.container}>
              <ShowProductsCarousel
                produtos={user.projetos}
                navigation={navigation}
                title={"Projeto anteriores"}
              />
              <View style={styles.textContainer}>
                <Texto weight="regular" style={styles.title}>
                  Ola
                </Texto>
                <Texto weight="regular" style={styles.blueText}>
                  Ver mais
                </Texto>
              </View>
              <ScrollView style={{ flex: 1, width: "100%" }}>
                {user.feedback.map((item: any, i: number) => (
                  <FeedBackShowProduct key={i} feedback={item} />
                ))}
              </ScrollView>
            </View>
          </React.Fragment>
        ) : null}
        <LoadingIndicator visible={loading} />
      </ScrollView>
    </View>
  );
};
export default ShowEmpresaPerfil;
