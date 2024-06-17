import axios, { AxiosError, AxiosResponse } from "axios";
import { API_URL } from "../../../configs";
import {
  getItemWithExpiration,
  setItemWithExpiration,
} from "../../utils/storageWithExpiration";

export const createProjeto = async (dto: {
  users: { user1: number; user2: number };
  titulo: string;
  descricao: string;
}) => {
  const url = `${API_URL}/projeto`;

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, dto, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const findProjectById = async (dto: { id: number }) => {
  const url = `${API_URL}/projeto/${dto.id}`;

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTopProjects = async (num: number): Promise<any> => {
  const url = `${API_URL}/projeto/topProjetos/${num}`;

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const responseProjetoStorage = await getItemWithExpiration(
      "@RNAuth:topProjetos"
    );
    if (responseProjetoStorage) {
      return responseProjetoStorage;
    } else {
      const response = await axios.get(url, options);
      await setItemWithExpiration({
        key: "@RNAuth:topProjetos",
        value: response.data,
        expirationInMinutes: 1000 * 60 * 60 * 1,
      });
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
export const getAllProjetosByCliente = async (token: string): Promise<any> => {
  const url = `${API_URL}/projeto/allcontratante`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const dto = {};
  try {
    const response = await axios.post(url, dto, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRandomProjects = async (num: number): Promise<any> => {
  const url = `${API_URL}/projeto/randomCarrossel/${num}`;

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getProject = async (num: number): Promise<any> => {
  const url = `${API_URL}/projeto/${num}`;

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFavProject = async (token: string): Promise<any> => {
  const url = `${API_URL}/projeto/favoritos`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const data = {};
  try {
    const response = await axios.post(url, data, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addImageProj = async (
  token?: string,
  dto?: { bin?: any; id?: number }
): Promise<any> => {
  const url = `${API_URL}/projeto/imagem`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const response = await axios.post(url, dto, options);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteLikeProject = async (
  projetoId: number,
  token: string
): Promise<any> => {
  const url = `${API_URL}/like/projeto/${projetoId}`;

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  try {
    const response = await axios.delete(url, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const likeProject = async (
  projetoId: number,
  token: string
): Promise<any> => {
  const url = `${API_URL}/like/projeto`;
  // console.log(projetoId, token);
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const data = { id: projetoId, token };

  try {
    const response = await axios.post(url, data, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const projetoFindByname = async (dto: {
  nome: string;
}): Promise<any> => {
  const url = `${API_URL}/projeto/find/${dto.nome}`;

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const findByProjeto = async (dto: { value: string }) => {
  const url = `${API_URL}/projeto/findByName`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, dto, options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const findProjetoByUserCompany = async (dto: {
  clienteId: number;
  empresaId: number;
}) => {
  const url = `${API_URL}/projeto/getProjetoByUserCompany`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, dto, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
