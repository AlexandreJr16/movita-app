import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import styles from "./styles";

import Arrow from "../../../../../assents/Perfil/Arrow";
import Logo from "../../../../../assents/Perfil/Logo";
import Texto from "../../../../../components/Default/texto/Texto";
import ProjetoContext from "../../../../../contexts/project.context";
import { TouchableOpacity } from "react-native-gesture-handler";
import SetaBottom from "../../../../../assents/Chat/setaBottom";
import SetaUp from "../../../../../assents/Chat/setaUp";

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
      <ScrollView style={styles.projetosContainer}>
        <Fields mainText={"Descrição"} />
      </ScrollView>
    </View>
  );
};

export default FixedAllProjects;

const Fields = ({ mainText }: { mainText: string }) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <TouchableOpacity style={styles.projectsItems} onPress={handleVisible}>
      <View style={styles.topItemContainer}>
        <Texto weight="bold" style={styles.textItems}>
          {mainText}
        </Texto>
        {visible ? <SetaUp /> : <SetaBottom />}
      </View>
      {visible && (
        <View style={styles.inContainerTextItem}>
          <Texto weight="regular">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            inventore perspiciatis vitae repudiandae quisquam natus eius
            pariatur error delectus dolorum aspernatur nemo incidunt animi
            temporibus, eum esse facilis. Incidunt, minus.
          </Texto>
        </View>
      )}
    </TouchableOpacity>
  );
};
