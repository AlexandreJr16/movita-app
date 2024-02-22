import { Pressable, View } from "react-native";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts";

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
  const { likeProject, deleteLikeProject } = useContext(AuthContext);
  const handleLiked = async () => {
    const func = liked
      ? await deleteLikeProject(data.id)
      : await likeProject(data.id);
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
            <Texto
              weight="bold"
              style={
                liked
                  ? styles.heartBox
                  : { ...styles.heartBox, backgroundColor: "#666" }
              }
            >
              S2
            </Texto>
          </Pressable>
        </View>
      </View>
      <Texto weight="regular" style={styles.textParagrafo}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe odio
        tempora repellat vel, facilis debitis nisi iusto repellendus hic ea
        nesciunt rerum sequi numquam error vitae quis soluta quod ratione!
      </Texto>
    </View>
  );
};
export default HeaderShowItem;
