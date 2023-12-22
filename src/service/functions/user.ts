import axios, { AxiosError } from "axios";
import { API_URL } from "../../../configs";
import {
  ErrorResponse,
  UpdateUserResponse,
  UserResponse,
} from "./dto/requestDTO";
import { useContext } from "react";
import AuthContext from "../../contexts/auth";

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

export const updateUser = async (dto: {
  user?: any;
  cliente?: any;
  empresa?: any;
  endereco?: any;
}): Promise<UpdateUserResponse> => {
  const url = `${API_URL}/auth/signin`;
  const data = {};
  const { token } = useContext(AuthContext);

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  const user = await axios
    .put(API_URL, data, options)
    .then((resp) => resp.data)
    .catch((error: AxiosError<ErrorResponse>) => {
      handleApiError(error);
    });
  return user;
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
