import { View } from "react-native";
import { Image } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./style";
import Button from "../../components/splashScreenComponents/button/Button";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgContainer}
        source={require("../../assents/SplashImage.png")}
      />
      <View style={styles.textView}>
        <Texto weight="bold" fontSize={36} style={styles.titleText}>
          Compre móveis planejados sem dificuldades.
        </Texto>
        <Texto weight="regular" fontSize={25} style={styles.subtitleText}>
          O Movita oferece a solução
        </Texto>
        <Image source={require("../../assents/splashImageProgress.png")} />
      </View>
      <View style={styles.lastView}>
        <Button colorBg="#36A5BF" color="#1f1f1f">
          PULAR
        </Button>
      </View>
    </View>
  );
}
