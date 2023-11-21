import React, { createContext, useState } from "react";
import * as auth from "../service/auth";

interface AuthContextData {
  signIn(email: string, senha: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState<object | null>(null);

  async function signIn(email: string, senha: string) {
    const response = await auth.signIn(email, senha);
    console.log(response);
    // setUser(response.user);
  }
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
