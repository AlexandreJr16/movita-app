import { View, StatusBar } from "react-native";
import Texto from "../.././components/Default/texto/Texto";
import Button from "../.././components/splashScreen/button/Button";
import ImageProgress from "../.././assents/Splash/ImageProgress";
import SplashImage from "../.././assents/Splash/SplashImage";

import styles from "./style";
import React from "react";

const SplashScreen = ({ navigation }) => {
  const handlePages = () => {
    navigation.navigate("SplashScreen2");
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#f2f2f2"} barStyle={"light-content"} />
      <View style={[styles.container, { backgroundColor: "#f2f2f2" }]}>
        <SplashImage />
        <View style={styles.textView}>
          <Texto weight="bold" style={{ fontSize: 36, color: "#1f1f1f" }}>
            Compre móveis planejados sem dificuldades.{" "}
          </Texto>
          <Texto weight="regular" style={{ fontSize: 25, color: "#1f1f1f" }}>
            O Movita oferece a solução.
          </Texto>
          <ImageProgress />
        </View>
        <View style={styles.lastView}>
          <Button colorBg={"#36A5BF"} color={"#1f1f1f"} onPress={handlePages}>
            PULAR
          </Button>
        </View>
      </View>
    </View>
  );
};
export default SplashScreen;
