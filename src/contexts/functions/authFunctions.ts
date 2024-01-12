import * as auth from "../../service/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const signIn = async (email, senha, setToken, getUser, setLoading) => {
  try {
    setLoading(true);
    const response = await auth.signIn(email, senha);
    if (response.token) {
      setToken(response.token);
      await getUser(response.token);
      await AsyncStorage.setItem("@RNAuth:token", response.token);
      setLoading(false);
    } else {
      setLoading(false);
      return response;
    }
  } catch (error) {
    setLoading(false);
  }
};

export const logout = async (setUser) => {
  await AsyncStorage.clear().then(() => {
    setUser(null);
  });
};

export const signUp = async (userInfo, setLoading, setToken) => {
  try {
    setLoading(true);
    const response = await auth.signUp(userInfo);
    return response;
  } catch (error) {
    console.error("Erro no cadastro:", error);
    setLoading(false);
  } finally {
    setLoading(false);
    setToken("Non-Resp-butCad");
  }
};

// Adicione outras funções conforme necessário
