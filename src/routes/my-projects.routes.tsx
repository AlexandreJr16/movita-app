import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PerfilScreen from "../screens/PerfilScreen";
import Arrow from "../assents/Perfil/Arrow";
import LogoWhiteBlack from "../assents/Perfil/Logo";
import UpdatePerfil from "../screens/PerfilScreen/UpdatePerfil";
import UpdateSenha from "../screens/PerfilScreen/UpdateSenha";
import MeusProjetos from "../screens/PerfilScreen/MeusProjetos";
import MeusFavoritos from "../screens/PerfilScreen/MeusFavoritos";
import ShowProduct from "../screens/ShowProduct";
import MeusProjetosScreen from "../screens/MeusProjetos";

const MyProjectsRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="main" component={MeusProjetosScreen} />
    </Stack.Navigator>
  );
};

export default MyProjectsRoutes;
