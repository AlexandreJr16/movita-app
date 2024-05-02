import React, { useContext } from "react";
import { createContext } from "react";
import * as projectsFunctions from "./functions/projectFunction";
import AuthContext from "./auth.context";
import * as projService from "../service/index";
import * as api from "../service/index";

type ProjetoContextData = {
  findProjetoByName(nome: string);
  getTopProjects(num: number);
  getAllProjetosByCliente();
  getRandomProjects(num: number);
  getProject(num: number);
  getFavProjects();
  addImageProj?(dto: { bin: any; id: number });
  findByNameProject?(dto: { value: string });
  findProjetoByUserCompany(dto: { clienteId: number; empresaId: number });
  createProjeto(dto: {
    users: { user1: number; user2: number };
    titulo: string;
    descricao: string;
  });
  findProjectById(dto: { id: number });
};

const ProjetoContext = createContext({} as ProjetoContextData);

export const ProjetoProvider = ({ children }) => {
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
  const addImageProj = async (dto: { bin: any; id: number }) => {
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
      }}
    >
      {children}
    </ProjetoContext.Provider>
  );
};
export default ProjetoContext;
