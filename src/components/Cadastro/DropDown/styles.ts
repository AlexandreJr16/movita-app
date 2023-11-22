import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dropdown: {
    marginHorizontal: 10,
    height: 55,
    borderColor: "#878787",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 0,
  },

  label: {
    backgroundColor: "#fff",
    fontSize: 16,
  },
  itemContainer: { backgroundColor: "#1f1f1f", color: "fff" },
  placeholderStyle: {
    color: "#fff",
    fontSize: 16,
  },
  itemText: { color: "#fff" },
  selectedTextStyle: {
    fontSize: 16,
    color: "#fff",
  },
  text: {
    color: "#878787",
    fontSize: 16,
    lineHeight: 18,
    paddingVertical: 9,
    paddingHorizontal: 5,
  },
});
export default styles;
