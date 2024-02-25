import * as auth from "../../service/index";

/**
 * Obtém as principais empresas com um número específico.
 * @param {number} num - Número de principais empresas a serem recuperadas.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para as principais empresas.
 */
export async function getTopEmpresas(num: number, setLoading): Promise<any> {
  try {
    // Define o carregamento como true enquanto busca os dados
    setLoading(true);

    // Chama o serviço de autenticação para obter as principais empresas
    const empresas = await auth.getRandomEmpresas(num);

    // Retorna as empresas recuperadas
    return empresas;
  } catch (error) {
    // Trata erros definindo o carregamento como false e relança o erro
    setLoading(false);
    throw new Error(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
}

/**
 * Obtém informações da empresa pelo ID.
 * @param {number} num - ID da empresa a ser recuperada.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para as informações da empresa.
 */
export async function getEmpresaById(num: number, setLoading): Promise<any> {
  try {
    // Define o carregamento como true enquanto busca os dados
    setLoading(true);

    // Chama o serviço de autenticação para obter a empresa pelo ID
    const empresa = await auth.getEmpresaById(num);

    // Retorna as informações da empresa recuperadas
    return empresa;
  } catch (error) {
    // Trata erros definindo o carregamento como false e relança o erro
    setLoading(false);
    throw new Error(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
}

export async function findEmpresaByName(
  nome: string
): Promise<{ id: number; imagem: any; nome: string }[]> {
  try {
    // Define o carregamento como true enquanto busca os dados

    // Chama o serviço de autenticação para obter a empresa pelo ID
    const empresa = await auth.empresaFindByname({ nome });

    // Retorna as informações da empresa recuperadas
    return empresa;
  } catch (error) {
    // Trata erros definindo o carregamento como false e relança o erro
    throw new Error(error);
  }
}
