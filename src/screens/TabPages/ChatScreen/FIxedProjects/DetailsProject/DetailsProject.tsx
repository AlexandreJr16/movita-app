import React, { useContext, useEffect, useState } from "react";
import { Linking, Pressable, ScrollView, View, Image } from "react-native";
import styles from "./styles";

import Arrow from "../../../../../assents/Perfil/Arrow";
import Logo from "../../../../../assents/Perfil/Logo";
import Texto from "../../../../../components/Default/texto/Texto";
import ProjetoContext from "../../../../../contexts/project.context";
import { TouchableOpacity } from "react-native-gesture-handler";
import SetaBottom from "../../../../../assents/Chat/setaBottom";
import SetaUp from "../../../../../assents/Chat/setaUp";
import Fase1 from "../../../../../assents/Projeto/fase1";
import Fase2 from "../../../../../assents/Projeto/fase2";
import Fase4 from "../../../../../assents/Projeto/fase4";
import Fase3 from "../../../../../assents/Projeto/fase3";

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

const API_AR =
  "https://7f78-2804-389-e1b8-66e-b0dc-90f3-961a-2f5c.ngrok-free.app";

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
  console.log(projectId);

  const handleLink = () => {
    const num = projectId.id == 15 ? 1 : projectId.id == 14 ? 2 : 0;
    const url = projectId.id ? `${API_AR}/store?default=${num}` : API_AR;
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir URL:", err)
    );
  };

  const getProject = async (id: number) => {
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
              Tipo do móvel: {"Indefinido pelo fabricante"}
            </Texto>
            <Texto style={{ color: "#fff", fontSize: 16 }} weight="bold">
              Categoria: {"Móvel planejado"}
            </Texto>
            <Texto style={{ color: "#fff", fontSize: 16 }} weight="bold">
              Tamanho: {"1x1x1"}
            </Texto>
            <Texto style={{ color: "#fff", fontSize: 16 }} weight="bold">
              Cor: {"Amarelo"}
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
                Modelo 3D
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
              Fase Atual:{projeto.status}
            </Texto>
            {projeto.status == "Esperando confirmação" && <Fase1 />}
            {projeto.status == "2" && <Fase2 />}
            {projeto.status == "3" && <Fase3 />}
            {projeto.status == "4" && <Fase4 />}
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
