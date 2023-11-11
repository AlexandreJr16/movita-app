import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F2F2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    width: "70%",
    resizeMode: "contain",
  },
  titleText: {
    fontSize: 36,
    fontWeight: "600",
    lineHeight: 40,
    letterSpacing: 0.3,
  },
});
export default styles;
