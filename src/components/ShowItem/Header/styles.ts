import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  titulo: {
    color: "#fff",
    fontSize: 25,
    lineHeight: 28.75,
    letterSpacing: 0.25,
  },
  fabTitle: {
    color: "#1f1f1f",
    lineHeight: 18.4,
    fontSize: 16,
    letterSpacing: 0.16,
  },
  fabTitleBox: {
    paddingTop: 5,
    paddingHorizontal: 15,
    borderRadius: 6,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#fff",
    textAlign: "center",
    color: "#fff",
  },
  heartBox: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: "#A64029",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
  boxCardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "column",
    marginBottom: 5,
    paddingVertical: 5,
  },
  boxTopRightCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10,
    flexDirection: "row",
  },
  topRightView: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  subtitle: {
    color: "#959595",
  },
  containerCard: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textParagrafo: {
    color: "#fff",
    fontSize: 13,
    paddingTop: 20,
  },
});
export default styles;
