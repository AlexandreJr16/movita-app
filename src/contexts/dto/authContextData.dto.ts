import { SignInResponse } from "./signInResponse.dto";
import { SignUpInfo } from "./signUpInfo.dto";
import { User } from "./user.dto";

export interface AuthContextData {
  signIn?(email: string, senha: string): Promise<SignInResponse>;
  signUp?(userInfo: SignUpInfo): any;
  logout?(): any;
  user?: User | null;
  signed?: boolean;
  token?: string;
  loading?: boolean;

  updateUser?(dto: {
    user?: any;
    cliente?: any;
    empresa?: any;
    endereco?: any;
  });
  updateSenha?(dto: {
    senhaAtual: string;
    novaSenha: string;
    confirmSenha: string;
  });
  getTopProjects?(num: number);
  getAllProjetosByCliente?(num: number);
  getRandomProjects?(num: number);
  getTopEmpresas?(num: number);
  getProject?(num: number);
  addImageUser?(dto: any);
  updateSenhaForgot?(dto: {
    email: string;
    confirmSenha: string;
    senha: string;
  });
  verifyCodeForgot?(dto: { code: string; email: string });
  sendEmailForgot?(dto: { to: string });
  deleteLikeProject?(projetoId: number);
  likeProject?(projetoId: number);
  getFavProjects?();
  getEmpresasById?(id: number);
  signupUser?: signupUser;
  setSignupUser?(user: signupUser);
  addModel?(doc: any);
}
