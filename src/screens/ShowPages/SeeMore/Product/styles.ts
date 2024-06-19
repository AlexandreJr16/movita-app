import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  produtoContainer: {
    width: "48%",
    backgroundColor: "#444444",
    padding: 10,
    borderRadius: 16,
    gap: 2,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: 5,
  },
  imagemProduto: {
    width: "100%",
    height: 156,
    borderRadius: 8,
    alignSelf: "center",
    backgroundColor: "#4f4f4f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 5,
    color: "#fff",
    fontSize: 13,
    textTransform: "uppercase",
  },
  status: {
    color: "#000",
    paddingHorizontal: 5,
    backgroundColor: "#D9D9D9",
    fontSize: 10,
    maxWidth: "100%",
    minWidth: "30%",
    width: "auto",
    display: "flex",
    textAlign: "center",
    borderRadius: 16,
  },
  description: {
    maxWidth: "100%",
    fontSize: 11,
    color: "#fff",
  },
});
export default styles;
