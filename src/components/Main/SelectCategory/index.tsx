import { Pressable, View } from "react-native";
import EmpresasIcon from "../../../assents/MainScreen/EmpresasIcon";
import ModelosIcon from "../../../assents/MainScreen/ModelosIcon";
import ProjetosIcon from "../../../assents/MainScreen/ProjetosIcon";
import styles from "./styles";
import Texto from "../../texto/Texto";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SelectCategory = ({ navigation }: { navigation?: any }) => {
  const color = ["#36A5BF", "#A64029", "#BF9969"];
  return (
    <View style={styles.selectContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate("ProjetoSearch");
        }}
        style={{ gap: 10 }}
      >
        <View style={{ ...styles.btn, backgroundColor: color[0] }}>
          <ProjetosIcon style={styles.img} />
        </View>
        <Texto
          weight="bold"
          style={{ color: "#FFFFFF", alignSelf: "center", fontSize: 16 }}
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
        <View style={{ ...styles.btn, backgroundColor: color[1] }}>
          <EmpresasIcon style={styles.img} />
        </View>
        <Texto
          weight="bold"
          style={{ color: "#FFFFFF", alignSelf: "center", fontSize: 16 }}
        >
          Empresas
        </Texto>
      </Pressable>

      <Pressable onPress={() => {}} style={{ gap: 10 }}>
        <View style={{ ...styles.btn, backgroundColor: color[2] }}>
          <ModelosIcon style={styles.img} />
        </View>
        <Texto
          weight="bold"
          style={{ color: "#FFFFFF", alignSelf: "center", fontSize: 16 }}
        >
          Modelos
        </Texto>
      </Pressable>
    </View>
  );
};
export default SelectCategory;
