import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotScreen from "../../screens/AuthPages/ForgotPassword/index";
import CodeInputForgot from "../../screens/AuthPages/ForgotPassword/CodeInput";
import ChangePasswordForgot from "../../screens/AuthPages/ForgotPassword/ChangePassword";

const ForgotRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Main" component={ForgotScreen} />
      <Stack.Screen name="CodeInput" component={CodeInputForgot} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordForgot} />
    </Stack.Navigator>
  );
};

export default ForgotRoutes;
