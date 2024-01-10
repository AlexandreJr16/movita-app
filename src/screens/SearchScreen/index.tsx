import { View } from "react-native";
import Texto from "../../components/Default/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const SearchScreen = () => {
  return (
    <View>
      <Texto weight={"bold"}>Search</Texto>
    </View>
  );
};

export default SearchScreen;
