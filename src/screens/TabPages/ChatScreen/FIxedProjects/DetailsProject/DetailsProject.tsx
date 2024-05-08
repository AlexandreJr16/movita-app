import React, { useContext, useEffect, useState } from "react";
import { Linking, Pressable, ScrollView, View } from "react-native";
import styles from "./styles";

import Arrow from "../../../../../assents/Perfil/Arrow";
import Logo from "../../../../../assents/Perfil/Logo";
import Texto from "../../../../../components/Default/texto/Texto";
import ProjetoContext from "../../../../../contexts/project.context";
import { TouchableOpacity } from "react-native-gesture-handler";
import SetaBottom from "../../../../../assents/Chat/setaBottom";
import SetaUp from "../../../../../assents/Chat/setaUp";
import AnaliseAcompanhamento from "../../../../../assents/Projeto/AnaliseAcompanhamento";

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

  const handleLink = () => {
    const url = "https://movita-ar.vercel.app";
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir URL:", err)
    );
  };

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
      {projeto ? (
        <ScrollView style={styles.projetosContainer}>
          <Fields mainText={"Descrição do móvel"}>
            <Texto style={{ color: "#fff", fontSize: 16 }} weight="bold">
              {projeto.descricao}
            </Texto>
          </Fields>
          <Fields mainText={"Briefing"}>
            <Texto style={{ color: "#fff", fontSize: 16 }} weight="bold">
              Tipo do móvel: Cadeira
            </Texto>
            <Texto style={{ color: "#fff", fontSize: 16 }} weight="bold">
              Categoria: Quarto
            </Texto>
            <Texto style={{ color: "#fff", fontSize: 16 }} weight="bold">
              Tamanho: 1x1x1
            </Texto>
            <Texto style={{ color: "#fff", fontSize: 16 }} weight="bold">
              Cor: Amarelo
            </Texto>
          </Fields>
          <Fields mainText={"Modelos 3D"}>
            <Pressable onPress={handleLink}>
              <Texto
                style={{
                  color: "#fff",
                  fontSize: 16,
                  textDecorationLine: "underline",
                }}
                weight="bold"
              >
                Modelo 3D 1
              </Texto>
              <Texto
                style={{
                  color: "#fff",
                  fontSize: 16,
                  textDecorationLine: "underline",
                }}
                weight="bold"
              >
                Modelo 3D 1
              </Texto>
            </Pressable>
          </Fields>
          <Fields mainText={"Progresso do móvel"}>
            <Texto
              style={{
                color: "#fff",
                fontSize: 16,
                alignSelf: "center",
                paddingBottom: 15,
              }}
              weight="bold"
            >
              Fase Atual: Em análise
            </Texto>
            <AnaliseAcompanhamento />
          </Fields>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default FixedAllProjects;

const Fields = ({
  mainText,
  children,
}: {
  mainText: string;
  children?: any;
}) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Pressable style={styles.projectsItems} onPress={handleVisible}>
      <View style={styles.topItemContainer}>
        <Texto weight="bold" style={styles.textItems}>
          {mainText}
        </Texto>
        {visible ? <SetaUp /> : <SetaBottom />}
      </View>
      {visible && <View style={styles.inContainerTextItem}>{children}</View>}
    </Pressable>
  );
};
