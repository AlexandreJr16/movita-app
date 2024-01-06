import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import styles from "./styles";
import HeaderChangePasswordForgot from "../../../components/Forgot/Header";

const ChangePasswordForgot = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          ...styles.container,
          alignItems: "center",
        }}
      >
        <HeaderChangePasswordForgot navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
export default ChangePasswordForgot;
