import { View, Image } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./styles";
import { useState } from "react";

const Login = () => {
  const [imgHeader, setImgHeader] = useState(
    require("../../assents/Login/logo.png")
  );

  return (
    <View style={styles.container}>
      <View>
        <Image source={imgHeader} />
      </View>
    </View>
  );
};
export default Login;
