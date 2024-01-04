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
