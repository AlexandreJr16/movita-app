import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PerfilScreen from "../../screens/PerfilScreen";
import UpdatePerfil from "../../screens/PerfilScreen/UpdatePerfil";
import UpdateSenha from "../../screens/PerfilScreen/UpdateSenha";
import MeusProjetos from "../../screens/PerfilScreen/MeusProjetos";
import MeusFavoritos from "../../screens/PerfilScreen/MeusFavoritos";
import ShowProduct from "../../screens/ShowProduct";
import ShowEmpresaPerfil from "../../screens/ShowEmpresa";

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
      <Stack.Screen name="updatePerfil" component={UpdatePerfil} />
      <Stack.Screen name="updateSenha" component={UpdateSenha} />
      <Stack.Screen name="Perfil" component={ShowEmpresaPerfil} />
      <Stack.Screen name="meusFavoritos" component={MeusFavoritos} />
      <Stack.Screen name="meusProjetos" component={MeusProjetos} />
      <Stack.Screen name="Product" component={ShowProduct} />
    </Stack.Navigator>
  );
};

export default PerfilRoutes;
