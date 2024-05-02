import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import styles from "./styles";

import Arrow from "../../../../../assents/Perfil/Arrow";
import Logo from "../../../../../assents/Perfil/Logo";
import Texto from "../../../../../components/Default/texto/Texto";
import ProjetoContext from "../../../../../contexts/project.context";

type EmpresaType = {
  id: number;
  nomeFantasia: string;
  cnpj: string;
  nota: number;
  telefone: string;

  enderecoId: number;

  createdAt: string;
  updatedAt: string;
};
type ResponseProjeto = {
  id: number;
  titulo: string;
  descricao: string;
  status: string;
  nota: number;

  contratanteId: number;
  fabricanteId: number;

  imagem: Buffer[];
  Feedback: any[];
  Like: any[];

  empresa: EmpresaType;

  createdAt: string;
  updatedAt: string;
};

const FixedAllProjects = ({
  route,
  navigation,
}: {
  route: { params: { id: number } };
  navigation: any;
}) => {
  const { findProjectById } = useContext(ProjetoContext);
  const projectId = route.params;
  const [projeto, setProjeto] = useState<ResponseProjeto>();

  const getProject = async (id) => {
    const response: ResponseProjeto = await findProjectById({ id });
    setProjeto(response);
  };

  useEffect(() => {
    getProject(projectId.id);
  }, [projectId]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Arrow color="#fff" />
        </Pressable>
        <Texto weight="bold" style={styles.textTitle}>
          {projeto ? projeto.titulo : "Projeto sem título"}
        </Texto>
        <Logo color="#fff" />
      </View>
      <ScrollView style={styles.projetosContainer}></ScrollView>
    </View>
  );
};

export default FixedAllProjects;
