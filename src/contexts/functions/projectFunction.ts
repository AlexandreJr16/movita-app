import * as auth from "../../service/index";

/**
 * Obtém os projetos favoritos do usuário.
 * @param {string} token - Token de autenticação.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para os projetos favoritos.
 */
export async function getFavProjects(token, setLoading): Promise<any> {
  try {
    // Define o carregamento como true enquanto obtém os projetos favoritos
    setLoading(true);

    // Chama o serviço de autenticação para obter os projetos favoritos
    const projeto = await auth.getFavProject(token);

    // Retorna os projetos favoritos
    return projeto;
  } catch (error) {
    // Em caso de erro, define o carregamento como false e relança o erro
    setLoading(false);
    throw new Error(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
}

/**
 * Obtém informações de um projeto pelo ID.
 * @param {number} num - ID do projeto a ser recuperado.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para as informações do projeto.
 */
export async function getProject(num: number, setLoading): Promise<any> {
  try {
    // Define o carregamento como true enquanto obtém informações do projeto
    setLoading(true);

    // Chama o serviço de autenticação para obter informações do projeto
    const projeto = await auth.getProject(num);

    // Retorna as informações do projeto
    return projeto;
  } catch (error) {
    // Em caso de erro, define o carregamento como false e relança o erro
    setLoading(false);
    throw new Error(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
}

/**
 * Obtém os principais projetos com um número específico.
 * @param {number} num - Número de principais projetos a serem recuperados.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para os principais projetos.
 */
export async function getTopProjects(num: number, setLoading): Promise<any> {
  try {
    // Define o carregamento como true enquanto obtém os principais projetos
    setLoading(true);

    // Chama o serviço de autenticação para obter os principais projetos
    const prods = await auth.getTopProjects(num);

    // Retorna os principais projetos
    return prods;
  } catch (error) {
    // Em caso de erro, define o carregamento como false e relança o erro
    setLoading(false);
    throw new Error(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
}

/**
 * Obtém todos os projetos associados a um cliente.
 * @param {string} token - Token de autenticação do cliente.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para os projetos associados ao cliente.
 */
export async function getAllProjetosByCliente(
  token: string,
  setLoading
): Promise<any> {
  try {
    // Define o carregamento como true enquanto obtém todos os projetos do cliente
    setLoading(true);

    // Chama o serviço de autenticação para obter todos os projetos do cliente
    const prods = await auth.getAllProjetosByCliente(token);

    // Retorna todos os projetos associados ao cliente
    return prods;
  } catch (error) {
    // Em caso de erro, define o carregamento como false e relança o erro
    setLoading(false);
    throw new Error(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
}

/**
 * Obtém projetos aleatórios com um número específico.
 * @param {number} num - Número de projetos aleatórios a serem recuperados.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para projetos aleatórios.
 */
export async function getRandomProjects(num: number, setLoading): Promise<any> {
  try {
    // Define o carregamento como true enquanto obtém projetos aleatórios
    setLoading(true);

    // Chama o serviço de autenticação para obter projetos aleatórios
    const prods = await auth.getRandomProjects(num);

    // Retorna projetos aleatórios
    return prods;
  } catch (error) {
    // Em caso de erro, define o carregamento como false e relança o erro
    setLoading(false);
    throw new Error(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
}

/**
 * Adiciona uma imagem a um projeto.
 * @param {Object} dto - Objeto contendo dados da imagem e ID do projeto.
 * @param {any} dto.bin - Representação binária da imagem.
 * @param {number} dto.id - ID do projeto ao qual a imagem será adicionada.
 * @param {string} token - Token de autenticação.
 * @returns {Promise<any>} - Promessa que resolve para o resultado da adição da imagem.
 */
export async function addImageProj(
  dto: { bin: any; id: number },
  token: string
): Promise<any> {
  try {
    // Chama o serviço de autenticação para adicionar a imagem ao projeto
    const prods = await auth.addImageProj(token, dto);

    // Retorna o resultado da adição da imagem
    return prods;
  } catch (error) {
    // Em caso de erro, lança uma exceção
    throw new Error(error);
  } finally {
    // O bloco `finally` é opcional e pode ser omitido se não houver código a ser executado após o bloco `try` ou `catch`
    // Pode ser usado para código que precisa ser executado independentemente de ocorrer uma exceção ou não
  }
}

export async function findProjetoByName(dto: { nome: string }) {
  try {
    const { nome } = dto;
    const prods = await auth.projetoFindByname({ nome });
    console.log(prods);
    return prods;
  } catch (error) {
    throw new Error(error);
  }
}
