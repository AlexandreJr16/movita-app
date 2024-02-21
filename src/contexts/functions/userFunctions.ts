import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from "../../service/index";

export const getUser = async (token, setUser, setLoading) => {
  try {
    setLoading(true);
    const response = await auth.getUser(token);
    if (response.id) {
      await AsyncStorage.setItem("userData", JSON.stringify(response));
      setUser(response);
    }
  } catch (error) {
    throw new Error("errado");
  } finally {
    setLoading(false);
  }
};

export const updateUser = async (dto, token, getUser, setLoading) => {
  try {
    setLoading(true);
    const response = await auth.updateUser(dto, token);
    await getUser(token);
    return response;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
};

export const updateSenha = async (dto, token, setLoading) => {
  try {
    setLoading(true);
    const updateUser = await auth.updateSenha(dto, token);
    return updateUser;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
};
export async function addImageUser(
  dto: any,
  token,
  setLoading,
  getUser
): Promise<any> {
  try {
    await auth.uploadImagemUser(dto, token);
    getUser(token);
  } catch (error) {
    throw new Error(error);
  } finally {
  }
}
