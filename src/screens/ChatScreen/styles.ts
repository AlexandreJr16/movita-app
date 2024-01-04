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
    borderBottomRightRadius: 50,
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
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 10,
  },
  textInput: {
    width: "100%",
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.16,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  chatlistContainer: {
    flex: 1,
  },
  chatemptyContainer: {},
  chatemptyText: {},
  createButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#36A5BF",
    padding: 5,
    borderRadius: 100,
  },
});

export default styles;
