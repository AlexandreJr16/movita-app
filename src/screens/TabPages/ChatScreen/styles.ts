import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  chatscreen: {
    flex: 1,
    backgroundColor: "#414141",
  },
  header: {
    width: "100%",
    paddingVertical: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#1f1f1f",
  },
  titleMessage: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    color: "#fff",
    fontSize: 33,
    lineHeight: 37,
    letterSpacing: 0.33,
  },
  boxInput: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  textInput: {
    width: "100%",
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.16,
    paddingHorizontal: 20,
  },
  chatlistContainer: {},
  chatemptyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    gap: 10,
  },
  chatemptyText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  createButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#36A5BF",
    padding: 5,
    borderRadius: 100,
  },
});

export default styles;
