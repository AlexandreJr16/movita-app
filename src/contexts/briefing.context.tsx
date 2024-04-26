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

type BriefingContextData = {
  findBriefing(id: number);
};
const BriefingContext = createContext({} as BriefingContextData);

export const BriefingProvider = ({ children }) => {
  const { token, setLoading } = useContext(AuthContext);
  const findBriefing = async (id: number) => {
    return await briefingFuncs.findBriefing(id);
  };

  return (
    <BriefingContext.Provider value={{ findBriefing }}>
      {children}
    </BriefingContext.Provider>
  );
};
export default BriefingContext;
