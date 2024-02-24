import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShowProduct from "../../screens/ShowPages/ShowProduct";
import ShowEmpresaPerfil from "../../screens/ShowPages/ShowEmpresa";
import PerfilScreen from "../../screens/TabPages/PerfilScreen";
import MeusFavoritos from "../../screens/TabPages/PerfilScreen/MeusFavoritos";
import MeusProjetos from "../../screens/TabPages/PerfilScreen/MeusProjetos";
import UpdatePerfil from "../../screens/TabPages/PerfilScreen/UpdatePerfil";
import UpdateSenha from "../../screens/TabPages/PerfilScreen/UpdateSenha";

const PerfilRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
        animationDuration: 500,
        animationTypeForReplace: "pop",
        animation: "fade_from_bottom",
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
