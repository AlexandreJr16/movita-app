import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assents/Login/Logo";
import Carrossel from "../../components/Login/Carrossel/Carrossel";
import styles from "../Login/styles";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Logo style={styles.logo} />
          <View style={styles.carrossel}>
            <Carrossel />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUpScreen;
