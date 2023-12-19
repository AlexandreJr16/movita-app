import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 1000,
  },
  textContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 25,
    lineHeight: 28,
    letterSpacing: 0.25,
    marginBottom: 2,
  },
  subtitle: {
    color: "#f5f5f9",
    fontSize: 14,
    lineHeight: 16.1,
    letterSpacing: 0.14,
    marginTop: 2,
  },
});
export default styles;
