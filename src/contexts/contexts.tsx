import React from "react";
import { AuthProvider } from "./auth.context";
import { ProjetoProvider } from "./project.context";
import UserContext, { UserProvider } from "./user.context";

const Contexts = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <ProjetoProvider>{children}</ProjetoProvider>
      </UserProvider>
    </AuthProvider>
  );
};
export default Contexts;
