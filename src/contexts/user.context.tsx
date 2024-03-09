import React, { createContext, useContext } from "react";
import AuthContext from "./auth.context";
import * as userFunctions from "./functions/userFunctions";
import { updateUserDTO } from "./dto/updateUser.dto";

type UserContextData = {
  getUser?(token: string);
  addImageUser?(dto: any);
  updateUser?(dto: updateUserDTO);
  updateSenha?(dto: {
    senhaAtual: string;
    novaSenha: string;
    confirmSenha: string;
  });
};
const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }) => {
  const { setLoading, setUser, token } = useContext(AuthContext);

  // Funções user --------------------------------------------------------------------------------------
  const getUser = async (token: string) => {
    return await userFunctions.getUser(token, setUser, setLoading);
  };

  const updateUser = async (dto: updateUserDTO) => {
    return await userFunctions.updateUser(dto, token, getUser, setLoading);
  };

  const addImageUser = async (dto: any) => {
    return await userFunctions.addImageUser(dto, token, setLoading, getUser);
  };

  const updateSenha = async (dto: any) => {
    return await userFunctions.updateSenha(dto, token, setLoading);
  };

  return (
    <UserContext.Provider
      value={{ getUser, addImageUser, updateSenha, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
