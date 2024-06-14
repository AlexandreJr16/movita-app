import React, { useContext, useState } from "react";
import { Pressable, ScrollView, StatusBar, View } from "react-native";
import BlueBack from "../../../../../assents/Cadastro/BlueBack";
import Logo from "../../../../../assents/Perfil/Logo";
import DropDCadastro from "../../../../../components/Cadastro/DropDown/DropDownCad";
import InputCadastro from "../../../../../components/Cadastro/Input/InputCadastro";
import LoadingIndicator from "../../../../../components/Default/Loading";
import Texto from "../../../../../components/Default/texto/Texto";
import ErrorAlert from "../../../../../components/ErrorAlert/ErrorAlert";
import Carrossel from "../../../../../components/Login/Carrossel/Carrossel";
import LoginButton from "../../../../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../../../../contexts/auth.context";
import { sexoArr, meses } from "../../data";
import styles from "../../styles";

const SignUpScreen4 = ({ navigation }: any) => {
  const { signupUser, setSignupUser } = useContext(AuthContext);

  const { loading } = useContext(AuthContext);

  const [error, setError] = useState<any>(null);
  const handleDia = (value: any) =>
    setSignupUser({ ...signupUser, dia: value });
  const handleMes = (value: any) =>
    setSignupUser({ ...signupUser, mes: value });
  const handleAno = (value: any) =>
    setSignupUser({ ...signupUser, ano: value });
  const handleSexo = (value: any) =>
    setSignupUser({ ...signupUser, sexo: value });
  const handleSubmit = () => {
    const isError =
      signupUser.sexo == undefined ||
      signupUser.ano == undefined ||
      signupUser.mes == undefined ||
      signupUser.dia == undefined;
    if (isError) {
      setError("Sexo ou Data de Nascimento inválidos.");
    } else {
      const dataFormatada = `${signupUser.ano}-${(signupUser.mes._index + 1)
        .toString()
        .padStart(2, "0")}-${signupUser.dia
        .toString()
        .padStart(2, "0")}T00:00:00.000Z`;
      setSignupUser({ ...signupUser, data: dataFormatada });
      navigation.navigate("signup5");
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
              Informe seu sexo e data de nascimento:
            </Texto>
            <ErrorAlert isAlert={!!error} styles={styles.errorText}>
              {error}
            </ErrorAlert>
          </View>
          <View style={styles.inputContainer}>
            <DropDCadastro
              data={sexoArr}
              func={(value: any) => {
                handleSexo(value);
                if (!!error) setError(null);
              }}
              selectedValue={"M"}
              text={signupUser.sexo}
              styleContainer={{ width: "100%" }}
            >
              Sexo:
            </DropDCadastro>

            <Texto
              weight="regular"
              style={{
                color: "#878787",
                fontSize: 16,
                lineHeight: 18,
                paddingVertical: 3,
                alignSelf: "flex-start",
                marginTop: 15,
                paddingHorizontal: 4,
              }}
            >
              Data de Nascimento:
            </Texto>
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 10,
                marginTop: -10,
              }}
            >
              <InputCadastro
                func={(value: any) => {
                  handleDia(value);
                  if (!!error) setError(null);
                }}
                text={signupUser.dia}
                inputMode={"numeric"}
                styleContainer={{ width: "32%", marginBottom: 10 }}
              ></InputCadastro>
              <DropDCadastro
                text={signupUser.mes}
                func={(value: any) => {
                  handleMes(value);
                  if (!!error) setError(null);
                }}
                data={meses}
                selectedValue={"JAN"}
                styleContainer={{ width: "30%" }}
              />
              <InputCadastro
                func={(value: any) => {
                  handleAno(value);
                  if (!!error) setError(null);
                }}
                text={signupUser.ano}
                inputMode={"numeric"}
                styleContainer={{ width: "32%", marginBottom: 10 }}
              ></InputCadastro>
            </View>
          </View>

          <LoginButton text={"Próximo"} func={handleSubmit} />
          <LoadingIndicator visible={loading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen4;
