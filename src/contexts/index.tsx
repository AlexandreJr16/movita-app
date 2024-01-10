import React, { createContext, useState, useEffect } from "react";
import * as auth from "../service/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { useAuth } from "./providersContext";
import { AuthContextData } from "./dto/authContextData.dto";
import { SignUpInfo } from "./dto/signUpInfo.dto";
import { UpdateSenhaDTO } from "./dto/updateSenha.dto";
import * as authFunctions from "./functions/authFunctions";
import * as userFunctions from "./functions/userFunctions";
import * as forgotFunctions from "./functions/forgotFunctions";
import * as likeFunctions from "./functions/likeFunction";
import * as projectsFunctions from "./functions/projectFunction";
import { SignInResponse } from "./dto/signInResponse.dto";
import { updateUserDTO } from "./dto/updateUser.dto";
import { UpdateSenhaForgotDTO } from "./dto/updateSenhaForgot.dto";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
SplashScreen.preventAutoHideAsync();

export const AuthProvider = ({ children }) => {
  const { user, token, loading, setUser, setToken, setLoading } = useAuth();

  useEffect(() => {
    loadStorageData();
  }, []);

  // Função permanência do usuário
  const loadStorageData = async () => {
    const storageUser = await AsyncStorage.getItem("@RNAuth:user");
    const storageToken = await AsyncStorage.getItem("@RNAuth:token");
    if (storageToken && storageUser) {
      setUser(JSON.parse(storageUser));
      setToken(storageToken);
      setLoading(false);
    }
    await SplashScreen.hideAsync();
    setLoading(false);
  };

  // Funções auth --------------------------------------------------------------------------------------
  const signIn = async (
    email: string,
    senha: string
  ): Promise<SignInResponse> => {
    return await authFunctions.signIn(
      email,
      senha,
      setToken,
      getUser,
      setLoading
    );
  };

  const logout = async () => {
    return await authFunctions.logout(setUser);
  };

  const signUp = async (userInfo: SignUpInfo) => {
    return await authFunctions.signUp(userInfo, setLoading, setToken);
  };

  // Funções user --------------------------------------------------------------------------------------
  const getUser = async (token: string) => {
    return await userFunctions.getUser(token, setUser, setLoading);
  };

  const updateUser = async (dto: updateUserDTO) => {
    return await userFunctions.updateUser(dto, token, getUser, setLoading);
  };

  const addImageUser = async (dto: any) => {
    return await userFunctions.addImageUser(dto, token, setLoading, setUser);
  };

  const updateSenha = async (dto: any) => {
    return await userFunctions.updateSenha(dto, token, setLoading);
  };

  // Funções Projeto  -----------------------------------------------------------------------------------
  const getTopProjects = async (num: number) => {
    return await projectsFunctions.getTopProjects(num, setLoading);
  };

  const getProject = async (num: number) => {
    return await projectsFunctions.getProject(num, setLoading);
  };

  const getAllProjetosByCliente = async (num: number) => {
    return await projectsFunctions.getAllProjetosByCliente(num, setLoading);
  };
  const getRandomProjects = async (num: number) => {
    return await projectsFunctions.getRandomProjects(num, setLoading);
  };
  const getFavProjects = async () => {
    return await projectsFunctions.getFavProjects(token, setLoading);
  };

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
  // Funções Forgot Password  ---------------------------------------------------------------------------------
  const verifyCodeForgot = async (dto: { code: string; email: string }) => {
    return await forgotFunctions.verifyCodeForgot(dto, setLoading);
  };
  const updateSenhaForgot = async (dto: UpdateSenhaForgotDTO) => {
    return await forgotFunctions.updateSenhaForgot(dto, setLoading);
  };
  const sendEmailForgot = async (dto: { to: string }) => {
    return await forgotFunctions.sendEmailForgot(dto, setLoading);
  };

  const likeProject = async (projetoId: number) => {
    return await likeFunctions.likeProject(projetoId, token);
  };
  const deleteLikeProject = async (projetoId: number) => {
    return await likeFunctions.deleteLikeProject(projetoId, token);
  };

  const signed = !!user;
  const notSigned = {
    signed,
    user,
    signIn,
    signUp,
    loading,
    updateSenhaForgot,
    sendEmailForgot,
    verifyCodeForgot,
  };
  const didLogin = {
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
    getFavProjects,
  };

  return (
    <AuthContext.Provider value={signed ? didLogin : notSigned}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
