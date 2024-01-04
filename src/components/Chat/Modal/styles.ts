import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    backgroundColor: "#2f2f2f",
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 16,
    gap: 20,
  },
  modalsubheading: {
    color: "#fff",
    fontSize: 20,
  },
  modalinput: {
    backgroundColor: "#fff",
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 16,
  },
  modalbuttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
  },
  modalbutton: {
    backgroundColor: "#36A5BF",
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 16,
  },
  modaltext: {
    color: "#fff",
  },
});
export default styles;
