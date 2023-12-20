import React, { useContext } from "react";
import { View, ScrollView } from "react-native";
import AuthContext from "../../contexts/auth";
import styles from "./styles";
import HeaderMain from "../../components/Main/Header";
import SelectCategory from "../../components/Main/SelectCategory";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainScreen() {
  const {} = useContext(AuthContext);
  return (
      <ScrollView style={styles.background}>
        <HeaderMain />
        <SelectCategory />
      </ScrollView>
  );
}
