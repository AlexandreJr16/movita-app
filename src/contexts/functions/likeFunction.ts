import * as auth from "../../service/index";

/**
 * Adiciona um "like" a um projeto.
 * @param {number} projetoId - ID do projeto a ser curtido.
 * @param {string} token - Token de autenticação.
 * @returns {Promise<any>} - Promessa sem um valor específico.
 */
export async function likeProject(
  projetoId: number,
  token: string | undefined | null
): Promise<any> {
  try {
    // Chama o serviço de autenticação para adicionar um "like" ao projeto
    if (!token || !projetoId) return;

    await auth.likeProject(projetoId, token);
  } catch (error) {
    // Em caso de erro, lança uma exceção
    console.log(error);
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
  token: string | undefined | null
): Promise<any> {
  try {
    // Chama o serviço de autenticação para remover o "like" do projeto
    if (!token || !projetoId) return;

    await auth.deleteLikeProject(projetoId, token);
  } catch (error) {
    // Em caso de erro, lança uma exceção
    console.log(error);
  }
}

/**
 * Adiciona um "like" a um empresa.
 * @param {number} empresaId - ID do projeto a ser curtido.
 * @param {string} token - Token de autenticação.
 * @returns {Promise<any>} - Promessa sem um valor específico.
 */
export async function likeEmpresa(
  empresaId: number,
  token: string | undefined | null
): Promise<any> {
  try {
    // Chama o serviço de autenticação para adicionar um "like" a empresa
    if (!token || !empresaId) return;

    await auth.likeProject(empresaId, token);
  } catch (error) {
    // Em caso de erro, lança uma exceção
    console.log(error);
  }
}

/**
 * Remove o "like" de um empresa.
 * @param {number} empresaId - ID do empresa do qual o "like" será removido.
 * @param {string} token - Token de autenticação.
 * @returns {Promise<any>} - Promessa sem um valor específico.
 */
export async function deleteLikeEmpresa(
  empresaId: number,
  token: string | undefined | null
): Promise<any> {
  try {
    // Chama o serviço de autenticação para remover o "like" do empresa
    if (!token || !empresaId) return;

    await auth.deleteLikeProject(empresaId, token);
  } catch (error) {
    // Em caso de erro, lança uma exceção
    console.log(error);
  }
}
