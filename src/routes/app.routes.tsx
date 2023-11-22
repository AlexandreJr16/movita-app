import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/Login";
import MainScrenn from "../screens/MainScreen/MainScree";

const AppRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={MainScrenn} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
