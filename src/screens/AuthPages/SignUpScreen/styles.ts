import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1F1F1F",
    paddingBottom: 20,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
    justifyContent: "center",
  },
  logo1: {
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  logo2: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  carrossel: {
    maxHeight: 310,
  },
  textContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    paddingHorizontal: 25,
    margin: 8,
  },
  title: { color: "#fff", fontSize: 32, lineHeight: 36 },
  smallTitle: { color: "#fff", fontSize: 20, lineHeight: 23 },

  inputContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
    marginBottom: 30,
    marginTop: 0,
  },
  errorText: {
    color: "#C63818",
  },
});
export default styles;
