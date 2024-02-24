import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/AuthPages/Login";
import ForgotRoutes from "./forgot.routes";
import SignUpRoutes from "./signup";
import SplashRoutes from "./splash.routes";

const Stack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal", // Set the initial gesture direction
        fullScreenGestureEnabled: true,
        customAnimationOnGesture: true,
        animation: "fade_from_bottom",
        animationDuration: 1100,
        animationTypeForReplace: "pop",
      }}
    >
      <Stack.Screen name="Splash" component={SplashRoutes} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUpRoutes} />
      <Stack.Screen name="Forgot" component={ForgotRoutes} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
