import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import Routes from "./src/routes/main";
import Contexts from "./src/contexts/contexts";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import useIgnoreWarnings from "./src/utils/IgnoreWaring";
export default function App() {
  useIgnoreWarnings();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
            <NavigationContainer>
              <Contexts>
                <Routes />
              </Contexts>
            </NavigationContainer>
          </Pressable>
        </KeyboardAvoidingView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
