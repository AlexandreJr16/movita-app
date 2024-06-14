import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerCard: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 25,
    paddingBottom: 5,
    gap: 20,
  },
  logo: {
    marginBottom: 15,
  },
  titleMessage: {
    fontSize: 33,
    color: "#FFFFFF",
  },

  subtitleMessage: {
    marginTop: 10,
    fontSize: 16,
    color: "#FFC501",
    letterSpacing: -0.6,
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 1,
  },
  welcome: {
    width: "60%",
    gap: -10,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default styles;
