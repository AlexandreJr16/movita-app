import axios, { AxiosError } from "axios";
import { API_URL } from "../../../configs";
import { ErrorResponse, UserResponse } from "./dto/requestDTO";

const handleApiError = (error: AxiosError<ErrorResponse>) => {
  if (error.response) {
    return { message: "Erro na requisição" };
  } else if (error.request) {
    console.error("Não houve resposta da API. Verifique sua conexão.");
    throw { success: false, message: "Erro de conexão com a API" };
  } else {
    // Ocorreu um erro ao configurar a requisição
    console.error("Erro ao configurar a requisição para a API.");
    throw { success: false, message: "Erro na configuração da requisição" };
  }
};

export const updateUser = (dto): Promise<UserResponse> => {
  const url = `${API_URL}/auth/signin`;
  const data = {};

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios
    .post(url, data, options)
    .then((resp) => resp.data)
    .catch((error: AxiosError<ErrorResponse>) => {
      return { message: error };
    });
};

export const getUser = async (token: string): Promise<any> => {
  const url = `${API_URL}/user`;

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  const user = await axios
    .get(url, options)
    .then((resp) => resp.data)
    .catch((error: AxiosError<ErrorResponse>) => {
      handleApiError(error);
    });
  return user;
};
