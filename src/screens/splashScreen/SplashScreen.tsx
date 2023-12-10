import React, { useState } from "react";
import { View, Image, SafeAreaView } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./style";
import Button from "../../components/splashScreenComponents/button/Button";
import SplashImage from "../../assents/Splash/SplashImage";
import SplashImage2 from "../../assents/Splash/SplashImage2";
import SplashImage3 from "../../assents/Splash/SplashImage3";
import ImageProgress from "../../assents/Splash/ImageProgress";
import ImageProgress2 from "../../assents/Splash/ImageProgress2";
import ImageProgress3 from "../../assents/Splash/ImageProgress3";

//Eu quero colocar alguma função pra quando apertar na seta de voltar do celular decremente a page (Simples)
interface Page {
  bg: string;
  textColor: string;
  btnFontColor: string;
  btnBgColor: string;
}

export default function SplashScreen({ navigation }: { navigation: any }) {
  const [page, setPage] = useState<number>(0);
  const [img, setImg] = useState<React.ReactNode>(<SplashImage />);
  const [imageProgress, setImageProgress] = useState(<ImageProgress />);

  const pages: Page[] = [
    {
      bg: "#F2F2F2",
      textColor: "#1F1F1F",
      btnFontColor: "#1F1F1F",
      btnBgColor: "#36A5BF",
    },
    {
      bg: "#1F1F1F",
      textColor: "#FFF",
      btnFontColor: "#FFF",
      btnBgColor: "#BF9969",
    },
    {
      bg: "#BF9969",
      textColor: "#1F1F1F",
      btnFontColor: "#FFF",
      btnBgColor: "#1F1F1F",
    },
  ];

  const texts = [
    "Compre móveis planejados sem dificuldades.",
    "Visualize móveis em seu ambiente.",
    "Acompanhe o progresso de seu móvel.",
  ];

  const updateImage = (page: number) => {
    switch (page) {
      case 1:
        setImg(<SplashImage />);
        break;
      case 2:
        setImg(<SplashImage2 />);
        break;
      case 3:
        setImg(<SplashImage3 />);
        break;
      default:
        setImg(<SplashImage2 />);
        break;
    }
  };

  const updateImageProgress = (page: number) => {
    switch (page) {
      case 1:
        setImageProgress(<ImageProgress />);
        break;
      case 2:
        setImageProgress(<ImageProgress2 />);
        break;
      case 3:
        setImageProgress(<ImageProgress3 />);
        break;
      default:
        setImageProgress(<ImageProgress />);
        break;
    }
  };

  const handlePages = () => {
    if (page === pages.length - 1) {
      navigation.navigate("Login");
    }
    if (page < pages.length - 1) {
      setPage(page + 1);
      updateImage(page + 2);
      updateImageProgress(page + 2);
    }
  };

  const { bg, textColor, btnFontColor, btnBgColor } = pages[page % 3];

  return (
      <View style={[styles.container, { backgroundColor: bg }]}>
        {img}
        <View style={styles.textView}>
          <Texto weight="bold" style={{ fontSize: 36, color: textColor }}>
            {texts[page]}
          </Texto>
          <Texto weight="regular" style={{ fontSize: 25, color: textColor }}>
            O Movita oferece a solução.
          </Texto>
          {imageProgress}
        </View>
        <View style={styles.lastView}>
          <Button
            colorBg={btnBgColor}
            color={btnFontColor}
            onPress={handlePages}
          >
            PULAR
          </Button>
        </View>
      </View>
  );
}
