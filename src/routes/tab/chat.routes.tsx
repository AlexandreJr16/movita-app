import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messaging from "../../screens/TabPages/ChatScreen/Messaging";
import Chat from "../../screens/TabPages/ChatScreen";
import AddRoomMessage from "../../screens/TabPages/ChatScreen/AddNewRoomMessage";
import RespondBriefing from "../../screens/TabPages/ChatScreen/RespondBriefing/RespondBriefing";

const ChatRoutes: React.FC = () => {
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
        animation: "fade_from_bottom",
        animationDuration: 1100,
        animationTypeForReplace: "pop",
      }}
    >
      <Stack.Screen name="Main" component={Chat} />
      <Stack.Screen name="Message" component={Messaging} />
      <Stack.Screen name="AddRoom" component={AddRoomMessage} />
      <Stack.Screen name="BriefingRespond" component={RespondBriefing} />
    </Stack.Navigator>
  );
};

export default ChatRoutes;
