import React, { useContext, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assents/Login/Logo";
import Carrossel from "../../components/Login/Carrossel/Carrossel";
import styles from "./styles";
import Texto from "../../components/texto/Texto";
import InputCadastro from "../../components/Cadastro/Input/InputCadastro";
import BlueBack from "../../assents/Cadastro/BlueBack";
import LoginButton from "../../components/Login/LoginButton/LoginButton";
import { Dropdown } from "react-native-element-dropdown";
import DropdownComponent from "react-native-element-dropdown/lib/typescript/components/Dropdown";
import DropDCadastro from "../../components/Cadastro/DropDown/DropDownCad";
import AuthContext from "../../contexts/auth";

const SignUpScreen = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);
  const [page, setPage] = useState(3);

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

  const sexoArr = [
    { label: "Masculino", value: "M" },
    { label: "Feminino", value: "F" },
  ];
  const meses = [
    { label: "Janeiro", value: "JAN" },
    { label: "Fevereiro", value: "FEV" },
    { label: "Março", value: "MAR" },
    { label: "Abril", value: "ABR" },
    { label: "Maio", value: "MAI" },
    { label: "Junho", value: "JUN" },
    { label: "Julho", value: "JUL" },
    { label: "Agosto", value: "AGO" },
    { label: "Setembro", value: "SET" },
    { label: "Outubro", value: "OUT" },
    { label: "Novembro", value: "NOV" },
    { label: "Dezembro", value: "DEZ" },
  ];
  const estadosBrasil = [
    { label: "Acre", value: "AC" },
    { label: "Alagoas", value: "AL" },
    { label: "Amapá", value: "AP" },
    { label: "Amazonas", value: "AM" },
    { label: "Bahia", value: "BA" },
    { label: "Ceará", value: "CE" },
    { label: "Distrito Federal", value: "DF" },
    { label: "Espírito Santo", value: "ES" },
    { label: "Goiás", value: "GO" },
    { label: "Maranhão", value: "MA" },
    { label: "Mato Grosso", value: "MT" },
    { label: "Mato Grosso do Sul", value: "MS" },
    { label: "Minas Gerais", value: "MG" },
    { label: "Pará", value: "PA" },
    { label: "Paraíba", value: "PB" },
    { label: "Paraná", value: "PR" },
    { label: "Pernambuco", value: "PE" },
    { label: "Piauí", value: "PI" },
    { label: "Rio de Janeiro", value: "RJ" },
    { label: "Rio Grande do Norte", value: "RN" },
    { label: "Rio Grande do Sul", value: "RS" },
    { label: "Rondônia", value: "RO" },
    { label: "Roraima", value: "RR" },
    { label: "Santa Catarina", value: "SC" },
    { label: "São Paulo", value: "SP" },
    { label: "Sergipe", value: "SE" },
    { label: "Tocantins", value: "TO" },
  ];
  const capitaisBrasil = [
    { label: "Rio Branco", value: "AC" },
    { label: "Maceió", value: "AL" },
    { label: "Macapá", value: "AP" },
    { label: "Manaus", value: "AM" },
    { label: "Salvador", value: "BA" },
    { label: "Fortaleza", value: "CE" },
    { label: "Brasília", value: "DF" },
    { label: "Vitória", value: "ES" },
    { label: "Goiânia", value: "GO" },
    { label: "São Luís", value: "MA" },
    { label: "Cuiabá", value: "MT" },
    { label: "Campo Grande", value: "MS" },
    { label: "Belo Horizonte", value: "MG" },
    { label: "Belém", value: "PA" },
    { label: "João Pessoa", value: "PB" },
    { label: "Curitiba", value: "PR" },
    { label: "Recife", value: "PE" },
    { label: "Teresina", value: "PI" },
    { label: "Rio de Janeiro", value: "RJ" },
    { label: "Natal", value: "RN" },
    { label: "Porto Alegre", value: "RS" },
    { label: "Porto Velho", value: "RO" },
    { label: "Boa Vista", value: "RR" },
    { label: "Florianópolis", value: "SC" },
    { label: "São Paulo", value: "SP" },
    { label: "Aracaju", value: "SE" },
    { label: "Palmas", value: "TO" },
  ];

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
    if (senha !== confirmaSenha) {
      console.log("Senhas diferentes");
      return; // Aborta o processo se as senhas forem diferentes
    }

    function valorMesParaNumero(valorMes) {
      switch (valorMes) {
        case "JAN":
          return 0; // Janeiro corresponde a 0 no objeto Date
        case "FEV":
          return 1;
        case "MAR":
          return 2;
        case "ABR":
          return 3;
        case "MAI":
          return 4;
        case "JUN":
          return 5;
        case "JUL":
          return 6;
        case "AGO":
          return 7;
        case "SET":
          return 8;
        case "OUT":
          return 9;
        case "NOV":
          return 10;
        case "DEZ":
          return 11;
        default:
          return null;
      }
    }

    const data = new Date(Number(ano), valorMesParaNumero(mes), Number(dia));
    const formatoDataISO8601 = data.toISOString();

    const obj = {
      email,
      senha,
      nome,
      telefone,
      cpf,
      sexo,
      nascimento: formatoDataISO8601,
      cep,
      estado,
      bairro,
      cidade,
    };

    const response = signUp(obj);
    console.log(response);
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
