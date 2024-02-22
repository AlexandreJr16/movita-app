import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1f1f1f",
  },
  container: {
    backgroundColor: "#2f2f2f",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 15,
  },
  textContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.18,
  },
  blueText: {
    color: "#FFC501",
    fontSize: 16,
    lineHeight: 18.4,
    letterSpacing: 0.16,
    textDecorationLine: "underline",
  },
});

export default styles;
