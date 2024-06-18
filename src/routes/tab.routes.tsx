import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainRoutes from "./tab/main.routes";

import PerfilRoutes from "./tab/perfil.routes";
import ChatRoutes from "./tab/chat.routes";
import SearchRoutes from "./tab/search.routes";
import { Chats, House, MagnifyingGlass, User } from "phosphor-react-native";

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
            tabBarHideOnKeyboard: true,
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
                iconName = focused ? (
                  <House color="#fff" size={40} />
                ) : (
                  <House color="#fff" size={40} />
                );
              } else if (route.name === "chat") {
                iconName = focused ? (
                  <Chats color="#52B6CE" size={40} />
                ) : (
                  <Chats color="#fff" size={40} />
                );
              } else if (route.name === "search") {
                iconName = focused ? (
                  <MagnifyingGlass color="#52B6CE" size={40} />
                ) : (
                  <MagnifyingGlass color="#fff" size={40} />
                );
              } else if (route.name === "perfil") {
                iconName = focused ? (
                  <User color="#BF9969" size={40} />
                ) : (
                  <User color="#fff" size={40} />
                );
              }

              return iconName;
            },
          })}
        >
          <Tab.Screen name="main" component={MainRoutes}></Tab.Screen>
          <Tab.Screen name="chat" component={ChatRoutes}></Tab.Screen>
          <Tab.Screen name="search" component={SearchRoutes}></Tab.Screen>
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
  },
  tabBarIOS: {
    backgroundColor: "#151515",
    width: "100%",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  tabBarItemAndroid: {},
  tabBarItemIOS: {},
});
