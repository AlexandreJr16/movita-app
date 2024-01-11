import axios, { AxiosError, AxiosResponse } from "axios";
import { API_URL } from "../../../configs";

export const getTopProjects = async (num: number): Promise<any> => {
  const url = `${API_URL}/projeto/topProjetos/${num}`;

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
export const getAllProjetosByCliente = async (num: number): Promise<any> => {
  const url = `${API_URL}/projeto/allcontratante/${num}`;

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
    throw error;
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
  const data = { projetoId, token };

  try {
    const response = await axios.post(url, data, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
