import * as authService from "../../service/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

//SIM, IHAGO, EU DEIXEI O CHAT GPT COMENTAR PRA MIM

/**
 * Realiza o login do usuário.
 * @param {string} email - O endereço de e-mail do usuário.
 * @param {string} senha - A senha do usuário.
 * @param {Function} setToken - Função para atualizar o token no estado.
 * @param {Function} getUser - Função para obter informações do usuário.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<Object>} - Uma Promise que resolve com o objeto de resposta.
 */
export const signIn = async (email, senha, setToken, setLoading, setUser) => {
  try {
    setLoading(true);
    const response = await authService.signIn(email, senha);

    if (response.token) {
      setToken(response.token);
      setUser(response.user);
      await AsyncStorage.setItem("@RNAuth:token", response.token);
      await authService.getUser(response.token);
    }
    return response;
  } catch (error) {
    console.error("Erro no login:", error);
  } finally {
    setLoading(false);
  }
};

/**
 * Realiza o logout do usuário.
 * @param {Function} setUser - Função para limpar as informações do usuário no estado.
 */
export const logout = async (setUser) => {
  try {
    await AsyncStorage.clear();
    setUser(null);
  } catch (error) {
    console.error("Erro no logout:", error);
  }
};

/**
 * Realiza o cadastro do usuário.
 * @param {Object} userInfo - As informações do usuário a serem cadastradas.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @param {Function} setToken - Função para atualizar o token no estado.
 * @returns {Promise<Object>} - Uma Promise que resolve com o objeto de resposta.
 */

export const signUp = async (userInfo, setLoading, setToken) => {
  try {
    setLoading(true);
    const response = await authService.signUp(userInfo);
    return response;
  } catch (error) {
    console.error("Erro no cadastro:", error);
  } finally {
    setLoading(false);
    setToken("Non-Resp-butCad");
  }
};

// Adicione outras funções conforme necessário
