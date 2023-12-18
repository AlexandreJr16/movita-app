import { View } from "react-native";
import Texto from "../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";

const PerfilScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <Texto weight={"bold"}>Perfil</Texto>
      </SafeAreaView>
    </View>
  );
};

export default PerfilScreen;
