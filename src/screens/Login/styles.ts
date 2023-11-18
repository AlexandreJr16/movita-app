import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#1F1F1F",
  },
  logo: {
    marginBottom: 60,
  },
  carrossel: {
    maxHeight: 325,
  },
  textContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    paddingHorizontal: 25,
  },
  title: { color: "#fff", fontSize: 32, lineHeight: 36 },
  smallTitle: { color: "#fff", fontSize: 20, lineHeight: 23 },
  inputContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
    paddingVertical: 20,
    gap: 15,
  },
});
export default styles;
