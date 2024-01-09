import React, { createContext, useState, useEffect } from "react";
import * as auth from "../service/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import {
  AuthContextData,
  User,
  SignInResponse,
  SignUpInfo,
  UpdateSenhaDTO,
} from "./dto/contextDTO";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
SplashScreen.preventAutoHideAsync();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [token, setToken] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@RNAuth:user");
      const storageToken = await AsyncStorage.getItem("@RNAuth:token");
      if (storageToken && storageUser) {
        setUser(JSON.parse(storageUser));
        setToken(storageToken);
        setLoading(false);
      }
      await SplashScreen.hideAsync();
      setLoading(false);
    }
    loadStorageData();
  }, []);

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
        await AsyncStorage.setItem("@RNAuth:token", response.token);
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
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
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
        await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response));
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
      return prods;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  async function getRandomProjects(num: number): Promise<any> {
    try {
      setLoading(true);
      const prods = await auth.getRandomProjects(num);
      return prods;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  async function getTopEmpresas(num: number): Promise<any> {
    try {
      setLoading(true);
      const empresas = await auth.getRandomEmpresas(num);
      return empresas;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  async function getProject(num: number): Promise<any> {
    try {
      setLoading(true);
      const projeto = await auth.getProject(num);
      return projeto;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  async function addImageUser(dto: any): Promise<any> {
    try {
      setLoading(true);
      const image = await auth.uploadImagemUser(dto, token);
      getUser(token);
      return image;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  async function verifyCodeForgot(dto: {
    code: string;
    email: string;
  }): Promise<any> {
    try {
      setLoading(true);
      const code = await auth.verificarCodigoForgot(dto);
      return code;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  async function updateSenhaForgot(dto: {
    email: string;
    confirmSenha: string;
    senha: string;
  }): Promise<any> {
    try {
      setLoading(true);
      const senha = await auth.updateSenhaForgot(dto);
      return senha;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  async function sendEmailForgot(dto: { to: string }): Promise<any> {
    try {
      setLoading(true);
      const email = await auth.enviarEmailForgot(dto);
      return email;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  async function likeProject(projetoId: number): Promise<any> {
    try {
      const email = await auth.likeProject(projetoId, token);
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  }

  async function deleteLikeProject(projetoId: number): Promise<any> {
    try {
      const email = await auth.deleteLikeProject(projetoId, token);
    } catch (error) {
      throw new Error(error);
    } finally {
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
        getRandomProjects,
        getTopEmpresas,
        getProject,
        addImageUser,
        deleteLikeProject,
        likeProject,
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
        updateSenhaForgot,
        sendEmailForgot,
        verifyCodeForgot,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
