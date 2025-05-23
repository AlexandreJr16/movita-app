import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../../screens/AuthPages/SignUpScreen";
import SignUpScreen2 from "../../screens/AuthPages/SignUpScreen/Cliente/CadastroPage2";
import SignUpScreen3 from "../../screens/AuthPages/SignUpScreen/Cliente/CadastroPage3";
import SignUpScreen4 from "../../screens/AuthPages/SignUpScreen/Cliente/CadastroPage4";
import SignUpScreen5 from "../../screens/AuthPages/SignUpScreen/Cliente/CadastroPage5";
import SignUpScreen6 from "../../screens/AuthPages/SignUpScreen/Cliente/CadastroPage6";

const SignUpRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="signup"
      screenOptions={{
        headerShown: false,

        animation: "simple_push",
        animationDuration: 100,
      }}
    >
      <Stack.Screen name="signup" component={SignUpScreen} />
      <Stack.Screen name="signup2" component={SignUpScreen2} />
      <Stack.Screen name="signup3" component={SignUpScreen3} />
      <Stack.Screen name="signup4" component={SignUpScreen4} />
      <Stack.Screen name="signup5" component={SignUpScreen5} />
      <Stack.Screen name="signup6" component={SignUpScreen6} />
    </Stack.Navigator>
  );
};

export default SignUpRoutes;
