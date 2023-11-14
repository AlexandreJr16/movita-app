import { View } from "react-native";
import Texto from "../../components/texto/Texto";
import styles from "./styles";

const Login = () => {
  return (
    <View style={styles.container}>
      <Texto weight="regular" style={{ fontSize: 36 }}>
        Olá
      </Texto>
    </View>
  );
};
export default Login;
