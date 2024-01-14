import React, { useContext, useState } from "react";
import { Pressable, ScrollView, StatusBar, View } from "react-native";
import BlueBack from "../../../../assents/Cadastro/BlueBack";
import InputCadastro from "../../../../components/Cadastro/Input/InputCadastro";
import LoadingIndicator from "../../../../components/Default/Loading";
import Texto from "../../../../components/Default/texto/Texto";
import ErrorAlert from "../../../../components/ErrorAlert/ErrorAlert";
import Carrossel from "../../../../components/Login/Carrossel/Carrossel";
import LoginButton from "../../../../components/Login/LoginButton/LoginButton";
import AuthContext from "../../../../contexts";
import styles from "../../styles";
import DropDCadastro from "../../../../components/Cadastro/DropDown/DropDownCad";
import { sexoArr, meses } from "../../data";
import TextoInput from "../../../../components/Default/texto/TextoInput";
import Logo from "../../../../components/Default/Logo/Logo";

const SignUpScreen4 = ({ navigation }) => {
  const { loading } = useContext(AuthContext);
  const [sexo, setSexo] = useState<
    | undefined
    | {
        _index: number;
        value: string;
        label: string;
      }
  >(undefined);
  const [mes, setMes] = useState<
    | undefined
    | {
        _index: number;
        value: string;
        label: string;
      }
  >(undefined);
  const [dia, setDia] = useState("");

  const [ano, setAno] = useState("");
  const [error, setError] = useState(null);
  const handleDia = (value) => setDia(value);
  const handleMes = (value) => setMes(value);
  const handleAno = (value) => setAno(value);
  const handleSexo = (value) => setSexo(value);
  const handleSubmit = () => {
    const isError =
      sexo == undefined || ano == "" || mes == undefined || dia == "";
    if (isError) {
      console.log("eeror");
      setError("Sexo ou Data de Nascimento inválidos.");
    } else {
      const dataFormatada = `${ano}-${(mes._index + 1)
        .toString()
        .padStart(2, "0")}-${dia.toString().padStart(2, "0")}T00:00:00.000Z`;

      console.log(dataFormatada);
      console.log(sexo.label);

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
              func={handleSexo}
              selectedValue={"M"}
              text={sexo}
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
                func={handleDia}
                text={dia}
                inputMode={"numeric"}
                styleContainer={{ width: "32%", marginBottom: 10 }}
              ></InputCadastro>
              <DropDCadastro
                text={mes}
                func={handleMes}
                data={meses}
                selectedValue={"JAN"}
                styleContainer={{ width: "30%" }}
              />
              <InputCadastro
                func={handleAno}
                text={ano}
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
