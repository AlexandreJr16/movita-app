import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, ActivityIndicator, Dimensions } from "react-native";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ProjetoContext from "../../../contexts/project.context";
import { ProjetosResponseType } from "../../TabPages/ChatScreen/Messaging";
import ProdutoSeeMore from "./Product";
import CompaniesSeeMore from "./Companies";
import AuthContext from "../../../contexts/auth.context";

const SeeMoreCompanies = ({ navigation }: { navigation: any }) => {
  const { findEmpresasPagination } = useContext(AuthContext);
  const [data, setData] = useState<ProjetosResponseType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [endReached, setEndReached] = useState(false);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page: number) => {
    if (loading || endReached) return;
    setLoading(true);
    const limit = 11;
    try {
      const response = await findEmpresasPagination({ page, limit });
      if (response.data.length < limit) {
        setEndReached(true); // Sinaliza que não há mais dados para carregar
      }
      setData((prevData) => [...prevData, ...response.data]);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!endReached) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ padding: 10, width: "100%" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#2f2f2f" }}>
      <HeaderPerfil navigation={navigation} visibleLogo={false} />
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <CompaniesSeeMore
            navigation={navigation}
            produto={item}
            color={undefined}
          />
        )}
        style={{ display: "flex", paddingHorizontal: 10, width: "100%" }}
        scrollEnabled={true}
        numColumns={2}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default SeeMoreCompanies;
