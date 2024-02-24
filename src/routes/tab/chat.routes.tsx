import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messaging from "../../screens/TabPages/ChatScreen/Messaging";
import Chat from "../../screens/TabPages/ChatScreen";

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
