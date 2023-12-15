import React, { createContext, useState } from "react";
import * as auth from "../service/auth";
import { Use } from "react-native-svg";

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
  tipo_usuario: string;
}

type SignInResponse = {
  message: string;
  token: string;
  user: object;
};

interface User {
  id: number;
  nome: string;
  email: string;
  tipo: string;
  endereco: any;
  imagem: any;
}
interface AuthContextData {
  signIn(email: string, senha: string): Promise<SignInResponse>;
  signUp(userInfo: SignUpInfo): any;
  user: User | null;
  signed: boolean;
  token: string;
  getUser: any;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [token, setToken] = useState<string>();

  async function signIn(
    email: string,
    senha: string
  ): Promise<SignInResponse | any> {
    try {
      const response = await auth.signIn(email, senha);
      if (response.token) {
        const baseUser = await getUser(response.token);
        if (baseUser.id) setUser(baseUser);

        setToken(response.token);
      } else return response;
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  async function signUp(userInfo: SignUpInfo) {
    try {
      const response = await auth.signUp(userInfo);
      if (response) {
        setToken("Non-Resp-butCad");
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
    }
  }
  async function getUser(token: string): Promise<any> {
    try {
      const response = await auth.getUser(token);
      return response;
    } catch (error) {
      throw Error("errado");
    }
  }
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signUp, token, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
