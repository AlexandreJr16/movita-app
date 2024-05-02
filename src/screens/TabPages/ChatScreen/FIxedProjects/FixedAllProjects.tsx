import React, { useEffect } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { ProjetosResponseType } from "../Messaging";
import styles from "./styles";
import Texto from "../../../../components/Default/texto/Texto";
import Arrow from "../../../../assents/Perfil/Arrow";
import Logo from "../../../../assents/Perfil/Logo";
import { TouchableOpacity } from "react-native-gesture-handler";

const FixedAllProjects = ({
  route,
  navigation,
}: {
  route: { params: { projetos: ProjetosResponseType[] } };
  navigation: any;
}) => {
  const projects: { projetos: ProjetosResponseType[] } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Arrow color="#fff" />
        </Pressable>
        <Texto weight="bold" style={styles.textTitle}>
          Selecione o Projeto
        </Texto>
        <Logo color="#fff" />
      </View>
      <ScrollView style={styles.projetosContainer}>
        {projects.projetos &&
          projects.projetos.map((item, index) => (
            <ShowProjects index={index + 1} key={index} title={item.titulo} />
          ))}
      </ScrollView>
    </View>
  );
};

export default FixedAllProjects;
const ShowProjects = ({ title, index }: { title: string; index: number }) => {
  return (
    <TouchableOpacity style={styles.projectsItems}>
      <Texto weight="bold" style={styles.textItems}>
        {index}
      </Texto>
      <Texto weight="bold" style={styles.textItems}>
        {title}
      </Texto>
    </TouchableOpacity>
  );
};
