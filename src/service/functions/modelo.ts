import axios from "axios";
import { API_URL } from "../../../configs";

export const addModelo = async (
  modeloBin: string,
  projetoId: number
): Promise<any> => {
  const url = `${API_URL}/modelo3d`;
  // console.log(projetoId, token);
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = { projetoId, modeloBin };

  try {
    const response = await axios.post(url, data, options);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const oi = () => {};
