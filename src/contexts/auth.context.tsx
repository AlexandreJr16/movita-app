import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { AuthContextData } from "./dto/authContextData.dto";
import { SignUpInfo } from "./dto/signUpInfo.dto";
import * as authFunctions from "./functions/authFunctions";
import * as forgotFunctions from "./functions/forgotFunctions";
import * as modelo3d from "./functions/modelos3dFunctions";
import * as likeFunctions from "./functions/likeFunction";
import * as empresas from "./functions/empresaFunction";
import { SignInResponse } from "./dto/signInResponse.dto";
import { updateUserDTO } from "./dto/updateUser.dto";
import { UpdateSenhaForgotDTO } from "./dto/updateSenhaForgot.dto";
import { User } from "./dto/user.dto";
import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
SplashScreen.preventAutoHideAsync();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [token, setToken] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [signupUser, setSignupUser] = useState<signupUser>({} as signupUser);

  //Faz o carregamento dos Dados salvos localmente
  async function loadStorageData() {
    try {
      //Get dos dados guardados localmente relacionados ao Token e ao user
      const storageToken = await AsyncStorage.getItem("@RNAuth:token");
      const cachedUserData = await AsyncStorage.getItem("userData");

      if (storageToken && cachedUserData) {
        //Set do Token e User
        setToken(storageToken);
        setUser(JSON.parse(cachedUserData));
      }
    } catch (e) {
    } finally {
      await SplashScreen.hideAsync();
    }
  }

  //Executa ao APP ser renderizado inicalmente
  useEffect(() => {
    loadStorageData();
  }, []);

  // Funções auth --------------------------------------------------------------------------------------
  const signIn = async (
    email: string,
    senha: string
  ): Promise<SignInResponse> => {
    return await authFunctions.signIn(email, senha, setToken, setLoading);
  };

  const logout = async () => {
    return await authFunctions.logout(setUser);
  };

  const signUp = async (userInfo: SignUpInfo) => {
    return await authFunctions.signUp(userInfo, setLoading, setToken);
  };

  // Funções Empresas ----------------------------------------------------------------------------------------
  const getTopEmpresas = async (num: number) => {
    return await empresas.getTopEmpresas(num, setLoading);
  };
  const getEmpresasById = async (id: number) => {
    return await empresas.getEmpresaById(id, setLoading);
  };

  const findEmpresaByName = async (nome: string) => {
    return await empresas.findEmpresaByName(nome);
  };

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

  // Funções Like ---------------------------------------------------------------------------------------------
  const likeProject = async (projetoId: number) => {
    return await likeFunctions.likeProject(projetoId, token);
  };
  const deleteLikeProject = async (projetoId: number) => {
    return await likeFunctions.deleteLikeProject(projetoId, token);
  };
  const likeEmpresa = async (empresaId: number) => {
    return await likeFunctions.likeEmpresa(empresaId, token);
  };
  const deleteLikeEmpresa = async (empresaId: number) => {
    return await likeFunctions.deleteLikeEmpresa(empresaId, token);
  };

  // Funções Model ------------------------------------------------------------------------------------------------
  const addModel = async (dto: { modeloBin: string; projetoId: number }) => {
    return await modelo3d.addModelo(
      dto.modeloBin,
      dto.projetoId,
      token,
      setLoading
    );
  };
  const definirLoading = (value: boolean) => {
    setLoading(value);
  };
  const definirUser = (value: any) => {
    setUser(value);
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
    signupUser,
    setSignupUser,
    setLoading: definirLoading,
    setUser: definirUser,
  };
  const didLogin = {
    signed: signed,
    user: user,
    token: token,
    loading: loading,
    logout: logout,
    getTopEmpresas: getTopEmpresas,
    deleteLikeProject: deleteLikeProject,
    likeProject: likeProject,
    deleteLikeEmpresa: deleteLikeEmpresa,
    likeEmpresa: likeEmpresa,
    getEmpresasById: getEmpresasById,
    addModel: addModel,
    findEmpresasByName: findEmpresaByName,
    setLoading: definirLoading,
    setUser: definirUser,
  };

  return (
    <AuthContext.Provider
      value={
        signed ? (didLogin as AuthContextData) : (notSigned as AuthContextData)
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
