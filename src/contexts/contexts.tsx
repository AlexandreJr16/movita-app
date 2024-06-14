import React from "react";
import { AuthProvider } from "./auth.context";
import { ProjetoProvider } from "./project.context";
import UserContext, { UserProvider } from "./user.context";
import { BriefingProvider } from "./briefing.context";

const Contexts = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <BriefingProvider>
          <ProjetoProvider>{children}</ProjetoProvider>
        </BriefingProvider>
      </UserProvider>
    </AuthProvider>
  );
};
export default Contexts;
