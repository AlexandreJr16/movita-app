import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cchat: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginTop: 17,
  },
  cavatar: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 3000,
  },
  crightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  cusername: {
    fontSize: 20,
    letterSpacing: 0.2,
    lineHeight: 23,
    color: "#fff",
  },
  cmessage: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.8,
  },
  ctime: {
    fontSize: 13,
    color: "#fff",
    letterSpacing: 0.13,
    lineHeight: 14.95,
  },
  timeStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
