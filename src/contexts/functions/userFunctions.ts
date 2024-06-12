import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from "../../service/index";

/**
 * Obtém informações do usuário usando o token de autenticação.
 * @param {string} token - Token de autenticação do usuário.
 * @param {Function} setUser - Função para definir as informações do usuário no estado.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 */
export const getUser = async (token, setUser, setLoading) => {
  try {
    // Define o carregamento como true enquanto obtém as informações do usuário
    setLoading(true);

    // Chama o serviço de autenticação para obter as informações do usuário
    const response = await auth.getUser(token);

    // Se as informações do usuário incluírem um ID, armazena no AsyncStorage e define no estado do usuário
    if (response.id) {
      await AsyncStorage.setItem("userData", JSON.stringify(response));
      setUser(response);
    }
  } catch (error) {
    // Em caso de erro, lança uma exceção
    throw new Error("Erro ao obter informações do usuário");
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
};

/**
 * Atualiza as informações do usuário com base no DTO fornecido.
 * @param {Object} dto - Objeto contendo informações do usuário para atualização.
 * @param {string} token - Token de autenticação do usuário.
 * @param {Function} getUser - Função para obter informações atualizadas do usuário.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para a resposta da atualização do usuário.
 */
export const updateUser = async (dto, token, getUser, setLoading) => {
  try {
    // Define o carregamento como true enquanto atualiza as informações do usuário
    setLoading(true);

    // Chama o serviço de autenticação para atualizar as informações do usuário
    const response = await auth.updateUser(dto, token);

    // Obtém as informações atualizadas do usuário após a atualização
    await getUser(token);
    console.log(response);
    // Retorna a resposta da atualização do usuário
    return response;
  } catch (error) {
    // Em caso de erro, define o carregamento como false e lança uma exceção
    setLoading(false);
    throw new Error(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
};

/**
 * Atualiza a senha do usuário com base no DTO fornecido.
 * @param {Object} dto - Objeto contendo a nova senha do usuário.
 * @param {string} token - Token de autenticação do usuário.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para a resposta da atualização da senha do usuário.
 */
export const updateSenha = async (dto, token, setLoading) => {
  try {
    // Define o carregamento como true enquanto atualiza a senha do usuário
    setLoading(true);

    // Chama o serviço de autenticação para atualizar a senha do usuário
    const updateUser = await auth.updateSenha(dto, token);

    // Retorna a resposta da atualização da senha do usuário
    return updateUser;
  } catch (error) {
    // Em caso de erro, define o carregamento como false e lança uma exceção
    setLoading(false);
    throw new Error(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
};

/**
 * Adiciona uma imagem ao perfil do usuário.
 * @param {Object} dto - Objeto contendo a imagem do usuário e o ID do usuário.
 * @param {any} dto.bin - Representação binária da imagem do usuário.
 * @param {string} dto.id - ID do usuário ao qual a imagem será adicionada.
 * @param {string} token - Token de autenticação do usuário.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @param {Function} getUser - Função para obter informações atualizadas do usuário.
 * @returns {Promise<any>} - Promessa que resolve para o resultado da adição da imagem do usuário.
 */
export async function addImageUser(
  dto: any,
  token,
  setLoading,
  getUser
): Promise<any> {
  try {
    // Chama o serviço de autenticação para adicionar a imagem ao perfil do usuário
    await auth.uploadImagemUser(dto, token);

    // Obtém informações atualizadas do usuário após a adição da imagem
    await getUser(token);
  } catch (error) {
    // Em caso de erro, lança uma exceção
    throw new Error(error);
  } finally {
    // O bloco `finally` é opcional e pode ser omitido se não houver código a ser executado após o bloco `try` ou `catch`
    // Pode ser usado para código que precisa ser executado independentemente de ocorrer uma exceção ou não
  }
}
