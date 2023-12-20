import { StyleSheet, View, Platform } from "react-native";
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
    <View
      style={
        Platform.OS === "ios" ? styles.containerIOS : styles.containerAndroid
      }
    >
      <Tab.Navigator
        initialRouteName="main"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle:
            Platform.OS === "ios" ? styles.tabBarIOS : styles.tabBarAndroid,
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
          tabBarIconStyle:
            Platform.OS === "ios" ? styles.iconAndroid : styles.iconIOS,
        })}
      >
        <Tab.Screen name="main" component={MainRoutes}></Tab.Screen>
        <Tab.Screen name="chat" component={ChatScreen}></Tab.Screen>
        <Tab.Screen name="search" component={SearchScreen}></Tab.Screen>
        <Tab.Screen name="perfil" component={PerfilRoutes}></Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAndroid: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#151515",
  },
  tabBarAndroid: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#151515",
    width: "100%",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    height: 70,
    padding: 0,
    marginBottom: 0,
    elevation: 0,
  },
  iconAndroid: {
    marginBottom: 23,
  },
  containerIOS: {},
  tabBarIOS: {},
  iconIOS: {},
});
