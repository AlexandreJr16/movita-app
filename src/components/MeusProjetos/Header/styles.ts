import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerCard: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingBottom: 12,
  },
  titleMessage: {
    marginTop: 20,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    color: "#fff",
    fontSize: 33,
    lineHeight: 37,
    letterSpacing: 0.33,
  },
  boxInput: {
    width: "90%",
    borderRadius: 15,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#fff",
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "100%",
    borderRadius: 15,
    gap: 10,
  },
  filterBtn: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginBottom: 8,
  },
});

export default styles;
