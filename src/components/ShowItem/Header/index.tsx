import { Pressable, View } from "react-native";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts";

const HeaderShowItem = ({
  data,
}: {
  data: { title: string; madeBy: string; id: number; liked: boolean };
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
      <Texto weight="bold" style={styles.titulo}>
        {data.title}
      </Texto>
      <View style={styles.boxTopRightCard}>
        <View style={styles.fabTitleBox}>
          <Texto weight="bold" style={styles.fabTitleBox}>
            {data.madeBy}
          </Texto>
        </View>
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
  );
};
export default HeaderShowItem;
