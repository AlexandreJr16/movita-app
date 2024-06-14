import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#878787",
    fontSize: 16,
    lineHeight: 18,
  },
  container: {
    width: "100%",
    backgroundColor: "#1f1f1f",
    borderColor: "#878787",
    borderWidth: 2,
    borderRadius: 10,
    height: 58,
    display: "flex",
    alignContent: "center",
    padding: 15,
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Poppins_500Medium",
    width: "80%",
  },
});
export default styles;
