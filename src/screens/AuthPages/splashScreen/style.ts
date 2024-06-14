import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F2F2",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: "30%",
    paddingBottom: "15%",
  },

  titleText: {
    lineHeight: 41,
    letterSpacing: 0.36,
  },
  subtitleText: {
    lineHeight: 40,
  },
  textView: {
    width: "100%",
    height: "40%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 0,
    paddingVertical: 40,
    gap: 10,
  },
  lastView: {
    width: "100%",
    justifyContent: "flex-end",
    end: 0,
    alignItems: "flex-end",
    paddingHorizontal: 30,
  },
});
export default styles;
