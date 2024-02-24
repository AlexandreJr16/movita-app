import * as auth from "../../service/index";

/**
 * Adiciona um "like" a um projeto.
 * @param {number} projetoId - ID do projeto a ser curtido.
 * @param {string} token - Token de autenticação.
 * @returns {Promise<any>} - Promessa sem um valor específico.
 */
export async function likeProject(
  projetoId: number,
  token: string
): Promise<any> {
  try {
    // Chama o serviço de autenticação para adicionar um "like" ao projeto
    await auth.likeProject(projetoId, token);
  } catch (error) {
    // Em caso de erro, lança uma exceção
    throw new Error(error);
  }
}

/**
 * Remove o "like" de um projeto.
 * @param {number} projetoId - ID do projeto do qual o "like" será removido.
 * @param {string} token - Token de autenticação.
 * @returns {Promise<any>} - Promessa sem um valor específico.
 */
export async function deleteLikeProject(
  projetoId: number,
  token: string
): Promise<any> {
  try {
    // Chama o serviço de autenticação para remover o "like" do projeto
    await auth.deleteLikeProject(projetoId, token);
  } catch (error) {
    // Em caso de erro, lança uma exceção
    throw new Error(error);
  }
}

//Quando ler isso fala pra eu fazer a função de like Empresa
