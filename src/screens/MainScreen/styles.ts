import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#414141",
  },

  topPage: {
    backgroundColor: "#1F1F1F",
    borderBottomLeftRadius: 50,
    display: "flex",
    flexDirection: "column",
  },

  logo: {
    width: "auto",
    display: "flex",
    alignItems: "center",
  },

  welcome: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  message: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  titleMessage: {
    fontSize: 32,
    color: "#FFFFFF",
  },

  subtitleMessage: {
    fontSize: 20,
    color: "#FFFFFF",
  },

  photo: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#FFFFFF",
  },

  navbar: {
    display: "flex",
    height: 136,
    backgroundColor: "FF0000",
  },
});

export default styles;
