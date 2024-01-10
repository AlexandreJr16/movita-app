import { updateSenhaDTO } from "../../service/functions/dto/requestDTO";
import * as auth from "../../service/index";
import { UpdateSenhaForgotDTO } from "../dto/updateSenhaForgot.dto";

export async function verifyCodeForgot(
  dto: {
    code: string;
    email: string;
  },
  setLoading
): Promise<any> {
  try {
    setLoading(true);
    const code = await auth.verificarCodigoForgot(dto);
    return code;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
}
export async function updateSenhaForgot(
  dto: UpdateSenhaForgotDTO,
  setLoading
): Promise<any> {
  try {
    setLoading(true);
    const senha = await auth.updateSenhaForgot(dto);
    return senha;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
}
export async function sendEmailForgot(
  dto: { to: string },
  setLoading
): Promise<any> {
  try {
    setLoading(true);
    const email = await auth.enviarEmailForgot(dto);
    return email;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
}
