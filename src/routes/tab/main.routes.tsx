import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import MainScrenn from "../../screens/MainScreen";
import ShowProduct from "../../screens/ShowProduct";
import MeusProjetosScreen from "../../screens/ProjetosSearch";
import EmpresasSearchScreen from "../../screens/EmpresasSearch";
import ShowAnotherPerfil from "../../screens/ShowEmpresa";
import ShowEmpresaPerfil from "../../screens/ShowEmpresa";
import ShowParseEmpresa from "../../screens/ShowEmpresa/ShowParseEmpresa";

const MainRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={MainScrenn} />
      <Stack.Screen name="Product" component={ShowProduct} />
      <Stack.Screen name="ParseEmpresa" component={ShowParseEmpresa} />
      <Stack.Screen name="PerfilEmpresa" component={ShowEmpresaPerfil} />
      <Stack.Screen name="ProjetoSearch" component={MeusProjetosScreen} />
      <Stack.Screen name="EmpresaSearch" component={EmpresasSearchScreen} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
