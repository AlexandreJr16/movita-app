import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/main";
import AuthContext, { AuthProvider } from "./src/contexts/auth";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
