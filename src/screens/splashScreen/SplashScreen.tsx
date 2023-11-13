import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./style";
import Button from "../../components/splashScreenComponents/button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen() {
  const [bg, setBg] = useState("#F2F2F2");
  const [textColor, setTextColor] = useState("#1F1F1F");
  const [imgProgress, setImgProgress] = useState(
    require("../../assents/splashImageProgress.png")
  );
  const [imgPage, setImgPage] = useState(
    require("../../assents/SplashImage.png")
  );
  const [btnFontColor, setBtnFontColor] = useState("#1F1F1F");
  const [btnBgColor, setBtnBgColor] = useState("#36A5BF");
  const [number, setNumber] = useState(1);
  const handlePages = () => {
    setNumber(number + 1);
    if (number >= 2) {
      setImgPage(require("../../assents/SplashImage2.png"));
      setImgProgress(require("../../assents/splashImageProgress2.png"));
      setBg("#1F1F1F");
      setTextColor("#FFF");
      setBtnFontColor("#FFF");
      setBtnBgColor("#BF9969");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <Image style={styles.imgContainer} source={imgPage} />
      <View style={styles.textView}>
        <Texto
          weight="bold"
          fontSize={36}
          style={styles.titleText}
          color={textColor}
        >
          Compre móveis planejados sem dificuldades.
        </Texto>
        <Texto
          weight="regular"
          fontSize={25}
          style={styles.subtitleText}
          color={textColor}
        >
          O Movita oferece a solução
        </Texto>
        <Image source={imgProgress} />
      </View>
      <View style={styles.lastView}>
        <Button colorBg={btnBgColor} color={btnFontColor} onPress={handlePages}>
          PULAR
        </Button>
      </View>
    </View>
  );
}
