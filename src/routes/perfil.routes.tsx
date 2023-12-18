import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PerfilScreen from "../screens/PerfilScreen";
import Arrow from "../assents/Perfil/Arrow";
import LogoWhiteBlack from "../assents/Perfil/Logo";

const PerfilRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="main" component={PerfilScreen} />
    </Stack.Navigator>
  );
};

export default PerfilRoutes;
