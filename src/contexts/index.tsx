import React, { createContext, useState } from "react";
import * as auth from "../service/index";
import {
  AuthContextData,
  User,
  SignInResponse,
  SignUpInfo,
  UpdateSenhaDTO,
} from "./dto/contextDTO";

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
  async function updateUser(dto: {
    user?: any;
    cliente?: any;
    empresa?: any;
    endereco?: any;
  }) {
    try {
      setLoading(true);
      const user = await auth.updateUser(dto, token);
      getUser(token);
      return user;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  async function updateSenha(dto: {
    senhaAtual: string;
    novaSenha: string;
    confirmSenha: string;
  }): Promise<UpdateSenhaDTO> {
    try {
      setLoading(true);
      const updateUser = await auth.updateSenha(dto, token);
      return updateUser;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  async function getTopProjects(num: number): Promise<any> {
    try {
      setLoading(true);
      const prods = await auth.getTopProjects(num);
      return prods;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  async function getAllProjetosByCliente(num: number): Promise<any> {
    try {
      setLoading(true);
      const prods = await auth.getAllProjetosByCliente(1);
      console.log(prods);
      return prods;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  const signed = !!user;
  return signed ? (
    <AuthContext.Provider
      value={{
        signed,
        user,
        token,
        loading,
        logout,
        updateUser,
        updateSenha,
        getTopProjects,
        getAllProjetosByCliente,
      }}
    >
      {children}
    </AuthContext.Provider>
  ) : (
    <AuthContext.Provider
      value={{
        signed,
        user,
        signIn,
        signUp,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
