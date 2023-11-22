import React, { createContext, useState } from "react";
import * as auth from "../service/auth";

interface AuthContextData {
  signIn(email: string, senha: string): Promise<void>;
  signUp(userInfo: SignUpInfo): Promise<void>;
  user: object | null;
  signed: boolean;
}

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

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn(email: string, senha: string) {
    try {
      const response = await auth.signIn(email, senha);
      setUser(response.user);
    } catch (error) {
      // Lide com erros de login, se necessário
      console.error("Erro no login:", error);
    }
  }

  async function signUp(userInfo: SignUpInfo) {
    try {
      const response = await auth.signUp(userInfo);
    } catch (error) {
      console.error("Erro no cadastro:", error);
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
