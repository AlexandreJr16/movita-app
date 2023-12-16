import { Pressable, View } from "react-native";
import EmpresasIcon from "../../../assents/MainScreen/EmpresasIcon";
import ModelosIcon from "../../../assents/MainScreen/ModelosIcon";
import ProjetosIcon from "../../../assents/MainScreen/ProjetosIcon";
import styles from "./styles";

const SelectCategory = () => {
  const color = ["#36A5BF", "#A64029", "#BF9969"];
  return (
    <View style={styles.selectContainer}>
      <Pressable
        onPress={() => {}}
        style={{ ...styles.btn, backgroundColor: color[0] }}
      >
        <ProjetosIcon style={styles.img} />
      </Pressable>
      <Pressable
        onPress={() => {}}
        style={{ ...styles.btn, backgroundColor: color[1] }}
      >
        <EmpresasIcon style={styles.img} />
      </Pressable>
      <Pressable
        onPress={() => {}}
        style={{ ...styles.btn, backgroundColor: color[2] }}
      >
        <ModelosIcon style={styles.img} />
      </Pressable>
    </View>
  );
};
export default SelectCategory;
