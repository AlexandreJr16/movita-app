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
  status: {
    color: "#000",
    paddingHorizontal: 5,
    backgroundColor: "#D9D9D9",
    fontSize: 10,
    maxWidth: "60%",
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
