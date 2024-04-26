import React from "react";
import { View } from "react-native";
import styles from "./styles";

const RespondBriefing = ({
  route,
}: {
  route: { params: { briefingId: number } };
}) => {
  const { briefingId } = route.params;

  return <View style={styles.screenDefault}></View>;
};

export default RespondBriefing;
