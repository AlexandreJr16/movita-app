import React, { useContext, useState } from "react";
import { Pressable, ScrollView, StatusBar, View } from "react-native";
import BlueBack from "../../../../assents/Cadastro/BlueBack";
import Logo from "../../../../assents/Perfil/Logo";
import InputCadastro from "../../../../components/Cadastro/Input/InputCadastro";
import LoadingIndicator from "../../../../components/Default/Loading";
import Texto from "../../../../components/Default/texto/Texto";
import ErrorAlert from "../../../../components/ErrorAlert/ErrorAlert";
import Carrossel from "../../../../components/Login/Carrossel/Carrossel";
import LoginButton from "../../../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../../../contexts";
import styles from "../../styles";

const SignUpScreen2 = ({ navigation }) => {
  const { loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState(null);

  const handleEmail = (value) => setEmail(value);
  const handleTelefone = (value) => setTelefone(value);
  const handleSubmit = () => {
    const isError = email == "" || telefone == "" || !verifyEmail(email);
    if (isError) {
      setError("Email ou Telefone inválidos.");
    } else {
      navigation.navigate("signup3");
    }
  };

  const verifyEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar translucent={true} barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <View style={styles.logo1}>
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <BlueBack />
              </Pressable>
            </View>
            <View style={styles.logo2}>
              <Logo />
            </View>
          </View>
          <View style={styles.carrossel}>
            <Carrossel />
          </View>
          <View style={styles.textContainer}>
            <Texto weight="regular" style={styles.title}>
              Informe seu Email completo{" "}
            </Texto>
            <ErrorAlert isAlert={!!error} styles={styles.errorText}>
              {error}
            </ErrorAlert>
          </View>
          <View style={styles.inputContainer}>
            <InputCadastro
              styleContainer={{ width: "100%" }}
              text={email}
              func={(value) => {
                handleEmail(value);
                if (!!error) setError(null);
              }}
            >
              Email:
            </InputCadastro>

            <InputCadastro
              styleContainer={{ width: "100%" }}
              text={telefone}
              func={(value) => {
                handleTelefone(value);
                if (!!error) setError(null);
              }}
            >
              Telefone:
            </InputCadastro>
          </View>

          <LoginButton text={"Próximo"} func={handleSubmit} />
          <LoadingIndicator visible={loading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen2;
