import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import MainScrenn from "../../screens/MainScreen";
import ShowProduct from "../../screens/ShowProduct";
import Chat from "../../screens/ChatScreen";
import Messaging from "../../screens/ChatScreen/Messaging";

const ChatRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Chat} />
      <Stack.Screen name="Message" component={Messaging} />
    </Stack.Navigator>
  );
};

export default ChatRoutes;
