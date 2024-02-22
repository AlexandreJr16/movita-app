import "react-native-gesture-handler";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../../screens/Auth/splashScreen";
import SplashScreen2 from "../../screens/Auth/splashScreen/Page2";
import SplashScreen3 from "../../screens/Auth/splashScreen/Page3";

const SplashRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        animation: "fade",
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Main" component={SplashScreen} />
      <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
      <Stack.Screen name="SplashScreen3" component={SplashScreen3} />
    </Stack.Navigator>
  );
};

export default SplashRoutes;
