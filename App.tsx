import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/main";
import React = require("react");

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
