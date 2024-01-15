import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from "../../service/index";

export const getUser = async (token, setUser, setLoading) => {
  try {
    const response = await auth.getUser(token);
    if (response.img) {
      setUser(response);
      await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response));
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
    const user = await auth.updateUser(dto, token);
    await getUser(token);
    return user;
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
    setLoading(true);
    // console.log(dto);
    const image = await auth.uploadImagemUser(dto, token);
    getUser(token);
    return image;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
}
