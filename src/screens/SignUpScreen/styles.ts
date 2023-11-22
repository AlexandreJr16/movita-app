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
    maxHeight: 310,
  },
  textContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    paddingHorizontal: 25,
    margin: 10,
  },
  title: { color: "#fff", fontSize: 32, lineHeight: 36 },
  smallTitle: { color: "#fff", fontSize: 20, lineHeight: 23 },
});
export default styles;
