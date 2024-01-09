export type SignUpInfo = {
  email: string;
  senha: string;
  nome: string;
  telefone: string;
  cpf: string;
  sexo: string;
  nascimento: string;
  cep: string;
  estado: string;
  bairro: string;
  cidade: string;
  tipo_usuario: string;
};

export type SignInResponse = {
  message?: string;
  token?: string;
  user?: object;
  status: string;
};
export type UpdateSenhaDTO = {
  message?: string;
  status: string;
  user?: any;
};

export interface User {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  tipo: string;
  endereco: { cidade: string; cep: string; estado: string; bairro: string };
  img: any;
}
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
}
