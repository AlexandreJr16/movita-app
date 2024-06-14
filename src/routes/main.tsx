import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts/auth.context";
import AuthRoutes from "./auth/auth.routes";
import TabRoutes from "./tab.routes";

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  /* return signed ? <AppRoutes /> : <AuthRoutes />; */
  return signed ? <TabRoutes /> : <AuthRoutes />; //rota alterada para não precisar de autenticação para ida ao menu
};
export default Routes;
