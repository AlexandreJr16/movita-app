import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2F2F",
  },
  img: {
    width: "90%",
    resizeMode: "cover",
    height: 330,
    borderRadius: 15,
  },
  itensContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  card: {
    flex: 1,
    width: "90%",
    backgroundColor: "#1f1f1f",
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
    gap: 15,
  },
  description: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 17.25,
    letterSpacing: 0.3,
  },
  viewSuperior: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  viewSuperiorDireita: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: -5,
  },
  title: {
    marginTop: 5,
    color: "#fff",
    fontSize: 13,
    textTransform: "uppercase",
  },
  nota: {
    marginTop: 5,
    color: "#fff",
    fontSize: 13,
    textTransform: "uppercase",
    backgroundColor: "#1A6DCD",
    borderRadius: 6,
    paddingHorizontal: 10,
  },
});
export default styles;
