import axios from "axios";
import { API_URL } from "../../../configs";

export const addModelo = async (
  modeloBin: string,
  projetoId: number,
  nome: string
): Promise<any> => {
  console.log(nome);
  const url = `${API_URL}/modelo3d`;
  // console.log(projetoId, token);
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = { projetoId, modeloBin, nome };

  try {
    const response = await axios.post(url, data, options);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
