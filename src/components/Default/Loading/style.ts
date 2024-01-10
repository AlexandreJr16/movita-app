import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 200,
    padding: 20,
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
    alignItems: "center",
  },
  loadingText: {
    color: "white",
    marginTop: 10,
  },
});

export default styles;
