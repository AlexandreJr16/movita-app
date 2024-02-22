import { Pressable, View, StatusBar } from "react-native";
import React, { useContext, useState } from "react";
import styles from "./styles";
import HeaderCodeInputForgot from "../../../../components/Forgot/Header";
import InputCadastro from "../../../../components/Cadastro/Input/InputCadastro";
import LoginButton from "../../../../components/Login/LoginButton/LoginButton";
import Texto from "../../../../components/Default/texto/Texto";
import AuthContext from "../../../../contexts";

const ChangePasswordForgot = ({ route, navigation }) => {
  const { email } = route.params;
  const { updateSenhaForgot } = useContext(AuthContext);
  const [error, setError] = useState();
  const [senha, setSenha] = useState();
  const [confirmSenha, setConfirmSenha] = useState();

  const handleSenha = (value) => {
    setSenha(value);
  };
  const handleConfirmSenha = (value) => {
    setConfirmSenha(value);
  };

  const handleReenviar = async () => {
    const dto = { senha, confirmSenha, email };
    const user = await dto;
  };

  const handleConfirmCode = async () => {
    const dto = { email, senha, confirmSenha };
    const user = await updateSenhaForgot(dto);
    if (user.status == "ok") navigation.navigate("Login");
    else setError(user.error);
  };
  return (
    <View
      style={{
        ...styles.container,
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor={"#1f1f1f"} barStyle="light-content" />

      <HeaderCodeInputForgot navigation={navigation} />
      <View style={styles.textContainer}>
        <Texto weight="bold" style={styles.mainText}>
          Esqueceu a senha?
        </Texto>
        <Texto weight="regular" style={styles.secondText}>
          Enviamos um código de verificação para seu e-mail.
        </Texto>
        {error && (
          <Texto
            weight="regular"
            style={{ ...styles.secondText, color: "#C63818", fontSize: 16 }}
          >
            {error}
          </Texto>
        )}
      </View>
      <InputCadastro
        children={"Nova senha:"}
        func={handleSenha}
        text={senha}
        styleContainer={styles.input}
      />
      <InputCadastro
        children={"Confirme senha:"}
        func={handleConfirmSenha}
        text={confirmSenha}
        styleContainer={styles.input}
      />
      <View style={styles.btnContainer}>
        <LoginButton text="Próximo" func={handleConfirmCode} />
        <View style={styles.forgetPContainer}>
          <Texto weight="regular" style={styles.forgetPassword}>
            Não recebeu?
          </Texto>
          <Pressable onPress={handleReenviar}>
            <Texto
              weight="regular"
              style={error ? styles.errorText : styles.blueSignUp}
            >
              Reenviar código.
            </Texto>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default ChangePasswordForgot;
