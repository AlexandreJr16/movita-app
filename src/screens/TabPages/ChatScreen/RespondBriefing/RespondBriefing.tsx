import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import BriefingContext from "../../../../contexts/briefing.context";

type QuestionType = {
  id: number;
  questionId: number;
  response: string;
  text: string;
};
type BriefingType = {
  id: number;
  answered: boolean;
  messageId: number;
  title: string;
  question: [QuestionType];
};

const RespondBriefing = ({
  route,
}: {
  route: { params: { briefingId: number } };
}) => {
  const [briefing, setBriefing] = useState<BriefingType>();
  const { findBriefing } = useContext(BriefingContext);
  const init = async () => {
    const { briefingId } = route.params;
    const briefingResponse = await findBriefing(briefingId);
    await setBriefing(briefingResponse);
  };
  useEffect(() => {
    init();
  }, []);

  return <View style={styles.screenDefault}></View>;
};

export default RespondBriefing;
