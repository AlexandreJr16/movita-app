import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  messagingscreen: {
    flex: 1,
    backgroundColor: "#1f1f1f",
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 60,
  },
  textTitle: {
    color: "#fff",
    fontSize: 25,
    lineHeight: 28.75,
    letterSpacing: 0.25,
  },
  messaContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  messaginginputContainer: {
    display: "flex",
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 15,
  },
  messaginginput: {
    flex: 1,
    width: "100%",
    backgroundColor: "#8D8D8D",
    display: "flex",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 30,
    fontSize: 16,
  },
  messagingbuttonContainer: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  inputMessage: {
    color: "#fff",
    flex: 1,
    padding: 10,
  },
});
export default styles;
