import { View, StatusBar } from "react-native";
import Texto from "../../../../components/Default/texto/Texto";
import Button from "../../../../components/splashScreen/button/Button";
import ImageProgress2 from "../../../../assents/Splash/ImageProgress2";
import SplashImage2 from "../../../../assents/Splash/SplashImage2";

import styles from "../style";
import React from "react";

const SplashScreen2 = ({ navigation }) => {
  const handlePages = () => {
    navigation.navigate("SplashScreen3");
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#1F1F1F"} barStyle={"light-content"} />
      <View style={[styles.container, { backgroundColor: "#1f1f1f" }]}>
        <SplashImage2 />
        <View style={styles.textView}>
          <Texto weight="bold" style={{ fontSize: 36, color: "#fff" }}>
            Visualize móveis em seu ambiente.
          </Texto>
          <Texto weight="regular" style={{ fontSize: 25, color: "#fff" }}>
            O Movita oferece a solução.
          </Texto>
          <ImageProgress2 />
        </View>
        <View style={styles.lastView}>
          <Button colorBg={"#BF9969"} color={"#FFF"} onPress={handlePages}>
            PULAR
          </Button>
        </View>
      </View>
    </View>
  );
};
export default SplashScreen2;
