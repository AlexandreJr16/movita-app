import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, Button, Alert } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "./styles";
import BriefingContext, {
  UpdateBriefingDTO,
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
  route,
}: {
  route: { params: { briefingId: number } };
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
      const quest: UpdateQuestionDTO[] = briefing.question
        ? briefing.question.map((question, index) => ({
            id: question.id,
            briefingId: question.briefingId,
            text: briefing.question[index].text,
            response: data.question[index].response,
          }))
        : ([] as UpdateQuestionDTO[]);
      const dto = {
        title: briefing.title,
        answered: briefing.answered,
        id: briefing.id,
        question: quest,
      };
      const response = await updateBriefing(briefing.id, dto);
      // console.log(response);
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
    }
  };

  return (
    <ScrollView style={styles.screenDefault}>
      {briefing && (
        <View>
          {briefing.question.map((question, index) => (
            <View
              key={index}
              style={{ backgroundColor: "#8f8f8f", padding: 20 }}
            >
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
                      fontSize: 16,
                      backgroundColor: "#9f9f9f",
                      padding: 10,
                    }}
                  />
                )}
                name={`question[${index}].response`}
                defaultValue={question.response}
                rules={{ required: true }}
              />
              {errors &&
                errors.question &&
                errors.question[index]?.response && (
                  <Texto weight="bold" style={{ color: "red" }}>
                    Campo obrigatório
                  </Texto>
                )}
            </View>
          ))}
          <Button onPress={handleSubmit(onSubmit)} title="Enviar" />
        </View>
      )}
    </ScrollView>
  );
};

export default RespondBriefing;
