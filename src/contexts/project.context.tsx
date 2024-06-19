import React, { useContext } from "react";
import { createContext } from "react";
import * as projectsFunctions from "./functions/projectFunction";
import AuthContext from "./auth.context";
import * as projService from "../service/index";
import * as api from "../service/index";

type ProjetoContextData = {
  findProjetoByName: (nome: string) => any;
  getTopProjects: (num: number) => any;
  getAllProjetosByCliente: () => any;
  getRandomProjects: (num: number) => any;
  getProject: (num: number) => any;
  getFavProjects: () => any;
  addImageProj: (dto?: { bin?: any; id?: number }) => any;
  findByNameProject: (dto: { value: string }) => any;
  findProjetoByUserCompany: (dto: {
    clienteId: number;
    empresaId: number;
  }) => any;
  createProjeto: (dto: {
    users: { user1: number; user2: number };
    titulo: string;
    descricao: string;
  }) => any;
  findProjectById: (dto: { id: number }) => any;
  findProjectPagination: (dto: { page: number; limit: number }) => any;
};

const ProjetoContext = createContext({} as ProjetoContextData);

export const ProjetoProvider = ({ children }: any) => {
  const { token, setLoading } = useContext(AuthContext);

  const createProjeto = async (dto: {
    users: { user1: number; user2: number };
    titulo: string;
    descricao: string;
  }) => {
    return await projService.createProjeto(dto);
  };
  const findProjectById = async (dto: { id: number }) => {
    return await api.findProjectById(dto);
  };

  const getTopProjects = async (num: number) => {
    return await projectsFunctions.getTopProjects(num, setLoading);
  };

  const getProject = async (num: number) => {
    return await projectsFunctions.getProject(num, setLoading);
  };

  const getAllProjetosByCliente = async () => {
    return await projectsFunctions.getAllProjetosByCliente(token, setLoading);
  };
  const getRandomProjects = async (num: number) => {
    return await projectsFunctions.getRandomProjects(num, setLoading);
  };

  const getFavProjects = async () => {
    return await projectsFunctions.getFavProjects(token, setLoading);
  };
  const addImageProj = async (dto?: { bin?: any; id?: number }) => {
    return await projectsFunctions.addImageProj(dto, token);
  };
  const findProjetoByName = async (nome: string) => {
    return await projectsFunctions.findProjetoByName({ nome });
  };
  const findByNameProject = async (dto: { value: string }) => {
    return await projectsFunctions.findByNameProjeto(dto);
  };
  const findProjetoByUserCompany = async (dto: {
    clienteId: number;
    empresaId: number;
  }) => {
    return await projectsFunctions.findProjetoByUserCompany(dto);
  };
  const findProjectPagination = async (dto: {
    page: number;
    limit: number;
  }) => {
    const { limit, page } = dto;
    return await api.findProjectsPagination({ page, limit });
  };

  return (
    <ProjetoContext.Provider
      value={{
        findProjetoByName,
        getAllProjetosByCliente,
        getProject,
        getRandomProjects,
        getTopProjects,
        getFavProjects,
        addImageProj,
        findByNameProject,
        findProjetoByUserCompany,
        createProjeto,
        findProjectById,
        findProjectPagination,
      }}
    >
      {children}
    </ProjetoContext.Provider>
  );
};
export default ProjetoContext;
