import { Pressable, View } from "react-native";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts";
import CoracaoBranco from "../../../assents/ShowItem/Coracao/CoracaoBranco";
import CoracaoRed from "../../../assents/ShowItem/Coracao/CoracaoRed";

const HeaderShowItem = ({
  data,
}: {
  data: {
    title?: string;
    subtitle?: string;
    nota?: string;
    id: number;
    liked: boolean;
    likeObj: any;
    deleteLikeObj: any;
    descricao?: string;
  };
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  const { likeObj, deleteLikeObj } = data;
  const handleLiked = async () => {
    const func = liked ? await deleteLikeObj(data.id) : await likeObj(data.id);
    setLiked(!liked);
  };

  useEffect(() => {
    setLiked(data.liked);
  }, []);
  return (
    <View style={styles.boxCardTop}>
      <View style={styles.containerCard}>
        <View style={styles.topRightView}>
          <Texto weight="bold" style={styles.titulo}>
            {data.title}
          </Texto>
          <Texto style={styles.subtitle} weight="bold">
            {data.subtitle}
          </Texto>
        </View>
        <View style={styles.boxTopRightCard}>
          {data.nota ? (
            <Texto weight="bold" style={styles.fabTitleBox}>
              {data.nota}
            </Texto>
          ) : null}
          <Pressable onPress={handleLiked}>
            <View
              style={
                liked
                  ? styles.heartBox
                  : { ...styles.heartBox, backgroundColor: "#fff" }
              }
            >
              {liked ? <CoracaoRed /> : <CoracaoBranco />}
            </View>
          </Pressable>
        </View>
      </View>
      <Texto weight="regular" style={styles.textParagrafo}>
        {data.descricao
          ? data.descricao
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe odio tempora repellat vel, facilis debitis nisi iusto repellendus hic ea nesciunt rerum sequi numquam error vitae quis soluta quod ratione!"}
      </Texto>
    </View>
  );
};
export default HeaderShowItem;
