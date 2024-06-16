import { SetStateAction } from "react";

import * as authService from "../../service/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../dto/user.dto";
import { setItemWithExpiration } from "../../utils/storageWithExpiration";

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
export const signIn = async (
  email: string,
  senha: string,
  setToken: {
    (value: SetStateAction<string | undefined>): void;
    (arg0: string): void;
  },
  setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void },
  setUser: {
    (value: SetStateAction<User | null | undefined>): void;
    (arg0: object | undefined): void;
  }
) => {
  try {
    setLoading(true);
    const response = await authService.signIn(email, senha);

    if (response.token) {
      setToken(response.token);
      setUser(response.user);
      await setItemWithExpiration({
        key: "@RNAuth:token",
        value: response.token,
        expirationInMinutes: 1000 * 60 * 60 * 1,
      });
      const user = await authService.getUser(response.token);
      if (user)
        await setItemWithExpiration({
          key: "@RNAuth:user",
          value: JSON.stringify(user),
          expirationInMinutes: 1000 * 60 * 60 * 1,
        });
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
export const logout = async (setUser: {
  (value: SetStateAction<User | null | undefined>): void;
  (arg0: null): void;
}) => {
  try {
    await AsyncStorage.removeItem("@RNAuth:user");
    await AsyncStorage.removeItem("@RNAuth:token");
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

export const signUp = async (
  userInfo: {
    email: string;
    senha: string;
    nome: string;
    telefone: string;
    cpf: string;
    sexo: string;
    nascimento: string;
    cep: string;
    estado: string;
    bairro: string;
    cidade: string;
    tipo_usuario: string;
  },
  setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void },
  setToken: {
    (value: SetStateAction<string | undefined>): void;
    (arg0: string): void;
  }
) => {
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
