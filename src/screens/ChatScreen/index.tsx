import { View } from "react-native";
import Texto from "../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <Texto weight={"bold"}>Chat</Texto>
      </SafeAreaView>
    </View>
  );
};

export default ChatScreen;
