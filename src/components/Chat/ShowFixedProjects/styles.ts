import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardFixed: {
    backgroundColor: "#1C1B1B",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 10,
  },
  img: {
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  mainText: {
    color: "#fff",
    fontSize: 14,
  },
  secondaryText: {
    color: "#FFC501",
    fontSize: 14,
  },
  textField: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    gap: 5,
  },
  textIntoImage: {
    color: "#1C1B1B",
    fontSize: 30,
  },
  nullImage: {
    borderRadius: 5,
    width: 40,
    height: 40,
    backgroundColor: "#D9D9D9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
