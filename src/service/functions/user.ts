import axios, { AxiosError, AxiosResponse } from "axios";
import {
  ErrorResponse,
  UpdateUserResponse,
  UserResponse,
  updateSenhaDTO,
} from "./dto/requestDTO";
import { API_URL } from "../../../configs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setItemWithExpiration } from "../../utils/storageWithExpiration";

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

export const updateUser = async (
  dto: {
    user?: any; // Replace with specific type if possible
    cliente?: any; // Replace with specific type if possible
    empresa?: any; // Replace with specific type if possible
    endereco?: any; // Replace with specific type if possible
  },
  token: string
): Promise<UpdateUserResponse> => {
  const url = `${API_URL}/user`;

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  try {
    const response: AxiosResponse<UpdateUserResponse> = await axios.put(
      url,
      dto,
      options
    );
    return response.data;
  } catch (error) {
    // Ensure that 'handleApiError' is defined
    handleApiError(error as AxiosError<ErrorResponse>);
    // You might want to throw the error again if you don't handle it completely here
    throw error;
  }
};

export const updateSenha = async (
  dto: {
    senhaAtual: string;
    novaSenha: string;
    confirmSenha: string;
  },
  token: string
): Promise<updateSenhaDTO> => {
  try {
    const url = `${API_URL}/user/senha`;

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    console.log(dto);
    const response: AxiosResponse<updateSenhaDTO> = await axios.put(
      url,
      dto,
      options
    );

    console.log(response);
    return response.data;
  } catch (error) {
    // Ensure that 'handleApiError' is defined
    handleApiError(error as AxiosError<ErrorResponse>);
    // You might want to throw the error again if you don't handle it completely here
    throw error;
  }
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

  setItemWithExpiration({
    key: "@RNAuth:user",
    value: user,
    expirationInMinutes: 1000 * 60 * 60 * 1,
  });

  // await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(user));

  return user;
};

export const uploadImagemUser = async (dto: any, token: any) => {
  const url = `${API_URL}/user/image`;
  try {
    const data = { dto };
    console.log("Oi");
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const response = await axios.post(url, data, options);
    // return response;
  } catch (error) {
    console.log(error);
  }
};
export const enviarEmailForgot = async (dto: {
  to: string;
}): Promise<updateSenhaDTO> => {
  try {
    const url = `${API_URL}/auth/sendEmailForget`;

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response: AxiosResponse<updateSenhaDTO> = await axios.post(
      url,
      dto,
      options
    );

    return response.data;
  } catch (error) {
    // Ensure that 'handleApiError' is defined
    handleApiError(error as AxiosError<ErrorResponse>);
    // You might want to throw the error again if you don't handle it completely here
    throw error;
  }
};

export const verificarCodigoForgot = async (dto: {
  code: string;
  email: string;
}): Promise<updateSenhaDTO> => {
  try {
    const url = `${API_URL}/auth/sendCodeToForget`;

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response: AxiosResponse<updateSenhaDTO> = await axios.post(
      url,
      dto,
      options
    );

    return response.data;
  } catch (error) {
    // Ensure that 'handleApiError' is defined
    handleApiError(error as AxiosError<ErrorResponse>);
    // You might want to throw the error again if you don't handle it completely here
    throw error;
  }
};
export const updateSenhaForgot = async (dto: {
  email: string;
  senha: string;
  confirmSenha: string;
}): Promise<updateSenhaDTO> => {
  try {
    const url = `${API_URL}/user/updateSenhaWithoutAuth`;

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response: AxiosResponse<updateSenhaDTO> = await axios.post(
      url,
      dto,
      options
    );

    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError<ErrorResponse>);
    throw error;
  }
};
