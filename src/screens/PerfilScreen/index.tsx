import React, { useContext } from "react";
import { ScrollView, View } from "react-native";
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
import AuthContext from "../../contexts/auth";

const PerfilScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.bg}>
        <HeaderPerfil />
        <ShowPerfil />
        <View style={styles.container}>
          <SelectButton
            icon={<Lock />}
            arrow={<BlackArrowPerfil />}
            fontColor={"#000"}
            bgColor={"#fff"}
          >
            Detalhes da conta
          </SelectButton>
          <SelectButton
            icon={<Lock />}
            arrow={<BlackArrowPerfil />}
            fontColor={"#000"}
            bgColor={"#fff"}
          >
            Alterar Senha
          </SelectButton>
          <SelectButton
            icon={<HeartPerfil />}
            arrow={<BlackArrowPerfil />}
            fontColor={"#000"}
            bgColor={"#fff"}
          >
            Meus favoritos
          </SelectButton>
          <SelectButton
            icon={<DocumentPerfil />}
            arrow={<BlackArrowPerfil />}
            fontColor={"#000"}
            bgColor={"#fff"}
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
    </SafeAreaView>
  );
};

export default PerfilScreen;
