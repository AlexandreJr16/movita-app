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
import { cpf, cnpj } from "cpf-cnpj-validator";
const SignUpScreen3 = ({ navigation }) => {
  const { loading } = useContext(AuthContext);
  const [cpfs, setCpf] = useState("");
  const [error, setError] = useState(null);

  const handleCpf = (value) => setCpf(value);
  const handleSubmit = async () => {
    const cpfLimpo = cpfs.replace(/[^\d]/g, "");
    const isError = cpf.isValid(cpfLimpo) || cnpj.isValid(cpfLimpo);
    if (!isError) {
      setError("CPF inválido.");
    } else {
      const isCpf = cpf.isValid(cpfLimpo)
        ? cpf.format(cpfLimpo)
        : cnpj.format(cpfLimpo);
      setCpf(isCpf);
      navigation.navigate("signup4");
    }
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
              Informe seu CPF ou CNPJ
            </Texto>
            <ErrorAlert isAlert={!!error} styles={styles.errorText}>
              {error}
            </ErrorAlert>
          </View>

          <View
            style={{
              ...styles.inputContainer,
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <InputCadastro
              inputMode={"numeric"}
              styleContainer={{ width: "100%" }}
              text={cpfs}
              func={(value) => {
                handleCpf(value);
                if (!!error) setError(null);
              }}
            >
              CPF/CNPJ:
            </InputCadastro>
          </View>

          <LoginButton text={"Próximo"} func={handleSubmit} />
          <LoadingIndicator visible={loading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen3;
