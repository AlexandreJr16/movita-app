import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  textContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.18,
  },
  yellowText: {
    color: "#FFC501",
    fontSize: 16,
    lineHeight: 18.4,
    letterSpacing: 0.16,
    textDecorationLine: "underline",
  },
});
export default styles;
