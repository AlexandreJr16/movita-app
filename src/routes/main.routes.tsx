import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/Login";
import MainScrenn from "../screens/MainScreen/MainScreen";
import ShowProduct from "../screens/ShowProduct";
import MyProjectsRoutes from "./my-projects.routes";

const MainRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={MainScrenn} />
      <Stack.Screen name="Product" component={ShowProduct} />
      <Stack.Screen name="MyProducts" component={MyProjectsRoutes} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
