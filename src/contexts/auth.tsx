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
  message?: string;
  token?: string;
  user?: object;
  status: string;
};

interface User {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  tipo: string;
  endereco: { cidade: string; cep: string; estado: string; bairro: string };
  img: any;
}
interface AuthContextData {
  signIn(email: string, senha: string): Promise<SignInResponse>;
  signUp(userInfo: SignUpInfo): any;
  logout(): any;
  user: User | null;
  signed: boolean;
  token: string;
  loading: boolean;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [token, setToken] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  async function signIn(
    email: string,
    senha: string
  ): Promise<SignInResponse | any> {
    try {
      setLoading(true);
      const response = await auth.signIn(email, senha);
      if (response.token) {
        setToken(response.token);
        await getUser(response.token);
        setLoading(false);
      } else {
        setLoading(false);
        return response;
      }
    } catch (error) {
      setLoading(false);
    }
  }
  async function logout() {
    setUser(null);
  }

  async function signUp(userInfo: SignUpInfo) {
    try {
      setLoading(true);
      const response = await auth.signUp(userInfo);
    } catch (error) {
      console.error("Erro no cadastro:", error);
      setLoading(false);
    } finally {
      setLoading(false);
      setToken("Non-Resp-butCad");
    }
  }
  async function getUser(token: string): Promise<any> {
    try {
      const response = await auth.getUser(token);
      if (response.img) {
        setUser(response);
      }
    } catch (error) {
      throw Error("errado");
    }
  }
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signUp, token, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
