import { View, StatusBar } from "react-native";
import Texto from "../../../../components/Default/texto/Texto";
import Button from "../../../../components/splashScreen/button/Button";
import ImageProgress3 from "../../../../assents/Splash/ImageProgress3";
import SplashImage3 from "../../../../assents/Splash/SplashImage3";

import styles from "../style";
import React from "react";

const SplashScreen3 = ({ navigation }) => {
  const handlePages = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#BF9969"} barStyle={"dark-content"} />
      <View style={[styles.container, { backgroundColor: "#BF9969" }]}>
        <SplashImage3 />
        <View style={styles.textView}>
          <Texto weight="bold" style={{ fontSize: 36, color: "#1f1f1f" }}>
            Acompanhe o progresso de seu móvel.
          </Texto>
          <Texto weight="regular" style={{ fontSize: 25, color: "#1f1f1f" }}>
            O Movita oferece a solução.
          </Texto>
          <ImageProgress3 />
        </View>
        <View style={styles.lastView}>
          <Button colorBg={"#1f1f1f"} color={"#FFF"} onPress={handlePages}>
            PULAR
          </Button>
        </View>
      </View>
    </View>
  );
};
export default SplashScreen3;
