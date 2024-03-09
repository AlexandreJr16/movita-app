import { Pressable, ScrollView, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
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

const SearchScreen = ({ navigation }) => {
  const [textSearch, setTextSearch] = useState("");
  const [hSearch, setHSearch] = useState([]);
  const [typing, setTyping] = useState(true);
  const { findProjetoByName } = useContext(ProjetoContext);

  //Função de handle no Search
  const handleSearch = (value) => {
    setTextSearch(value);
  };

  //Função para a partir de uma string fornecida buscar item com aquilo
  const findItems = (text: string) => {};

  //Deletar item do histórico
  const handleDeleteItem = (index) => {
    const updatedData = hSearch.filter((_, i) => i !== index);
    setHSearch(updatedData);
    AsyncStorage.setItem("historySearch", JSON.stringify(updatedData));
  };

  //Função de submit do handle
  const handleSubmit = async () => {
    if (!hSearch.includes(textSearch)) {
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
  useEffect(() => {
    getItens();
  }, []);

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
        {typing
          ? hSearch.map((texto, i) => (
              <View key={i} style={styles.boxSearch}>
                <Pressable
                  style={styles.leftBoxSearch}
                  onPress={() => {
                    setTextSearch(texto);
                    findItems(texto);
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
          : null}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
