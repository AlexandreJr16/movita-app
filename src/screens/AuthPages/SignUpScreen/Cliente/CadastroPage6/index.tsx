import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, StatusBar, View } from "react-native";
import BlueBack from "../../../../../assents/Cadastro/BlueBack";
import Logo from "../../../../../assents/Perfil/Logo";
import InputCadastro from "../../../../../components/Cadastro/Input/InputCadastro";
import LoadingIndicator from "../../../../../components/Default/Loading";
import Texto from "../../../../../components/Default/texto/Texto";
import ErrorAlert from "../../../../../components/ErrorAlert/ErrorAlert";
import Carrossel from "../../../../../components/Login/Carrossel/Carrossel";
import LoginButton from "../../../../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../../../../contexts/auth.context";
import styles from "../../styles";

const SignUpScreen6 = ({ navigation }) => {
  const { signupUser, setSignupUser, signUp } = useContext(AuthContext);
  const { loading } = useContext(AuthContext);
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [error, setError] = useState(null);

  const handleSenha = (value) => setSenha(value);
  const handleConfirmSenha = (value) => setConfirmSenha(value);
  const handleSubmit = async () => {
    const isError = senha == "" || confirmSenha == "";
    if (isError) {
      setError("Campos inválidos.");
    } else if (senha != confirmSenha) {
      setError("Os campos devem ser iguais");
    } else {
      const user: any = await handleSignUp();
      if (user.status == "ok") navigation.navigate("Login");
      else setError("Erro ao cadastrar. Talvez seu email já esteja cadastrado");
    }
  };

  const handleSignUp = async () => {
    try {
      // const data = new Date(
      //   Number(signupUser.ano),
      //   Number(signupUser.mes),
      //   Number(signupUser.dia)
      // );

      // const formatedData = data.toISOString();
      const obj = {
        email: signupUser.email,
        senha: senha,
        nome: signupUser.nome,
        telefone: signupUser.telefone,
        cpf: signupUser.cpf,
        sexo: signupUser.sexo.label,
        nascimento: signupUser.data,
        cep: "oi",
        estado: signupUser.estado,
        bairro: signupUser.bairro,
        cidade: signupUser.cidade,
        tipo_usuario: "cliente",
      };

      const response = await signUp(obj);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setSenha(signupUser.senha);
    setConfirmSenha(signupUser.confirmSenha);
  }, []);
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
              secureText={true}
              styleContainer={{ width: "100%" }}
              text={senha}
              func={(value) => {
                handleSenha(value);
                if (!!error) setError(null);
              }}
            >
              Senha:
            </InputCadastro>

            <InputCadastro
              secureText={true}
              styleContainer={{ width: "100%" }}
              text={confirmSenha}
              func={(value) => {
                handleConfirmSenha(value);
                if (!!error) setError(null);
              }}
            >
              Confirme sua senha:
            </InputCadastro>
          </View>

          <LoginButton text={"Próximo"} func={handleSubmit} />
          <LoadingIndicator visible={loading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen6;
