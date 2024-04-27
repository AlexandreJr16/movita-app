import React, { createContext, useState, useEffect, useContext } from "react";
import {
  getAllProjetosByCliente,
  getRandomProjects,
  addImageProj,
  findProjetoByUserCompany,
} from "../service";
import AuthContext from "./auth.context";
import { findProjetoByName, getFavProjects } from "./functions/projectFunction";
import * as briefingFuncs from "../service/index";

export type UpdateQuestionDTO = {
  briefingId: number;
  id: number;
  response: string;
  text: string;
};
export type UpdateBriefingDTO = {
  id: number;
  title: string;
  answered: boolean;
  question: UpdateQuestionDTO[];
};

type BriefingContextData = {
  findBriefing(id: number);
  updateBriefing(id: number, dto: UpdateBriefingDTO);
};
const BriefingContext = createContext({} as BriefingContextData);

export const BriefingProvider = ({ children }) => {
  const { token, setLoading } = useContext(AuthContext);
  const findBriefing = async (id: number) => {
    return await briefingFuncs.findBriefing(id);
  };
  const updateBriefing = async (id: number, dto: UpdateBriefingDTO) => {
    return await briefingFuncs.updateBriefing(id, dto);
  };

  return (
    <BriefingContext.Provider value={{ findBriefing, updateBriefing }}>
      {children}
    </BriefingContext.Provider>
  );
};
export default BriefingContext;
