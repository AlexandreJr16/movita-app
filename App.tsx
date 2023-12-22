import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/main";
import { AuthProvider } from "./src/contexts";
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
