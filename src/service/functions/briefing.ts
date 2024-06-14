import axios, { AxiosError } from "axios";
import { API_URL } from "../../../configs";
import { ErrorResponse } from "./dto/requestDTO";
import { UpdateBriefingDTO } from "../../contexts/briefing.context";

export const findBriefing = async (id: number) => {
  const url = `${API_URL}/briefing/${id}`;

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios
    .get(url, options)
    .then((resp) => resp.data)
    .catch((error: AxiosError<ErrorResponse>) => {
      return { message: error };
    });

  return response;
};
export const updateBriefing = async (id: number, dto: UpdateBriefingDTO) => {
  const url = `${API_URL}/briefing/${id}`;

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios
    .patch(url, dto, options)
    .then((resp) => resp.data)
    .catch((error: AxiosError<ErrorResponse>) => {
      return { message: error };
    });
  console.log(response);
  return response;
};
