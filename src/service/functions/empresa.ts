import axios from "axios";
import { API_URL } from "../../../configs";

export const getRandomEmpresas = async (num: number): Promise<any> => {
  const url = `${API_URL}/empresa/getTop/${num}`;

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

export const getEmpresaById = async (id: number): Promise<any> => {
  const url = `${API_URL}/empresa/${id}`;

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
export const deleteLikeEmpresa = async (
  empresaId: number,
  token: string
): Promise<any> => {
  const url = `${API_URL}/like/empresa/${empresaId}`;

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
export const likeEmpresa = async (
  empresaId: number,
  token: string
): Promise<any> => {
  const url = `${API_URL}/like/empresa`;
  // console.log(projetoId, token);
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const data = { id: empresaId };

  try {
    const response = await axios.post(url, data, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
