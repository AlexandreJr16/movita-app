import { View } from "react-native";
import styles from "./styles";
import Texto from "../../Default/texto/Texto";
import EditarPerfil from "../../../assents/Perfil/Editar";
const TitleTextPerfil = ({ children }: { children?: any }) => {
  return (
    <View style={styles.container}>
      <Texto weight={"bold"} style={styles.text}>
        {children}
      </Texto>
      <EditarPerfil />
    </View>
  );
};
export default TitleTextPerfil;
