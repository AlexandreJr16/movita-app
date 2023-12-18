import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "../screens/MainScreen/MainScreen";
import ChatScreen from "../screens/ChatScreen";
import SearchScreen from "../screens/SearchScreen";
import PerfilScreen from "../screens/PerfilScreen";
import Home from "../assents/NavBar/NoSelected/Home";
import Message from "../assents/NavBar/NoSelected/Message";
import Perfil from "../assents/NavBar/NoSelected/Perfil";
import Search from "../assents/NavBar/NoSelected/Search";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="main"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="main"
        component={MainScreen}
        options={{ tabBarIcon: () => <Home /> }}
      ></Tab.Screen>
      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{ tabBarIcon: () => <Message /> }}
      ></Tab.Screen>
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{ tabBarIcon: () => <Search /> }}
      ></Tab.Screen>
      <Tab.Screen
        name="perfil"
        component={PerfilScreen}
        options={{ tabBarIcon: () => <Perfil /> }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
