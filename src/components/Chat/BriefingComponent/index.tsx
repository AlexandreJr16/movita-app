import { View } from "react-native";
import React from "react";
import Texto from "../../Default/texto/Texto";
import { TouchableOpacity } from "react-native-gesture-handler";

const BriefingComponent = ({
  briefing,
  navigation,
}: {
  briefing: {
    id: number;
    answered: boolean;
    title: string;

    question: [{ text: string; response: string }];
  };
  navigation: any;
}) => {
  const { answered, question, title } = briefing;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Texto weight="bold" style={{ fontSize: 18, color: "#fff" }}>
          {title}
        </Texto>
        <Texto weight="regular" style={{ fontSize: 14, color: "#989898" }}>
          Briefing Novo
        </Texto>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BriefingRespond", { briefingId: briefing.id });
        }}
        style={{
          backgroundColor: "#238298",
          borderRadius: 10,
          paddingHorizontal: 45,
          paddingVertical: 10,
        }}
      >
        <Texto
          weight="regular"
          style={{
            fontSize: 14,
            color: "#fff",
          }}
        >
          Responder Briefing
        </Texto>
      </TouchableOpacity>
    </View>
  );
};

export default BriefingComponent;
