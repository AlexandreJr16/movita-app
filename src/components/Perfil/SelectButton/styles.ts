import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    borderRadius: 15,
  },
  title: {
    color: "#1f1f1f",
    lineHeight: 18.4,
    letterSpacing: 0.16,
    fontSize: 16,
  },
  leftSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
});
export default styles;
