import React, { useContext, useState } from "react";
import { Pressable, ScrollView, StatusBar, View } from "react-native";
import styles from "../../styles";
import { cpf, cnpj } from "cpf-cnpj-validator";
import BlueBack from "../../../../../assents/Cadastro/BlueBack";
import Logo from "../../../../../assents/Perfil/Logo";
import InputCadastro from "../../../../../components/Cadastro/Input/InputCadastro";
import LoadingIndicator from "../../../../../components/Default/Loading";
import Texto from "../../../../../components/Default/texto/Texto";
import ErrorAlert from "../../../../../components/ErrorAlert/ErrorAlert";
import Carrossel from "../../../../../components/Login/Carrossel/Carrossel";
import LoginButton from "../../../../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../../../../contexts/auth.context";
import InputMaskedCadastro from "../../../../../components/Cadastro/MaskedInput/MaskedInput";

const SignUpScreen3 = ({ navigation }: any) => {
  const { signupUser, setSignupUser } = useContext(AuthContext);
  const [error, setError] = useState<any>(null);
  const { loading } = useContext(AuthContext);

  const handleCpf = (value: any) =>
    setSignupUser({ ...signupUser, cpf: value });
  const handleSubmit = async () => {
    const cpfLimpo = signupUser.cpf.replace(/[^\d]/g, "");
    const isError = cpf.isValid(cpfLimpo) || cnpj.isValid(cpfLimpo);
    if (!isError) {
      setError("CPF inválido.");
    } else {
      const isCpf = cpf.isValid(cpfLimpo)
        ? cpf.format(cpfLimpo)
        : cnpj.format(cpfLimpo);
      setSignupUser({ ...signupUser, cpf: isCpf });
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
            <InputMaskedCadastro
              masked={"999.999.999-99"}
              inputMode={"numeric"}
              styleContainer={{ width: "100%" }}
              text={signupUser.cpf}
              func={(value: any) => {
                handleCpf(value);
                if (!!error) setError(null);
              }}
            >
              CPF/CNPJ:
            </InputMaskedCadastro>
          </View>

          <LoginButton text={"Próximo"} func={handleSubmit} />
          <LoadingIndicator visible={loading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen3;
