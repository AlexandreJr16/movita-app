import React, { useContext } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import HeaderPerfil from "../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../components/Perfil/ShowPerfil";
import SelectButton from "../../components/Perfil/SelectButton";
import Lock from "../../assents/Perfil/Lock";
import BlackArrowPerfil from "../../assents/Perfil/BlackArrow";
import DocumentPerfil from "../../assents/Perfil/Document";
import CrossPerfil from "../../assents/Perfil/Cross";
import WhiteArrow from "../../assents/Splash/WhiteArrow";
import WhiteArrowPerfil from "../../assents/Perfil/ArrowWhite";
import SignOutPerfil from "../../assents/Perfil/SignOut";
import HeartPerfil from "../../assents/Perfil/Heart";
import AuthContext from "../../contexts";
import UpdateSenha from "./UpdateSenha";

const PerfilScreen = ({ navigation }) => {
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
