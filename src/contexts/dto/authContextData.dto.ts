import { SignInResponse } from "./signInResponse.dto";
import { SignUpInfo } from "./signUpInfo.dto";
import { updateUserDTO } from "./updateUser.dto";
import { User } from "./user.dto";

export interface AuthContextData {
  signIn(email?: string, senha?: string): Promise<SignInResponse>;
  signUp(userInfo: SignUpInfo): any;
  logout(): any;
  user: User | null;
  signed: boolean;
  token: string;
  loading: boolean;

  getTopEmpresas: (num: number) => any;

  updateSenhaForgot: (dto: {
    email?: string;
    confirmSenha?: string;
    senha?: string;
  }) => any;
  verifyCodeForgot: (dto: { code: string; email: string }) => any;
  sendEmailForgot: (dto: { to: string }) => any;
  deleteLikeProject: (projetoId: number) => any;
  likeProject: (projetoId: number) => any;
  likeEmpresa: (empresaId: number) => any;
  deleteLikeEmpresa: (empresaId: number) => any;
  getEmpresasById: (id: number) => any;
  signupUser: signupUser;
  setSignupUser: (user: signupUser) => any;
  addModel: (doc: any) => any;
  findEmpresasByName: (
    nome: string
  ) => Promise<{ id: number; imagem: any; nome: string }[]>;
  findProjetoByName: (nome: string) => any;
  setLoading: () => any;
  setUser: () => any;
}
