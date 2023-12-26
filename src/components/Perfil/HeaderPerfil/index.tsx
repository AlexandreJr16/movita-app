import { Pressable, View } from "react-native";
import Arrow from "../../../assents/Perfil/Arrow";
import LogoWhiteBlack from "../../../assents/Perfil/Logo";
import styles from "./styles";
import Logo from "../../Logo/Logo";
import React, { useContext } from "react";
import ImagemBuffer from "../../Imagem";
import AuthContext from "../../../contexts";

const HeaderPerfil = ({
  navigation,
  visibleLogo,
  color = "#fff",
  visiblePerfil,
}: {
  navigation?: any;
  visibleLogo?: boolean;
  color?: string;
  visiblePerfil?: boolean;
}) => {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.header}>
      <Pressable
        style={visibleLogo ? { opacity: 0 } : {}}
        onPress={() => {
          try {
            navigation.goBack();
          } catch (error) {
            console.log("Apenas tentou voltar mais que podia");
          }
        }}
      >
        <Arrow color={color} />
      </Pressable>
      <Logo color={color} size="30" style={styles.logo}></Logo>
      {visiblePerfil ? (
        <ImagemBuffer imgBuffer={user.img} style={styles.img} />
      ) : (
        ""
      )}
    </View>
  );
};
export default HeaderPerfil;
