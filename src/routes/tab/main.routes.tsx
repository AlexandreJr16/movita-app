import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScrenn from "../../screens/MainScreen";
import ShowProduct from "../../screens/ShowPages/ShowProduct";
import MeusProjetosScreen from "../../screens/SearchTopics/ProjetosSearch";
import EmpresasSearchScreen from "../../screens/SearchTopics/EmpresasSearch";

import ShowModel from "../../screens/ShowPages/ShowModel";
import ShowParseEmpresa from "../../screens/ShowPages/ShowEmpresa/ShowParseEmpresa";
import ShowEmpresaPerfil from "../../screens/ShowPages/ShowEmpresa";

const MainRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="Main" component={MainScrenn} />
      <Stack.Screen name="Product" component={ShowProduct} />
      <Stack.Screen name="ParseEmpresa" component={ShowParseEmpresa} />
      <Stack.Screen name="PerfilEmpresa" component={ShowEmpresaPerfil} />
      <Stack.Screen name="ProjetoSearch" component={MeusProjetosScreen} />
      <Stack.Screen name="EmpresaSearch" component={EmpresasSearchScreen} />
      <Stack.Screen name="ModelShow" component={ShowModel} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
