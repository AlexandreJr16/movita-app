import React, { Suspense, useEffect, useState } from "react";
import { View } from "react-native";
import Texto from "../../Default/texto/Texto";
import { ProjetosResponseType } from "../../../screens/TabPages/ChatScreen/Messaging";
import ImagemBuffer from "../../Default/Imagem";
import styles from "./styles";
import TachinhaChatFixed from "../../../assents/Chat/tachinha";
import { TouchableOpacity } from "react-native-gesture-handler";

const FixedProjects = ({
  projetos,
  navigation,
}: {
  projetos?: ProjetosResponseType[];
  navigation: any;
}) => {
  const [fixedProduct, setFixedProduct] = useState<ProjetosResponseType>();

  useEffect(() => {
    if (projetos) {
      setFixedProduct(projetos[projetos.length - 1]);
    }
  }, [projetos]);

  const handleNavigate = () => {
    navigation.navigate("AllProjects", { projetos });
  };

  return (
    <Suspense>
      {fixedProduct ? (
        <TouchableOpacity style={styles.cardFixed} onPress={handleNavigate}>
          {fixedProduct.imagem[0] ? (
            <ImagemBuffer imgBuffer={fixedProduct.imagem} style={styles.img} />
          ) : (
            <View style={styles.nullImage}>
              <Texto weight="bold" style={styles.textIntoImage}>
                {fixedProduct.titulo[0]}
              </Texto>
            </View>
          )}
          <View style={styles.textField}>
            <Texto weight="bold" style={styles.secondaryText}>
              Veja aqui detalhes do seu projeto
            </Texto>
            <Texto weight="bold" style={styles.mainText}>
              {fixedProduct.titulo}
            </Texto>
          </View>
          <TachinhaChatFixed />
        </TouchableOpacity>
      ) : null}
    </Suspense>
  );
};

export default FixedProjects;
