import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../../screens/TabPages/SearchScreen";

const SearchRoutes: React.FC = () => {
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
      <Stack.Screen name="main" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default SearchRoutes;
