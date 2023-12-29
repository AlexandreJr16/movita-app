import { View } from "react-native";
import Texto from "../../components/texto/Texto";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const SearchScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <Texto weight={"bold"}>Search</Texto>
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;
