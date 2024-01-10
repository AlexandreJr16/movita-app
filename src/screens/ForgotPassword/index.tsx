import { View, StatusBar } from "react-native";
import Texto from "../../components/texto/Texto";
import React, { useState, useContext } from "react";
import styles from "./styles";
import HeaderForgotScreen from "../../components/Forgot/Header";
import InputCadastro from "../../components/Cadastro/Input/InputCadastro";
import LoginButton from "../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../contexts";

const ForgotScreen = ({ navigation }) => {
  const { sendEmailForgot } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handleEnviarEmail = async () => {
    const dto = { to: email };
    const user = await sendEmailForgot(dto);
    if (user.status == "ok") navigation.navigate("CodeInput", { email });
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

      <HeaderForgotScreen navigation={navigation} />
      <View style={styles.textContainer}>
        <Texto weight="bold" style={styles.mainText}>
          Esqueceu a senha?
        </Texto>
        <Texto weight="regular" style={styles.secondText}>
          Informe seu e-mail para que possamos enviar o código de verificação.
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
        styleContainer={styles.input}
        text={email}
        func={handleEmail}
      />
      <View style={styles.btnContainer}>
        <LoginButton func={handleEnviarEmail} text="Enviar Código" />
      </View>
    </View>
  );
};
