import { Pressable, View, Image } from "react-native";
import EmpresasIcon from "../../../assents/MainScreen/EmpresasIcon";
import ModelosIcon from "../../../assents/MainScreen/ModelosIcon";
import styles from "./styles";
import Texto from "../../Default/texto/Texto";
import React from "react";
import {} from "phosphor-react-native";
import ProjetosIcon from "../../../assents/MainScreen/ProjetosIcon";

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
          <Image
            resizeMode="contain"
            source={require("../../../assents/MainScreen/projetos.png")}
            style={styles.img}
          />
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
          <Image
            resizeMode="contain"
            source={require("../../../assents/MainScreen/empresas.png")}
            style={styles.img}
          />
        </View>
        <Texto
          weight="bold"
          style={{ color: "#FFFFFF", alignSelf: "center", fontSize: 13 }}
        >
          Empresas
        </Texto>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate("ModelSearch");
        }}
        style={{ gap: 10 }}
      >
        <View style={{ ...styles.btn, backgroundColor: color }}>
          <Image
            resizeMode="contain"
            source={require("../../../assents/MainScreen/modelos.png")}
            style={styles.img}
          />
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
