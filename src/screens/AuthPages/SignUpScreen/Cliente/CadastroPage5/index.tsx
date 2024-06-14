import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, StatusBar, View } from "react-native";

import styles from "../../styles";
import cep from "cep-promise";
import BlueBack from "../../../../../assents/Cadastro/BlueBack";
import Logo from "../../../../../assents/Perfil/Logo";
import InputCadastro from "../../../../../components/Cadastro/Input/InputCadastro";
import LoadingIndicator from "../../../../../components/Default/Loading";
import Texto from "../../../../../components/Default/texto/Texto";
import ErrorAlert from "../../../../../components/ErrorAlert/ErrorAlert";
import Carrossel from "../../../../../components/Login/Carrossel/Carrossel";
import LoginButton from "../../../../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../../../../contexts/auth.context";
import debounce from "../../../../../utils/debounce";

interface Local {
  cep: string;
  city: string;
  neighborhood: string;
  service: string;
  state: string;
  street: string;
}

const SignUpScreen5 = ({ navigation }) => {
  const { signupUser, setSignupUser } = useContext(AuthContext);
  const { loading } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [ceps, setceps] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState<string>("");
  const [cidade, setCidade] = useState("");

  const handleceps = async (value) => {
    setceps(value);
    debounce(searchCep, 2000);
  };
  const searchCep = async (value: any) => {
    if (value) {
      const local: Local | void = await cep(`${value}`)
        .then(
          (data: {
            cep: string;
            city: string;
            neighborhood: string;
            service: string;
            state: string;
            street: string;
          }) => data
        )
        .catch((error) => {
          console.log(error);
        });
      console.log(local);
      if (local) {
        setBairro(local.neighborhood);
        setEstado(local.state);
        setCidade(local.city);
      }
    }
  };
  const handleEstado = (value) => {
    setEstado(value);
  };
  const handleBairro = (value) => {
    setBairro(value);
  };
  const handleCidade = (value) => {
    setCidade(value);
  };

  const handleSubmit = async () => {
    const local: Local | void = await cep(`${ceps}`)
      .then(
        (data: {
          cep: string;
          city: string;
          neighborhood: string;
          service: string;
          state: string;
          street: string;
        }) => data
      )
      .catch(() => {
        setError("O CEP está errado");
      });

    const isError =
      ceps == "" ||
      estado == "" ||
      cidade == "" ||
      bairro == "" ||
      local == undefined;
    if (isError) {
      setError("Endereço inválido.");
    } else {
      setSignupUser({
        ...signupUser,
        cep: ceps,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
      });
      navigation.navigate("signup6");
    }
  };

  useEffect(() => {
    setBairro(signupUser.bairro);
    setCidade(signupUser.cidade);
    setEstado(signupUser.estado);
    setceps(signupUser.cep);
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
                  setSignupUser({
                    ...signupUser,
                    cep: ceps,
                    estado: estado,
                    cidade: cidade,
                    bairro: bairro,
                  });
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
              Informe seu endereço
            </Texto>
            <ErrorAlert isAlert={!!error} styles={styles.errorText}>
              {error}
            </ErrorAlert>
          </View>
          <View style={styles.inputContainer}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: 10,
              }}
            >
              <InputCadastro
                inputMode={"numeric"}
                styleContainer={{ width: "52%" }}
                text={ceps}
                func={(value) => {
                  handleceps(value);
                  if (!!error) setError(null);
                }}
              >
                CEP:
              </InputCadastro>
              <InputCadastro
                styleContainer={{ width: "46%" }}
                text={estado}
                func={(value) => {
                  handleEstado(value);
                  if (!!error) setError(null);
                }}
              >
                Estado:
              </InputCadastro>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: 10,
              }}
            >
              <InputCadastro
                styleContainer={{ width: "53%" }}
                text={bairro}
                func={(value) => {
                  handleBairro(value);
                  if (!!error) setError(null);
                }}
              >
                Bairro:
              </InputCadastro>
              <InputCadastro
                styleContainer={{ width: "45%" }}
                text={cidade}
                func={(value) => {
                  handleCidade(value);
                  if (!!error) setError(null);
                }}
              >
                Cidade:
              </InputCadastro>
            </View>
          </View>

          <LoginButton text={"Próximo"} func={handleSubmit} />
          <LoadingIndicator visible={loading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen5;
