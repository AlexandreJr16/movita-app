import { SignInResponse } from "./signInResponse.dto";
import { SignUpInfo } from "./signUpInfo.dto";
import { updateUserDTO } from "./updateUser.dto";
import { User } from "./user.dto";

export interface AuthContextData {
  signIn?(email: string, senha: string): Promise<SignInResponse>;
  signUp?(userInfo: SignUpInfo): any;
  logout?(): any;
  user?: User | null;
  signed?: boolean;
  token?: string;
  loading?: boolean;

  updateUser?(dto: updateUserDTO);
  updateSenha?(dto: {
    senhaAtual: string;
    novaSenha: string;
    confirmSenha: string;
  });

  getTopEmpresas?(num: number);
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
  likeEmpresa?(empresaId: number);
  deleteLikeEmpresa?(empresaId: number);
  getEmpresasById?(id: number);
  signupUser?: signupUser;
  setSignupUser?(user: signupUser);
  addModel?(doc: any);
  findEmpresasByName?(
    nome: string
  ): Promise<{ id: number; imagem: any; nome: string }[]>;
  findProjetoByName?(nome: string);
  setLoading?();
}
