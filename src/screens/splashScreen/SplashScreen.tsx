import { View } from "react-native";
import { Image } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./style";
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgContainer}
        source={require("../../assents/SplashImage.png")}
      />
      <Texto weight="bold" fontSize={40}>
        Compre móveis planejados sem dificuldades.
      </Texto>
    </View>
  );
}
