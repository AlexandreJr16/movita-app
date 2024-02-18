import { Pressable, View } from "react-native";
import EmpresasIcon from "../../../assents/MainScreen/EmpresasIcon";
import ModelosIcon from "../../../assents/MainScreen/ModelosIcon";
import ProjetosIcon from "../../../assents/MainScreen/ProjetosIcon";
import styles from "./styles";
import Texto from "../../Default/texto/Texto";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SelectCategory = ({ navigation }: { navigation?: any }) => {
  const color = "#1966C0";
  return (
    <View style={styles.selectContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate("ProjetoSearch");
        }}
        style={{ gap: 10 }}
      >
        <View style={{ ...styles.btn, backgroundColor: color }}>
          <ProjetosIcon style={styles.img} />
        </View>
        <Texto
          weight="bold"
          style={{ color: "#FFFFFF", alignSelf: "center", fontSize: 13 }}
        >
          Projetos
        </Texto>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate("EmpresaSearch");
        }}
        style={{ gap: 10 }}
      >
        <View style={{ ...styles.btn, backgroundColor: color }}>
          <EmpresasIcon style={styles.img} />
        </View>
        <Texto
          weight="bold"
          style={{ color: "#FFFFFF", alignSelf: "center", fontSize: 13 }}
        >
          Empresas
        </Texto>
      </Pressable>

      <Pressable onPress={() => {}} style={{ gap: 10 }}>
        <View style={{ ...styles.btn, backgroundColor: color }}>
          <ModelosIcon style={styles.img} />
        </View>
        <Texto
          weight="bold"
          style={{ color: "#FFFFFF", alignSelf: "center", fontSize: 13 }}
        >
          Modelos
        </Texto>
      </Pressable>
    </View>
  );
};
export default SelectCategory;
