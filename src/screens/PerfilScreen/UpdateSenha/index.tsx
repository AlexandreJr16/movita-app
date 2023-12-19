import { SafeAreaView, ScrollView, View } from "react-native";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import styles from "./styles";
import TitleTextPerfil from "../../../components/Perfil/TitleText";
import InputPerfil from "../../../components/Perfil/Input";
import { useContext, useState } from "react";
import AuthContext from "../../../contexts/auth";

const UpdateSenha = ({ navigation }) => {
  const [senhaAntiga, setSenhaAntiga] = useState();
  const [senhaNova, setSenhaNova] = useState();
  const [confirmSenha, setConfirmSenha] = useState();

  const handleSenhaAntiga = (value: any) => {
    setSenhaAntiga(value);
  };
  const handleSenhaNova = (value: any) => {
    setSenhaNova(value);
  };
  const handleConfirmSenha = (value: any) => {
    setConfirmSenha(value);
  };

  return (
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.bg}>
        <HeaderPerfil navigation={navigation} />
        <ShowPerfil />
        <View style={styles.container}>
          <TitleTextPerfil>Detalhes da conta</TitleTextPerfil>
          <InputPerfil
            title="Senha Atual:"
            func={(value) => {
              handleSenhaAntiga(value);
            }}
            value={senhaAntiga}
          />
          <InputPerfil
            title="Nova Senha:"
            func={(value) => {
              handleSenhaNova(value);
            }}
            value={senhaNova}
          />
          <InputPerfil
            title="Confirme sua senha:"
            func={(value) => {
              handleConfirmSenha(value);
            }}
            value={confirmSenha}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UpdateSenha;
