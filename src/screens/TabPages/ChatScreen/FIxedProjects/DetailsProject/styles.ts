import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
  },

  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  textTitle: {
    color: "#fff",
    fontSize: 25,
    lineHeight: 28.75,
    letterSpacing: 0.25,
  },
  messaContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  projetosContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  projectsItems: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#238298",
    borderRadius: 10,
    marginBottom: 15,

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: 20,
  },
  textItems: {
    color: "#fff",
    fontSize: 19,
  },
  topItemContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inContainerTextItem: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
});
export default styles;
