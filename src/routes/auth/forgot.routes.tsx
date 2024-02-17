import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotScreen from "../../screens/ForgotPassword/index";
import CodeInputForgot from "../../screens/ForgotPassword/CodeInput";
import ChangePasswordForgot from "../../screens/ForgotPassword/ChangePassword";

const ForgotRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal", // Set the initial gesture direction
        fullScreenGestureEnabled: true,
        customAnimationOnGesture: true,
        animation: "slide_from_right", // Try a different animation type
        animationDuration: 1100, // Experiment with animation duration
        animationTypeForReplace: "pop",
      }}
    >
      <Stack.Screen name="Main" component={ForgotScreen} />
      <Stack.Screen name="CodeInput" component={CodeInputForgot} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordForgot} />
    </Stack.Navigator>
  );
};

export default ForgotRoutes;
