import React, { createContext, useState } from "react";
import * as auth from "../service/auth";

interface SignUpInfo {
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
}

type SignInResponse = {
  message: string;
  token: string;
  user: object;
};

interface AuthContextData {
  signIn(email: string, senha: string): Promise<SignInResponse>;
  signUp(userInfo: SignUpInfo): Promise<void>;
  user: object | null;
  signed: boolean;
  token: string;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string>();

  async function signIn(
    email: string,
    senha: string
  ): Promise<SignInResponse | any> {
    try {
      const response = await auth.signIn(email, senha);

      if (response.user && response.token) {
        setUser(response.user);
        setToken(response.token);
      } else return response;
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  async function signUp(userInfo: SignUpInfo) {
    try {
      const response = await auth.signUp(userInfo);
      console.log(response);
    } catch (error) {
      console.error("Erro no cadastro:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signUp, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
