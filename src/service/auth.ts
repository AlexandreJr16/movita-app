import axios, { AxiosError } from "axios";
import { API_URL } from "../../configs";

type ErrorResponse = {
  error: string;
  message: string;
  status: number;
};

type UserResponse = {
  token: string;
  user: object;
};

const handleApiError = (error: AxiosError<ErrorResponse>) => {
  if (error.response) {
    console.error(`Erro na requisição. Status: ${error.response.status}`);
    console.error("Detalhes:", error.response.data);
    throw error.response.data;
  } else if (error.request) {
    console.error("Não houve resposta da API. Verifique sua conexão.");
    throw { success: false, message: "Erro de conexão com a API" };
  } else {
    // Ocorreu um erro ao configurar a requisição
    console.error("Erro ao configurar a requisição para a API.");
    throw { success: false, message: "Erro na configuração da requisição" };
  }
};

export const signIn = (email: string, senha: string): Promise<UserResponse> => {
  const url = `${API_URL}/auth/signin`;
  const data = {
    email: email,
    senha: senha,
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios
    .post(url, data, options)
    .then((resp) => resp.data)
    .catch((error: AxiosError<ErrorResponse>) => {
      handleApiError(error);
    });
};

export function signUp({
  email,
  senha,
  tipo_usuario,
  nome,
  telefone,
  cpf,
  sexo,
  nascimento,
  cep,
  estado,
  bairro,
  cidade,
}: {
  email: string;
  senha: string;
  tipo_usuario: string;
  nome: string;
  telefone: string;
  cpf: string;
  sexo: string;
  nascimento: string;
  cep: string;
  estado: string;
  bairro: string;
  cidade: string;
}) {
  const url = `${API_URL}/auth/signup`;
  const data = {
    email,
    senha,
    tipo_usuario,
    nome,
    telefone,
    cpf,
    sexo,
    nascimento,
    cep,
    estado,
    bairro,
    cidade,
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const user = axios
    .post(url, data, options)
    .then((resp) => {
      const responseData = resp.data;
      if (responseData.id) return true;
    })
    .catch((error: AxiosError<ErrorResponse>) => {
      handleApiError(error);
    });
  return user;
}
