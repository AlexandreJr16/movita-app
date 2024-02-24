import { View } from "react-native";
import React from "react";
import HeaderPerfil from "../../components/Perfil/HeaderPerfil";
import styles from "./styles";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <HeaderPerfil navigation={navigation} visiblePerfil={true} />
    </View>
  );
};

export default SearchScreen;
