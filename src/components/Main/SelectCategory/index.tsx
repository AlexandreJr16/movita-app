import { Pressable, View } from "react-native";
import EmpresasIcon from "../../../assents/MainScreen/EmpresasIcon";
import ModelosIcon from "../../../assents/MainScreen/ModelosIcon";
import ProjetosIcon from "../../../assents/MainScreen/ProjetosIcon";
import styles from "./styles";

const SelectCategory = () => {
  return (
    <View style={styles.selectContainer}>
      <Pressable>
        <EmpresasIcon />
      </Pressable>
      <Pressable>
        <ModelosIcon />
      </Pressable>
      <Pressable>
        <ProjetosIcon />
      </Pressable>
    </View>
  );
};
export default SelectCategory;
