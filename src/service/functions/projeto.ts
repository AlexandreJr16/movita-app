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
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
