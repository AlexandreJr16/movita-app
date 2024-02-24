import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#1F1F1F",
  },
  logo: {
    marginBottom: 60,
    marginTop: 20,
  },
  carrossel: {
    maxHeight: 300,
  },
  textContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    paddingHorizontal: 25,
    margin: 5,
  },
  title: { color: "#fff", fontSize: 32, lineHeight: 36 },
  smallTitle: { color: "#fff", fontSize: 20, lineHeight: 23 },
  inputContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
    marginBottom: 40,
  },
  forgetPContainer: {
    paddingHorizontal: 12,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  forgetPassword: {
    color: "#fff",
    marginRight: 5,
  },
  blueForgetPassword: {
    color: "#36A5BF",
    textDecorationLine: "underline",
  },
  signUpContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  blueSignUp: {
    color: "#36A5BF",
    textDecorationLine: "underline",
  },
  signIn: {
    color: "#fff",
    marginRight: 5,
  },
  errorText: {
    color: "#C63818",
  },
});
export default styles;
