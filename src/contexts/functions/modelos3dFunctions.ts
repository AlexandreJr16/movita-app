import { SetStateAction } from "react";
import * as auth from "../../service/index";

/**
 * Adiciona um modelo a um projeto.
 * @param {string} modeloBin - Representação binária do modelo a ser adicionado.
 * @param {number} projetoId - ID do projeto ao qual o modelo será adicionado.
 * @param {string} token - Token de autenticação.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para a resposta da adição do modelo.
 */
export const addModelo = async (
  modeloBin: string,
  projetoId: number,
  nome: string,
  token: string | undefined,
  setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) => {
  try {
    // Define o carregamento como true enquanto adiciona o modelo
    setLoading(true);

    // Chama o serviço de autenticação para adicionar o modelo ao projeto
    const response = await auth.addModelo(modeloBin, projetoId, nome);

    // Define o carregamento como false após a operação ser concluída
    setLoading(false);

    // Retorna a resposta da adição do modelo
    return response;
  } catch (error) {
    // Em caso de erro, define o carregamento como false e relança o erro
    setLoading(false);
    console.log(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
};
