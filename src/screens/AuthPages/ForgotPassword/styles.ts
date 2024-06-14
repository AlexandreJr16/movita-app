import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1f1f1f",
  },
  textContainer: {
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 20,
    gap: 5,
  },
  mainText: {
    color: "#fff",
    fontSize: 32,
    lineHeight: 36.8,
  },
  secondText: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 23,
  },
  input: {
    width: "100%",
    paddingHorizontal: 20,
  },
  btnContainer: {
    width: "100%",
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingVertical: 50,
  },
});
export default styles;
