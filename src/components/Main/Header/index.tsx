import { View, Image } from "react-native";
import Logo from "../../Logo/Logo";
import Texto from "../../texto/Texto";
import styles from "./styles";
import { useContext } from "react";
import AuthContext from "../../../contexts/auth";

const HeaderMain = ({ image, name }: any) => {
  const { getUser } = useContext(AuthContext);
  return (
    <View style={styles.headerCard}>
      <Logo color="#FFFFFF" size="40"></Logo>
      <View style={styles.infoContainer}>
        <View>
          <Texto weight="bold" style={styles.titleMessage}>
            Olá, {name}
          </Texto>
          <Texto weight="bold" style={styles.subtitleMessage}>
            Seja bem-vindo(a) ao Movita!
          </Texto>
        </View>
        {/* <Image source={} /> */}
      </View>
    </View>
  );
};

export default HeaderMain;
