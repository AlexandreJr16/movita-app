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
    paddingVertical: 2,
    paddingHorizontal: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#8f8f8f",
    borderRadius: 15,
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
    flexDirection: "row",
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
});
export default styles;
