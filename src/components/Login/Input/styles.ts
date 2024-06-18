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
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    fontFamily: "Poppins_500Medium",
  },
});
export default styles;
