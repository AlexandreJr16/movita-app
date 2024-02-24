import React, { useContext } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import styles from "./styles";
import WhiteArrowPerfil from "../../../assents/Perfil/ArrowWhite";
import BlackArrowPerfil from "../../../assents/Perfil/BlackArrow";
import CrossPerfil from "../../../assents/Perfil/Cross";
import DocumentPerfil from "../../../assents/Perfil/Document";
import HeartPerfil from "../../../assents/Perfil/Heart";
import SignOutPerfil from "../../../assents/Perfil/SignOut";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import SelectButton from "../../../components/Perfil/SelectButton";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import AuthContext from "../../../contexts";
import Lock from "../../../assents/Perfil/Lock";

const PerfilScreen = ({ navigation }) => {
  //logout
  const { logout } = useContext(AuthContext);
  return (
    <ScrollView style={styles.bg}>
      <StatusBar backgroundColor={"#1f1f1f"} barStyle="light-content" />
      <HeaderPerfil visibleLogo={true} />
      <ShowPerfil />
      <View style={styles.container}>
        <SelectButton
          icon={<Lock />}
          arrow={<BlackArrowPerfil />}
          fontColor={"#000"}
          bgColor={"#fff"}
          onPress={() => {
            navigation.navigate("updatePerfil");
          }}
        >
          Detalhes da conta
        </SelectButton>
        <SelectButton
          icon={<Lock />}
          arrow={<BlackArrowPerfil />}
          fontColor={"#000"}
          bgColor={"#fff"}
          onPress={() => {
            navigation.navigate("updateSenha");
          }}
        >
          Alterar Senha
        </SelectButton>
        <SelectButton
          icon={<HeartPerfil />}
          arrow={<BlackArrowPerfil />}
          fontColor={"#000"}
          bgColor={"#fff"}
          onPress={() => {
            navigation.navigate("meusFavoritos");
          }}
        >
          Meus favoritos
        </SelectButton>
        <SelectButton
          icon={<DocumentPerfil />}
          arrow={<BlackArrowPerfil />}
          fontColor={"#000"}
          bgColor={"#fff"}
          onPress={() => {
            navigation.navigate("meusProjetos");
          }}
        >
          Meus Projetos
        </SelectButton>
        <SelectButton
          icon={<CrossPerfil />}
          arrow={<BlackArrowPerfil />}
          fontColor={"#000"}
          bgColor={"#fff"}
          onPress={() => {
            logout();
          }}
        >
          Sair da conta
        </SelectButton>
        <SelectButton
          icon={<SignOutPerfil />}
          arrow={<WhiteArrowPerfil />}
          fontColor={"#fff"}
          bgColor={"#CF654D"}
        >
          Delete sua conta
        </SelectButton>
      </View>
    </ScrollView>
  );
};

export default PerfilScreen;
