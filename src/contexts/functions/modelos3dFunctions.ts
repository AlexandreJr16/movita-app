import * as auth from "../../service/index";

export const addModelo = async (modeloBin, projetoId, token, setLoading) => {
  try {
    setLoading(true);
    const response = await auth.addModelo(modeloBin, projetoId);
    setLoading(false);

    return response;
  } catch (error) {
    setLoading(false);
  } finally {
    setLoading(false);
  }
};
