import React, { createContext, useState } from "react";
import * as auth from "../service/auth";

interface AuthContextData {
  signIn(email: string, senha: string): Promise<void>;
  user: object | null;
  signed: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn(email: string, senha: string) {
    const response = await auth.signIn(email, senha);
    setUser(response.user);
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
