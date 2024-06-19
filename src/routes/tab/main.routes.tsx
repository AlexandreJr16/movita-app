import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScrenn from "../../screens/TabPages/MainScreen";
import ShowProduct from "../../screens/ShowPages/ShowProduct";

import ShowModel from "../../screens/ShowPages/ShowModel";
import ShowEmpresaPerfil from "../../screens/ShowPages/ShowEmpresa";
import MeusProjetosScreen from "../../screens/SearchPages/ProjetosSearch";
import EmpresasSearchScreen from "../../screens/SearchPages/EmpresasSearch";
import ModelosSearch from "../../screens/SearchPages/ModeloSearch";
import SeeMoreEmpresas from "../../screens/ShowPages/SeeMore/SeeMoreEmpresas";
import SeeMoreProducts from "../../screens/ShowPages/SeeMore/SeeMoreProducts";

const MainRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Main" component={MainScrenn} />
      <Stack.Screen name="Product" component={ShowProduct} />
      <Stack.Screen name="PerfilEmpresa" component={ShowEmpresaPerfil} />
      <Stack.Screen name="ProjetoSearch" component={MeusProjetosScreen} />
      <Stack.Screen name="EmpresaSearch" component={EmpresasSearchScreen} />
      <Stack.Screen name="ModelSearch" component={ModelosSearch} />
      <Stack.Screen name="ModelShow" component={ShowModel} />
      <Stack.Screen name="SeeMoreProduct" component={SeeMoreProducts} />
      <Stack.Screen name="SeeMoreEmpresa" component={SeeMoreEmpresas} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
