import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F2F2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },

  imgContainer: {
    width: "75%",
    resizeMode: "contain",
    padding: 25,
    marginTop: "25%",
  },
  titleText: {
    lineHeight: 41,
    letterSpacing: 0.36,
  },
  subtitleText: {
    lineHeight: 41,
  },
  textView: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 40,
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
