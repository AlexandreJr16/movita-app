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
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.background}>
        <HeaderMain />
        <SelectCategory />
      </ScrollView>
    </SafeAreaView>
  );
}
