import { View } from "react-native";
import { Image } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./style";
import Button from "../../components/splashScreenComponents/button/Button";
import { useState } from "react";

export default function SplashScreen() {
  const [bg, setbg] = useState("#F2F2F2");
  const [textColor, setTextColor] = useState("#1F1F1F");
  const [imgProgress, setImgProgress] = useState(
    require("../../assents/splashImageProgress.png")
  );
  const [btnFontColor, setBtnFontColor] = useState("#1F1F1F");
  const [btnBgColor, setBtnBgColor] = useState("#36A5BF");
  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <Image
        style={styles.imgContainer}
        source={require("../../assents/SplashImage.png")}
      />
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
        <Button colorBg={btnBgColor} color={btnFontColor}>
          PULAR
        </Button>
      </View>
    </View>
  );
}
