import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import SignUpScreen from "../../screens/SignUpScreen";
import ForgotRoutes from "./forgot.routes";
import SignUpRoutes from "./signup";
import SplashScreen from "../../screens/splashScreen";
const Stack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUpRoutes} />
      <Stack.Screen name="Forgot" component={ForgotRoutes} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
