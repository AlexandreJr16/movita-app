import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainRoutes from "./tab/main.routes";
import ChatScreen from "../screens/ChatScreen";
import SearchScreen from "../screens/TabPages/SearchScreen";
import PerfilScreen from "../screens/PerfilScreen";
import Home from "../assents/NavBar/NoSelected/Home";
import Message from "../assents/NavBar/NoSelected/Message";
import Perfil from "../assents/NavBar/NoSelected/Perfil";
import Search from "../assents/NavBar/NoSelected/Search";
import MessageSelected from "../assents/NavBar/Selected/SelectedMessage";
import SearchSelected from "../assents/NavBar/Selected/SelectedSearch";
import PerfilSelected from "../assents/NavBar/Selected/SelectedPerfil";
import HomeSelected from "../assents/NavBar/Selected/SelectedHome";
import PerfilRoutes from "./tab/perfil.routes";
import ChatRoutes from "./tab/chat.routes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const isIos = Platform.OS === "ios";

  return isIos ? (
    <View style={[styles.outBar, styles.containerIOS]}>{renderContent()}</View>
  ) : (
    renderContent()
  );

  function renderContent() {
    return (
      <View style={styles.container}>
        <Tab.Navigator
          initialRouteName="main"
          screenOptions={({ route }) => ({
            lazy: true,
            headerShown: false,
            tabBarStyle: isIos ? styles.tabBarIOS : styles.tabBarAndroid,
            tabBarItemStyle: isIos
              ? styles.tabBarItemIOS
              : styles.tabBarItemAndroid,
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
          <Tab.Screen name="chat" component={ChatRoutes}></Tab.Screen>
          <Tab.Screen name="search" component={SearchScreen}></Tab.Screen>
          <Tab.Screen name="perfil" component={PerfilRoutes}></Tab.Screen>
        </Tab.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outBar: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    paddingBottom: 35,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerAndroid: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#151515",
  },
  containerIOS: {
    flex: 1,
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
  tabBarIOS: {
    backgroundColor: "#151515",
    width: "100%",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  tabBarItemAndroid: {
    marginBottom: 23,
  },
  tabBarItemIOS: {},
});
