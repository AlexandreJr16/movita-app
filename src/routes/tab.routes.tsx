import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainRoutes from "./main.routes";
import ChatScreen from "../screens/ChatScreen";
import SearchScreen from "../screens/SearchScreen";
import PerfilScreen from "../screens/PerfilScreen";
import Home from "../assents/NavBar/NoSelected/Home";
import Message from "../assents/NavBar/NoSelected/Message";
import Perfil from "../assents/NavBar/NoSelected/Perfil";
import Search from "../assents/NavBar/NoSelected/Search";
import React from "react";
import MessageSelected from "../assents/NavBar/Selected/SelectedMessage";
import SearchSelected from "../assents/NavBar/Selected/SelectedSearch";
import PerfilSelected from "../assents/NavBar/Selected/SelectedPerfil";
import HomeSelected from "../assents/NavBar/Selected/SelectedHome";
import PerfilRoutes from "./perfil.routes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="main"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabel: () => null,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "main") {
            iconName = focused ? <HomeSelected /> : <Home />;
          } else if (route.name === "chat") {
            iconName = focused ? <MessageSelected /> : <Message />;
          } else if (route.name === "search") {
            iconName = focused ? <SearchSelected /> : <Search />;
          } else if (route.name === "perfil") {
            iconName = focused ? <PerfilSelected /> : <Perfil />;
          }

          return iconName;
        },
      })}
    >
      <Tab.Screen name="main" component={MainRoutes}></Tab.Screen>
      <Tab.Screen name="chat" component={ChatScreen}></Tab.Screen>
      <Tab.Screen name="search" component={SearchScreen}></Tab.Screen>
      <Tab.Screen name="perfil" component={PerfilRoutes}></Tab.Screen>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#151515",
    height: "7%",
    paddingBottom: "3%",
    borderColor: "#151515",
  },
  tabBarItem: {},
});
