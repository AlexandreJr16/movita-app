import React, { useState } from "react";
import { View, Image } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./style";
import Button from "../../components/splashScreenComponents/button/Button";

export default function SplashScreen() {
  const [page, setPage] = useState<number>(0);

  const pages = [
    {
      bg: "#F2F2F2",
      textColor: "#1F1F1F",
      imgProgress: require("../../assents/splashImageProgress.png"),
      imgPage: require("../../assents/SplashImage.png"),
      btnFontColor: "#1F1F1F",
      btnBgColor: "#36A5BF",
    },
    {
      bg: "#1F1F1F",
      textColor: "#FFF",
      imgProgress: require("../../assents/splashImageProgress2.png"),
      imgPage: require("../../assents/SplashImage2.png"),
      btnFontColor: "#FFF",
      btnBgColor: "#BF9969",
    },
    {
      bg: "#BF9969",
      textColor: "#1F1F1F",
      imgProgress: require("../../assents/splashImageProgress3.png"),
      imgPage: require("../../assents/SplashImage3.png"),
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
    if (page < pages.length - 1) {
      setPage(page + 1);
    }
  };

  const currentPage = pages[page];
  const text = texts[page];

  return (
    <View style={[styles.container, { backgroundColor: currentPage.bg }]}>
      <Image style={styles.imgContainer} source={currentPage.imgPage} />
      <View style={styles.textView}>
        <Texto
          weight="bold"
          fontSize={36}
          style={styles.titleText}
          color={currentPage.textColor}
        >
          {text}
        </Texto>
        <Texto
          weight="regular"
          fontSize={25}
          style={styles.subtitleText}
          color={currentPage.textColor}
        >
          O Movita oferece a solução
        </Texto>
        <Image source={currentPage.imgProgress} />
      </View>
      <View style={styles.lastView}>
        <Button
          colorBg={currentPage.btnBgColor}
          color={currentPage.btnFontColor}
          onPress={handlePages}
        >
          PULAR
        </Button>
      </View>
    </View>
  );
}
