import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerCard: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#1F1F1F",
    borderBottomLeftRadius: 50,
  },
  logo: {
    marginVertical: 10,
  },
  titleMessage: {
    fontSize: 30,
    color: "#FFFFFF",
  },

  subtitleMessage: {
    fontSize: 17,
    color: "#FFFFFF",
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  welcome: {
    width: "80%",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default styles;
