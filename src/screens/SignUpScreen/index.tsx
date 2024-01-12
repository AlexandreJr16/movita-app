import React, { useContext, useState } from "react";
import { Pressable, ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Default/Logo/Logo";
import Carrossel from "../../components/Login/Carrossel/Carrossel";
import styles from "./styles";
import Texto from "../../components/Default/texto/Texto";
import InputCadastro from "../../components/Cadastro/Input/InputCadastro";
import BlueBack from "../../assents/Cadastro/BlueBack";
import LoginButton from "../../components/Login/LoginButton/LoginButton";
import { meses, estadosBrasil, sexoArr } from "./data";
import DropDCadastro from "../../components/Cadastro/DropDown/DropDownCad";
import AuthContext from "../../contexts";
import { valorMesParaNumero } from "./functions";
import LoadingIndicator from "../../components/Default/Loading";

const SignUpScreen = ({ navigation }) => {
  const { signUp, token, loading } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cpf: "",
    sexo: "",
    dia: "",
    mes: "",
    ano: "",
    cep: "",
    estado: "",
    bairro: "",
    cidade: "",
    senha: "",
    confirmaSenha: "",
    tipoUser: "cliente",
  });
  const [page, setPage] = useState(0);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = async () => {
    try {
      if (formData.senha !== formData.confirmaSenha) return;

      const data = new Date(
        Number(formData.ano),
        valorMesParaNumero(formData.mes) + 1,
        Number(formData.dia)
      );
      const formatedData = data.toISOString();
      const obj = {
        email: formData.email,
        senha: formData.senha,
        nome: formData.nome,
        telefone: formData.telefone,
        cpf: formData.cpf,
        sexo: formData.sexo,
        nascimento: formatedData,
        cep: formData.cep,
        estado: formData.estado,
        bairro: formData.bairro,
        cidade: formData.cidade,
        tipo_usuario: "cliente",
      };

      const response = await signUp(obj);
      console.log(response, "Retorno");
      if (token == "Non-Resp-butCad") {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pages = [
    {
      title: "Informe seu nome completo:",
      firstInput: {
        label: "Nome:",
        name: "nome",
      },
      secondInput: {
        label: "Sobrenome:",
        name: "sobrenome",
      },
      text: "PRÓXIMO",
    },
    {
      title: "Informe seu e-mail e telefone:",
      firstInput: {
        label: "E-mail:",
        name: "email",
      },
      secondInput: {
        label: "Telefone:",
        name: "telefone",
      },
      text: "PRÓXIMO",
    },
    {
      title: "Informe seu CPF ou CNPJ:",
      firstInput: {
        label: "CPF/CNPJ:",
        name: "cpf",
      },
      secondInput: null,
      text: "PRÓXIMO",
    },
    {
      title: "Informe o seu sexoArr e data de nascimento",
      firstInput: {
        label: "Sexo:",
        name: "sexo",
      },
      secondInput: {
        label: "Data de Nascimento:",
        name: "dataNascimento",
      },
      text: "PRÓXIMO",
    },
    {
      title: "Informe seu \nendereço:",
      firstInput: {
        label: "CEP:",
        name: "cep",
      },
      secondInput: {
        label: "Estado:",
        name: "estado",
      },
      text: "PRÓXIMO",
    },
    {
      title: "Informe seu e-mail e telefone:",
      firstInput: {
        label: "Senha:",
        name: "senha",
      },
      secondInput: {
        label: "Confirmar Senha:",
        name: "confirmaSenha",
      },
      text: "FINALIZAR",
    },
  ];

  const handlePages = () => {
    if (page < pages.length - 1) setPage(page + 1);
    else handleSignUp();
  };

  const handleBackPages = () => {
    if (page > 0) setPage(page - 1);
    else navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar translucent={true} barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <View style={styles.logo1}>
              <Pressable onPress={handleBackPages}>
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
              {pages[page].title}
            </Texto>
          </View>
          <View style={styles.inputContainer}>
            {pages[page].firstInput && (
              <InputCadastro
                styleContainer={{ width: "100%" }}
                text={formData[pages[page].firstInput.name]}
                func={(value) =>
                  handleInputChange(pages[page].firstInput.name, value)
                }
              >
                {pages[page].firstInput.label}
              </InputCadastro>
            )}
            {pages[page].secondInput && (
              <InputCadastro
                styleContainer={{ width: "100%" }}
                text={formData[pages[page].secondInput.name]}
                func={(value) =>
                  handleInputChange(pages[page].secondInput.name, value)
                }
              >
                {pages[page].secondInput.label}
              </InputCadastro>
            )}
          </View>

          <LoginButton text={pages[page].text} func={handlePages} />
          <LoadingIndicator visible={loading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
