import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, Button, Alert, Pressable } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "./styles";
import BriefingContext, {
  UpdateQuestionDTO,
} from "../../../../contexts/briefing.context";
import Texto from "../../../../components/Default/texto/Texto";
import TextoInput from "../../../../components/Default/texto/TextoInput";

type QuestionType = {
  id: number;
  briefingId: number;
  response: string;
  text: string;
};

type BriefingType = {
  id: number;
  answered: boolean;
  messageId: number;
  title: string;
  question: QuestionType[];
};

const RespondBriefing = ({
  navigation,
  route,
}: {
  route: { params: { briefingId: number } };
  navigation: any;
}) => {
  const [briefing, setBriefing] = useState<BriefingType | undefined>();
  const { findBriefing, updateBriefing } = useContext(BriefingContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const init = async () => {
      const { briefingId } = route.params;
      const briefingResponse = await findBriefing(briefingId);
      setBriefing(briefingResponse);
    };
    init();
  }, [route.params, findBriefing]);

  const onSubmit: SubmitHandler<BriefingType> = async (data) => {
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      const quest: UpdateQuestionDTO[] = briefing?.question
        ? briefing.question.map((question, index) => ({
            id: question.id,
            briefingId: question.briefingId,
            text: briefing?.question[index].text,
            response: data.question[index].response,
          }))
        : ([] as UpdateQuestionDTO[]);
      const dto = {
        title: briefing?.title,
        answered: true,
        id: briefing?.id,
        question: quest,
      };
      if (briefing && briefing.id !== undefined) {
        const response = await updateBriefing(briefing.id, dto ?? null);
        if (response) navigation.goBack();
      }
      // console.log(response);
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
    }
  };

  return (
    <ScrollView style={styles.screenDefault}>
      <Texto
        weight="bold"
        style={{ fontSize: 35, color: "#fff", marginBottom: 16 }}
      >
        Briefing
      </Texto>
      {briefing && (
        <View
          style={{
            backgroundColor: "#8f8f8f",
            borderRadius: 16,
            paddingVertical: 20,
            paddingHorizontal: 19,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: 15,
          }}
        >
          {briefing.question.map((question, index) => (
            <View key={index} style={{ width: "100%" }}>
              <Texto weight="bold" style={{ color: "white", fontSize: 16 }}>
                {question.text}
              </Texto>
              <Controller
                key={question.id}
                control={control}
                render={({ field }) => (
                  <TextoInput
                    value={field.value}
                    onChangeText={(value) => {
                      field.onChange(value);
                    }}
                    style={{
                      color: "white",
                      fontSize: 18,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      backgroundColor: "#9f9f9f",
                      borderRadius: 6,
                    }}
                  />
                )}
                name={`question[${index}].response`}
                defaultValue={question.response}
                rules={{ required: true }}
              />
              {errors &&
                errors.question &&
                errors.question[index]?.response && ( // Note o uso do operador de optional chaining (?.)
                  <Texto weight="bold" style={{ color: "red" }}>
                    Campo obrigatório
                  </Texto>
                )}
            </View>
          ))}
          <Pressable
            style={{
              backgroundColor: "#87CEEB",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 6,
            }}
            onPress={handleSubmit(onSubmit)}
          >
            <Texto weight="bold" style={{ color: "white", fontSize: 20 }}>
              Responder
            </Texto>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
};

export default RespondBriefing;
