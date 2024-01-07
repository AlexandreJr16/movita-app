import axios, { AxiosError, AxiosResponse } from "axios";
import { API_URL } from "../../../configs";
import {
  ErrorResponse,
  UpdateUserResponse,
  UserResponse,
  updateSenhaDTO,
} from "./dto/requestDTO";
import { useContext } from "react";

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
  // Assuming you need to send data in the request body, populate the 'data' object
  const data = {
    /* populate with necessary data */
  };

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
    console.log(response.data);
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

    const response: AxiosResponse<updateSenhaDTO> = await axios.put(
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
export const uploadImagemUser = async (dto, token) => {
  const url = `${API_URL}/user/imagem`;

  try {
    const response = await axios.post(url, dto, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
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
    // Ensure that 'handleApiError' is defined
    handleApiError(error as AxiosError<ErrorResponse>);
    // You might want to throw the error again if you don't handle it completely here
    throw error;
  }
};
