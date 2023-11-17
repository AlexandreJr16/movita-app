import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  logo: {
    marginBottom: 60,
  },
  carrossel: {
    maxHeight: "60%",
  },
  textContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    paddingHorizontal: 25,
  },
  title: { color: "#000", fontSize: 32, lineHeight: 36 },
  smallTitle: { color: "#000", fontSize: 20, lineHeight: 23 },
});
export default styles;
