import { Pressable, View, StatusBar } from "react-native";
import React, { useState, useContext } from "react";
import styles from "./styles";
import HeaderCodeInputForgot from "../../../../components/Forgot/Header";
import Texto from "../../../../components/Default/texto/Texto";
import InputCadastro from "../../../../components/Cadastro/Input/InputCadastro";
import LoginButton from "../../../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../../../contexts";

const CodeInputForgot = ({ route, navigation }) => {
  const { sendEmailForgot, verifyCodeForgot } = useContext(AuthContext);
  const [error, setError] = useState();
  const [code, setCode] = useState();
  const { email } = route.params;

  const handleCode = (value) => {
    setCode(value);
  };

  const handleReenviar = async () => {
    const dto = { to: email };
    const user = await sendEmailForgot(dto);
  };

  const handleConfirmCode = async () => {
    const dto = { email, code };
    const user = await verifyCodeForgot(dto);
    if (user.status == "ok") navigation.navigate("ChangePassword", { email });
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
        func={handleCode}
        text={code}
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
export default CodeInputForgot;
