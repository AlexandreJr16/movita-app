import { Pressable, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import styles from "./styles";
import TextoInput from "../../../components/Default/texto/TextoInput";
import LupaAzul from "../../../assents/MeusProjetos/LupaAzul";
import debounce from "../../../utils/debounce";
import Texto from "../../../components/Default/texto/Texto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LupaCinza from "../../../assents/SearchScreen/lupaCinza";
import DeleteCinza from "../../../assents/SearchScreen/deleteCinza";

const SearchScreen = ({ navigation }) => {
  const set = new Set();
  const [textSearch, setTextSearch] = useState("");
  const [hSearch, setHSearch] = useState([]);

  //Função de handle no Search
  const handleSearch = (value) => {
    setTextSearch(value);
  };

  //Função para o debounce do handle
  const debouncedHandleSearch = debounce(handleSearch, 500, null);

  //Função para a partir de uma string fornecida buscar item com aquilo
  const findItems = () => {};

  //Função de submit do handle
  const handleSubmit = async () => {
    if (!hSearch.includes(textSearch)) {
      setHSearch((prevHSearch) => [...prevHSearch, textSearch]);
      // Atualizar o localStorage sempre que hSearch for alterado

      AsyncStorage.setItem("historySearch", JSON.stringify(hSearch));
    }
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
          onChangeText={debouncedHandleSearch}
          weight="regular"
          placeholder="Digite algo"
          placeholderColor={"#7A7979"}
          style={styles.textInputTyping}
        ></TextoInput>
        <Pressable onPress={handleSubmit}>
          <LupaAzul />
        </Pressable>
      </View>

      <ScrollView>
        {hSearch.map((texto, i) => (
          <View key={i} style={styles.boxSearch}>
            <View style={styles.leftBoxSearch}>
              <LupaCinza height={15} width={15} />
              <Texto style={styles.textBoxSearch} weight="bold">
                {texto}
              </Texto>
            </View>
            <DeleteCinza height={25} width={25} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
