import { TextInput, View } from "react-native";
import Texto from "../../texto/Texto";
import InputLogin from "../../Login/Input/InputLogin";
import styles from "./styles";

const InputPerfil = ({
  title,
  func,
  secureText,
  value,
}: {
  title?: string;
  func?: any;
  secureText?: boolean;
  value?: any;
}) => {
  return (
    <View style={styles.container}>
      <Texto weight="bold" style={styles.text}>
        {title}
      </Texto>
      <TextInput
        onChangeText={func}
        style={styles.input}
        secureTextEntry={secureText}
        placeholder="Digite Aqui"
        placeholderTextColor={"#9f9f9f"}
        value={value}
      ></TextInput>
    </View>
  );
};
export default InputPerfil;
