import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  produtoContainer: {
    width: 240,
    backgroundColor: "#444444",
    margin: 10,
    padding: 10,
    borderRadius: 16,
    gap: 2,
  },
  imagemProduto: {
    width: 220,
    height: 156,
    borderRadius: 8,
    alignSelf: "center",
  },
  title: {
    marginTop: 5,
    color: "#fff",
    fontSize: 13,
    textTransform: "uppercase",
  },
  nota: {
    color: "#fff",
    fontSize: 13,
    textTransform: "uppercase",
    backgroundColor: "#1A6DCD",
    borderRadius: 6,
  },
  status: {
    color: "#959595",
    fontSize: 13,
    maxWidth: "60%",
    minWidth: "30%",
    width: "auto",
    display: "flex",
    borderRadius: 16,
  },
  description: {
    maxWidth: "100%",
    fontSize: 11,
    color: "#fff",
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
});
export default styles;
