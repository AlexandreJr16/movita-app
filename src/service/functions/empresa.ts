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
