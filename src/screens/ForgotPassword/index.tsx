import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Texto from "../../components/texto/Texto";
import React from "react";
import styles from "./styles";
import HeaderForgotScreen from "../../components/Forgot/Header";

const ForgotScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          ...styles.container,
          alignItems: "center",
        }}
      >
        <HeaderForgotScreen navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
export default ForgotScreen;
