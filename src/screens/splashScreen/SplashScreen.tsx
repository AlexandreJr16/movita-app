import React, { useState } from "react";
import { View, Image } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./style";
import Button from "../../components/splashScreenComponents/button/Button";

interface Page {
  bg: string;
  textColor: string;
  imgProgress: any;
  imgPage: any;
  btnFontColor: string;
  btnBgColor: string;
}

export default function SplashScreen({ navigation }: { navigation: any }) {
  const [page, setPage] = useState<number>(0);

  const pages: Page[] = [
    {
      bg: "#F2F2F2",
      textColor: "#1F1F1F",
      imgProgress: require("../../assents/Splash/splashImageProgress.png"),
      imgPage: require("../../assents/Splash/SplashImage.png"),
      btnFontColor: "#1F1F1F",
      btnBgColor: "#36A5BF",
    },
    {
      bg: "#1F1F1F",
      textColor: "#FFF",
      imgProgress: require("../../assents/Splash/splashImageProgress2.png"),
      imgPage: require("../../assents/Splash/SplashImage2.png"),
      btnFontColor: "#FFF",
      btnBgColor: "#BF9969",
    },
    {
      bg: "#BF9969",
      textColor: "#1F1F1F",
      imgProgress: require("../../assents/Splash/splashImageProgress3.png"),
      imgPage: require("../../assents/Splash/SplashImage3.png"),
      btnFontColor: "#FFF",
      btnBgColor: "#1F1F1F",
    },
  ];

  const texts = [
    "Compre móveis planejados sem dificuldades.",
    "Visualize móveis em seu ambiente.",
    "Acompanhe o progresso de seu móvel.",
  ];

  const handlePages = () => {
    if (page === pages.length - 1) {
      navigation.navigate("Login");
    }
    if (page < pages.length - 1) {
      setPage(page + 1);
    }
  };

  const { bg, textColor, imgPage, imgProgress, btnFontColor, btnBgColor } =
    pages[page % 3];

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <Image style={styles.imgContainer} source={imgPage} />
      <View style={styles.textView}>
        <Texto weight="bold" style={{ fontSize: 36, color: textColor }}>
          {texts[page % 3]}
        </Texto>
        <Texto weight="regular" style={{ fontSize: 25, color: textColor }}>
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
