import React from "react";
import { AuthProvider } from "./auth.context";
import { ProjetoProvider } from "./project.context";

const Contexts = ({ children }) => {
  return (
    <AuthProvider>
      <ProjetoProvider>{children}</ProjetoProvider>
    </AuthProvider>
  );
};
export default Contexts;
