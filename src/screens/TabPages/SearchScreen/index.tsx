import { ActivityIndicator, Pressable, ScrollView, View } from "react-native";
import React, { Suspense, useContext, useEffect, useState } from "react";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import styles from "./styles";
import TextoInput from "../../../components/Default/texto/TextoInput";
import LupaAzul from "../../../assents/MeusProjetos/LupaAzul";
import Texto from "../../../components/Default/texto/Texto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LupaCinza from "../../../assents/SearchScreen/lupaCinza";
import DeleteCinza from "../../../assents/SearchScreen/deleteCinza";
import AuthContext from "../../../contexts/auth.context";
import ProjetoContext from "../../../contexts/project.context";
import ShowCompaniesCarrossel from "../../../components/CarrosselShowCompanies";
import ShowProductsCarousel from "../../../components/CarrosselShowProducts";

const SearchScreen = ({ navigation }) => {
  const [textSearch, setTextSearch] = useState("");
  const [hSearch, setHSearch] = useState([]);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [arrProjetos, setArrProjetos] = useState([]);
  const { findProjetoByName } = useContext(ProjetoContext);
  const { findEmpresasByName, loading } = useContext(AuthContext);

  //Função de handle no Search
  const handleSearch = (value: any) => {
    setTextSearch(value);
    if (value == "") setVisibleSearch(false);
  };

  //Função para a partir de uma string fornecida buscar item com aquilo
  const findItems = async (text: string) => {
    if (text && text != "") {
      const projeto = await findEmpresasByName(text);
      const empresa = await findProjetoByName(text);
      const modelo = await findProjetoByName(text);

      const empresaImg = empresa.map((item) => {
        // console.log(item, "ONDASNOIDSBUDBA");
        return item.imagem[0]
          ? { ...item, imagem: item.imagem[0] }
          : { ...item, imagem: null };
      });
      console.log(empresaImg[0], "ONSO");
      setArrProjetos([projeto, empresaImg, modelo]);
      setVisibleSearch(true);
    }
  };

  //Deletar item do histórico
  const handleDeleteItem = (index) => {
    const updatedData = hSearch.filter((_, i) => i !== index);
    setHSearch(updatedData);
    AsyncStorage.setItem("historySearch", JSON.stringify(updatedData));
  };

  //Função de submit do handle
  const handleSubmit = async () => {
    if (!hSearch && textSearch != "") {
      setVisibleSearch(true);
      console.log(hSearch);
      const itens = [textSearch];
      setHSearch(itens);
      // Atualizar o localStorage sempre que hSearch for alterado
      AsyncStorage.setItem("historySearch", JSON.stringify(itens));
    } else if (!hSearch.includes(textSearch) && textSearch != "") {
      setVisibleSearch(true);

      const itens = [...hSearch, textSearch];
      setHSearch(itens);
      // Atualizar o localStorage sempre que hSearch for alterado
      AsyncStorage.setItem("historySearch", JSON.stringify(itens));
    }

    findItems(textSearch);
  };

  //Função que pega itens do historySearch (Assync Storage de pesquisas passadas)
  const getItens = async () => {
    const data = JSON.parse(await AsyncStorage.getItem("historySearch"));
    setHSearch(data);
  };
  // useEffect(() => {
  //   console.log(arrProjetos);
  // }, [arrProjetos]);

  return (
    <View style={styles.background}>
      <HeaderPerfil visiblePerfil={true} visibleLogo={false} />
      <View style={styles.textInput}>
        <TextoInput
          onChangeText={handleSearch}
          weight="regular"
          placeholder="Digite algo"
          placeholderColor={"#7A7979"}
          value={textSearch}
          style={styles.textInputTyping}
        ></TextoInput>
        <Pressable onPress={handleSubmit}>
          <LupaAzul />
        </Pressable>
      </View>

      <ScrollView>
        {!visibleSearch ? (
          hSearch.map((texto, i) => (
            <View key={i} style={styles.boxSearch}>
              <Pressable
                style={styles.leftBoxSearch}
                onPress={() => {
                  setTextSearch(texto);
                }}
              >
                <LupaCinza height={15} width={15} />
                <Texto style={styles.textBoxSearch} weight="bold">
                  {texto}
                </Texto>
              </Pressable>
              <Pressable
                onPress={() => {
                  handleDeleteItem(i);
                }}
              >
                <DeleteCinza height={25} width={25} />
              </Pressable>
            </View>
          ))
        ) : (
          <React.Fragment>
            <Suspense fallback={<ActivityIndicator />}>
              {/* <ShowProductsCarousel
                navigation={navigation}
                title={"Projetos bem avaliados:"}
                produtos={arrProjetos[0]}
                color={"#36A5BF"}
                loading={loading}
              /> 

              <ShowProductsCarousel
                loading={loading}
                navigation={navigation}
                title={"Outros:"}
                produtos={arrProjetos[2]}
                color={"#36A5BF"}
              /> */}
              <ShowCompaniesCarrossel
                navigation={navigation}
                title={"Empresas bem avaliados:"}
                companies={arrProjetos[1]}
                loading={loading}
              />
            </Suspense>
          </React.Fragment>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
