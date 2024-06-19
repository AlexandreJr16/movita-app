import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import Texto from "../../../components/Default/texto/Texto";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ProjetoContext from "../../../contexts/project.context";
import { ProjetosResponseType } from "../../TabPages/ChatScreen/Messaging";

const SeeMoreProducts = ({ navigation }: any) => {
  const { findProjectPagination } = useContext(ProjetoContext);
  const [data, setData] = useState<ProjetosResponseType[]>(
    [] as ProjetosResponseType[]
  );
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page: number) => {
    if (loading) return;
    setLoading(true);
    const limit = 11;
    try {
      const response: { data: ProjetosResponseType[] } =
        await findProjectPagination({ page, limit });
      setData((prevData) => [...prevData, ...response.data]);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#2f2f2f" }}>
      <HeaderPerfil
        navigation={navigation}
        visibleLogo={true}
        visiblePerfil={true}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ padding: 20 }}>
            <Texto weight="bold">{item?.titulo ?? "Sem nome"}</Texto>
          </View>
        )}
        keyExtractor={(item) => `${item.id}`}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default SeeMoreProducts;
