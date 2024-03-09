import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import styles from "./styles";
import React, { useContext, useState } from "react";
import LoadingIndicator from "../../../../components/Default/Loading";
import ButtonPerfil from "../../../../components/Perfil/Button";
import HeaderPerfil from "../../../../components/Perfil/HeaderPerfil";
import InputPerfil from "../../../../components/Perfil/Input";
import ShowPerfil from "../../../../components/Perfil/ShowPerfil";
import TitleTextPerfil from "../../../../components/Perfil/TitleText";
import AuthContext from "../../../../contexts/auth.context";
import UserContext from "../../../../contexts/user.context";

const UpdateSenha = ({ navigation }) => {
  const { loading } = useContext(AuthContext);
  const { updateSenha } = useContext(UserContext);

  //UseStates
  const [senhaAntiga, setSenhaAntiga] = useState<string>();
  const [senhaNova, setSenhaNova] = useState<string>();
  const [confirmSenha, setConfirmSenha] = useState<string>();

  //Handle dos  useStates
  const handleSenhaAntiga = (value: any) => {
    setSenhaAntiga(value);
  };
  const handleSenhaNova = (value: any) => {
    setSenhaNova(value);
  };
  const handleConfirmSenha = (value: any) => {
    setConfirmSenha(value);
  };

  //Faz o submit para alterar a senha
  const handleSubmit = async () => {
    const dto = {
      senhaAtual: senhaAntiga,
      novaSenha: senhaNova,
      confirmSenha: confirmSenha,
    };
    console.log(dto);
    const updateUser = await updateSenha(dto);

    //Se estiver tudo ok -> volta ao menu
    if (updateUser.status == "ok") {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.background}>
      <StatusBar
        translucent={true}
        backgroundColor={"#1f1f1f"}
        barStyle="light-content"
      />
      <ScrollView>
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
          <ButtonPerfil onPress={handleSubmit} />
        </View>
        <LoadingIndicator visible={loading} />
      </ScrollView>
    </View>
  );
};
export default UpdateSenha;
