import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/splashScreen/SplashScreen";
import Login from "../screens/Login/Login";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ForgotScreen from "../screens/ForgotPassword";
import ForgotRoutes from "./forgot.routes";
const Stack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Forgot" component={ForgotRoutes} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
