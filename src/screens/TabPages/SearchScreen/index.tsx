import { Pressable, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import styles from "./styles";
import TextoInput from "../../../components/Default/texto/TextoInput";
import LupaAzul from "../../../assents/MeusProjetos/LupaAzul";
import debounce from "../../../utils/debounce";
import Texto from "../../../components/Default/texto/Texto";

const SearchScreen = ({ navigation }) => {
  const set = new Set();
  const [textSearch, setTextSearch] = useState("");
  const [hSearch, setHSearch] = useState([]);
  const handleSearch = (value) => {
    setTextSearch(value);
  };

  const debouncedHandleSearch = debounce(handleSearch, 500, null);
  const handleSubmit = () => {
    console.log("I did a submit with ", textSearch);

    setHSearch((prevHSearch) => {
      const updatedHSearch = [...prevHSearch, textSearch];
      return updatedHSearch;
    });
  };

  useEffect(() => {
    try {
      setHSearch(JSON.parse(localStorage.getItem("historySearch")));
    } catch (error) {
      console.log(error);
    }
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

      {hSearch.map((texto) => (
        <Texto style={{ alignSelf: "center" }} weight="bold">
          {texto}
        </Texto>
      ))}
    </View>
  );
};

export default SearchScreen;
