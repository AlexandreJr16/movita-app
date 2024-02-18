import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/main";
import { AuthProvider } from "./src/contexts";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
