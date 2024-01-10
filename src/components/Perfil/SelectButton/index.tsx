import { Pressable, View } from "react-native";
import Texto from "../../Default/texto/Texto";
import styles from "./styles";

const SelectButton = ({
  icon,
  arrow,
  fontColor,
  bgColor,
  children,
  onPress,
}: {
  icon?: any;
  arrow?: any;
  fontColor: any;
  bgColor: any;
  children: any;
  onPress?: any;
}) => {
  return (
    <Pressable
      style={{ ...styles.container, backgroundColor: bgColor }}
      onPress={onPress}
    >
      <View style={styles.leftSide}>
        {icon}
        <Texto weight="regular" style={{ ...styles.title, color: fontColor }}>
          {children}
        </Texto>
      </View>
      {arrow}
    </Pressable>
  );
};
export default SelectButton;
