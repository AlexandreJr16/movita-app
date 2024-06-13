import { Pressable, View } from "react-native";
import React, { useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const { title, id } = briefing;
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
      {briefing.answered ? (
        <View style={{ flex: 1, gap: 15 }}>
          <View
            style={{
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Texto style={{ color: "white", fontSize: 18 }} weight="bold">
              {briefing.title}
            </Texto>
            <Texto
              weight="regular"
              style={{ color: "#989898", fontSize: 16, width: "100%" }}
            >
              Resposta ao Briefing
            </Texto>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Pressable
              onPress={() => {
                setVisible(!visible);
              }}
            >
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                <Texto
                  weight="regular"
                  style={{ color: "white", fontSize: 14 }}
                >
                  Detalhes
                </Texto>
                <Texto weight="bold" style={{ color: "white", fontSize: 14 }}>
                  +
                </Texto>
              </View>
            </Pressable>
            {visible && (
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: 15,
                }}
              >
                {briefing.question.map((question, index) => (
                  <Texto
                    key={index}
                    weight="bold"
                    style={{ color: "white", fontSize: 12 }}
                  >
                    {question.text} - {question.response}
                  </Texto>
                ))}
              </View>
            )}
          </View>
        </View>
      ) : (
        <React.Fragment>
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
              navigation.navigate("BriefingRespond", { briefingId: id });
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
        </React.Fragment>
      )}
    </View>
  );
};

export default BriefingComponent;
