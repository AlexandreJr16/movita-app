import { updateSenhaDTO } from "../../service/functions/dto/requestDTO";
import * as auth from "../../service/index";
import { UpdateSenhaForgotDTO } from "../dto/updateSenhaForgot.dto";

/**
 * Verifica o código enviado para recuperação de senha esquecida.
 * @param {Object} dto - Objeto contendo código e email.
 * @param {string} dto.code - Código de verificação.
 * @param {string} dto.email - Email associado à conta.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para o código verificado.
 */
export async function verifyCodeForgot(
  dto: {
    code: string;
    email: string;
  },
  setLoading
): Promise<any> {
  try {
    // Define o carregamento como true enquanto verifica o código
    setLoading(true);

    // Chama o serviço de autenticação para verificar o código esquecido
    const code = await auth.verificarCodigoForgot(dto);

    // Retorna o código verificado
    return code;
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
 * Atualiza a senha esquecida com base no DTO fornecido.
 * @param {UpdateSenhaForgotDTO} dto - DTO contendo informações para atualizar a senha esquecida.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para a senha atualizada.
 */
export async function updateSenhaForgot(
  dto: UpdateSenhaForgotDTO,
  setLoading
): Promise<any> {
  try {
    // Define o carregamento como true enquanto atualiza a senha esquecida
    setLoading(true);

    // Chama o serviço de autenticação para atualizar a senha esquecida
    const senha = await auth.updateSenhaForgot(dto);

    // Retorna a senha atualizada
    return senha;
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
 * Envia um email para o processo de recuperação de senha esquecida.
 * @param {Object} dto - Objeto contendo o destinatário do email.
 * @param {string} dto.to - Endereço de email do destinatário.
 * @param {Function} setLoading - Função para definir o estado de carregamento.
 * @returns {Promise<any>} - Promessa que resolve para o email enviado.
 */
export async function sendEmailForgot(
  dto: { to: string },
  setLoading
): Promise<any> {
  try {
    // Define o carregamento como true enquanto envia o email de recuperação
    setLoading(true);

    // Chama o serviço de autenticação para enviar o email de recuperação
    const email = await auth.enviarEmailForgot(dto);

    // Retorna o resultado do envio do email
    return email;
  } catch (error) {
    // Trata erros definindo o carregamento como false e relança o erro
    setLoading(false);
    throw new Error(error);
  } finally {
    // Garante que o carregamento seja definido como false independentemente do sucesso ou falha
    setLoading(false);
  }
}
