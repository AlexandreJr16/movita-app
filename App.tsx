import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/main";
import { AuthProvider } from "./src/contexts/auth.context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Contexts from "./src/contexts/contexts";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Contexts>
            <Routes />
          </Contexts>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
