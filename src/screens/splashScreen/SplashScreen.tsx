import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./style";
import Button from "../../components/splashScreenComponents/button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen() {
  const [bg, setbg] = useState("#F2F2F2");
  const [textColor, setTextColor] = useState("#1F1F1F");
  const [imgProgress, setImgProgress] = useState(
    require("../../assents/splashImageProgress.png")
  );
  const [imgPage, setImgPage] = useState(
    require("../../assents/SplashImage.png")
  );
  const [btnFontColor, setBtnFontColor] = useState("#1F1F1F");
  const [btnBgColor, setBtnBgColor] = useState("#36A5BF");

  const handlePages = async () => {
    const existingNumber = await AsyncStorage.getItem("lastNumber");

    if (existingNumber === null) {
      await AsyncStorage.setItem("lastNumber", "1");
    }
  };

  useEffect(() => {
    const getLastNumber = async () => {
      try {
        const lastNumber = await AsyncStorage.getItem("lastNumber");
        if (lastNumber) {
          alert(`Último número salvo: ${lastNumber}`);
        }
      } catch (error) {
        console.error("Erro ao recuperar o número:", error);
      }
    };

    getLastNumber();
  }, []);

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
