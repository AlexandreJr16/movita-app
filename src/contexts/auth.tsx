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
  email: string;
  nome: string;
  sobrenome: string;
  telefone: string;
  tipo: string;
}
interface AuthContextData {
  signIn(email: string, senha: string): Promise<SignInResponse>;
  signUp(userInfo: SignUpInfo): any;
  user: User | null;
  signed: boolean;
  token: string;
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
      console.log(response.user);

      if (response.user && response.token) {
        setUser(response.user as User | null);
        setToken(response.token);
      } else return response;
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  async function signUp(userInfo: SignUpInfo) {
    try {
      const response = await auth.signUp(userInfo);
      //Tá aqui po
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
