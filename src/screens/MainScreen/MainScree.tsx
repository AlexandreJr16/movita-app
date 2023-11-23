import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../../contexts/auth";

export default function MainScrenn() {
  const { token } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <View>
        <Text>Main Screen</Text>
      </View>
    </SafeAreaView>
  );
}
