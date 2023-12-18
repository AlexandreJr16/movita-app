import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../../contexts/auth";
import styles from "./styles";
import HeaderMain from "../../components/Main/Header";
import SelectCategory from "../../components/Main/SelectCategory";
import SearchSelected from "../../assents/NavBar/Selected/SelectedPerfil";

export default function MainScreen() {
  const {} = useContext(AuthContext);
  return (
    <View style={styles.background}>
      <HeaderMain />
      <SelectCategory />

      <SearchSelected></SearchSelected>
    </View>
  );
}
