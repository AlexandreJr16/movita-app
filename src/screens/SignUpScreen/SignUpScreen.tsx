import React, { useContext, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo/Logo";
import Carrossel from "../../components/Login/Carrossel/Carrossel";
import styles from "./styles";
import Texto from "../../components/texto/Texto";
import InputCadastro from "../../components/Cadastro/Input/InputCadastro";
import BlueBack from "../../assents/Cadastro/BlueBack";
import LoginButton from "../../components/Login/LoginButton/LoginButton";
import { capitaisBrasil, meses, estadosBrasil, sexoArr } from "./data";
import DropDCadastro from "../../components/Cadastro/DropDown/DropDownCad";
import AuthContext from "../../contexts/auth";
import { valorMesParaNumero } from "./functions";

const SignUpScreen = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);
  const [page, setPage] = useState(0);

  const [nome, setNome] = useState<string | null>();
  const [sobrenome, setSobrenome] = useState<string | null>();
  const [email, setEmail] = useState<string | null>();
  const [telefone, setTelefone] = useState<string | null>();
  const [cpf, setCpf] = useState<string | null>();
  const [sexo, setSexo] = useState<string | null>();
  const [dia, setDia] = useState<string | null>();
  const [mes, setMes] = useState<string | null>();
  const [ano, setAno] = useState<string | null>();
  const [cep, setCep] = useState<string | null>();
  const [estado, seEstado] = useState<string | null>();
  const [bairro, setBairro] = useState<string | null>();
  const [cidade, setCidade] = useState<string | null>();
  const [senha, setSenha] = useState<string | null>();
  const [confirmaSenha, setConfirmaSenha] = useState<string | null>();

  const handleNome = (nome) => {
    setNome(nome);
  };
  const handleSobrenome = (sobrenome) => {
    setSobrenome(sobrenome);
  };
  const handleEmail = (email) => {
    setEmail(email);
  };
  const handleTelefone = (telefone) => {
    setTelefone(telefone);
  };
  const handleSexo = (Sexo) => {
    setSexo(Sexo);
  };

  const handleDia = (Dia) => {
    setDia(Dia);
  };

  const handleMes = (Mes) => {
    setMes(Mes);
  };

  const handleAno = (Ano) => {
    setAno(Ano);
  };

  const handleCep = (Cep) => {
    setCep(Cep);
  };

  const handleEstado = (Estado) => {
    seEstado(Estado);
  };

  const handleBairro = (Bairro) => {
    setBairro(Bairro);
  };

  const handleCidade = (Cidade) => {
    setCidade(Cidade);
  };

  const handleSenha = (Senha) => {
    setSenha(Senha);
  };

  const handleConfirmaSenha = (ConfirmaSenha) => {
    setConfirmaSenha(ConfirmaSenha);
  };

  const handleCpf = (cpf) => {
    setCpf(cpf);
  };

  const handleSignUp = () => {
    try {
      if (senha !== confirmaSenha) return;

      const data = new Date(
        Number(ano),
        valorMesParaNumero(mes) + 1,
        Number(dia)
      );
      const formatedData = data.toISOString();
      const obj = {
        email,
        senha,
        nome,
        telefone,
        cpf,
        sexo,
        nascimento: formatedData,
        cep,
        estado,
        bairro,
        cidade,
      };

      const response = signUp(obj);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const pages = [
    {
      title: "Informe seu nome completo:",
      firstInput: (
        <InputCadastro
          styleContainer={{ width: "100%" }}
          func={handleNome}
          text={nome}
        >
          Nome:
        </InputCadastro>
      ),
      secondInput: (
        <InputCadastro
          styleContainer={{ width: "100%" }}
          func={handleSobrenome}
          text={sobrenome}
        >
          Sobrenome:
        </InputCadastro>
      ),
      text: "PRÓXIMO",
    },
    {
      title: "Informe seu e-mail e telefone:",
      firstInput: (
        <InputCadastro
          styleContainer={{ width: "100%" }}
          text={email}
          func={handleEmail}
        >
          E-mail:
        </InputCadastro>
      ),
      secondInput: (
        <InputCadastro
          styleContainer={{ width: "100%" }}
          text={telefone}
          func={handleTelefone}
        >
          Telefone:
        </InputCadastro>
      ),
      text: "PRÓXIMO",
    },
    {
      title: "Informe seu CPF ou CNPJ:",
      firstInput: (
        <InputCadastro
          styleContainer={{ width: "100%" }}
          text={cpf}
          func={handleCpf}
        >
          CPF/CNPJ:
        </InputCadastro>
      ),
      secondInput: null,
      text: "PRÓXIMO",
    },
    {
      title: "Informe o seu sexoArr e data de nascimento",
      firstInput: (
        <View style={{ width: "100%", marginBottom: 10 }}>
          <DropDCadastro func={handleSexo} selectedValue={sexo} data={sexoArr}>
            Sexo:
          </DropDCadastro>
        </View>
      ),
      secondInput: (
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: -30,
          }}
        >
          <Texto
            weight="regular"
            style={{ color: "#878787", fontSize: 16, marginTop: 10 }}
          >
            Data de Nascimento:
          </Texto>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <InputCadastro
              func={handleDia}
              text={dia}
              styleContainer={{ width: "28%", marginLeft: 10 }}
            ></InputCadastro>
            <DropDCadastro
              func={handleMes}
              selectedValue={mes}
              data={meses}
              styleContainer={{ width: "40%" }}
            ></DropDCadastro>
            <InputCadastro
              func={handleAno}
              text={ano}
              styleContainer={{ width: "28%" }}
            ></InputCadastro>
          </View>
        </View>
      ),

      text: "PRÓXIMO",
    },
    {
      title: "Informe seu \nendereço:",
      firstInput: (
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: -30,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <InputCadastro
              func={handleCep}
              text={cep}
              styleContainer={{ width: "40%" }}
            >
              CEP:
            </InputCadastro>
            <DropDCadastro
              func={handleEstado}
              selectedValue={estado}
              data={estadosBrasil}
              styleContainer={{ width: "60%" }}
            >
              Estado
            </DropDCadastro>
          </View>
        </View>
      ),

      secondInput: (
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: -30,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <InputCadastro
              func={handleBairro}
              text={bairro}
              styleContainer={{ width: "50%" }}
            >
              Bairro
            </InputCadastro>
            <DropDCadastro
              func={handleCidade}
              selectedValue={cidade}
              data={capitaisBrasil}
              styleContainer={{ width: "50%" }}
            >
              Cidade
            </DropDCadastro>
          </View>
        </View>
      ),
      text: "PRÓXIMO",
    },
    {
      title: "Informe seu e-mail e telefone:",
      firstInput: (
        <InputCadastro
          styleContainer={{ width: "100%" }}
          text={senha}
          func={handleSenha}
          secureText={true}
        >
          Senha:
        </InputCadastro>
      ),
      secondInput: (
        <InputCadastro
          styleContainer={{ width: "100%" }}
          text={confirmaSenha}
          func={handleConfirmaSenha}
          secureText={true}
        >
          Confirmar Senha:
        </InputCadastro>
      ),
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
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            {pages[page].firstInput}
            {pages[page].secondInput}
          </View>

          <LoginButton text={pages[page].text} func={handlePages} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUpScreen;
