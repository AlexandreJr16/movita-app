import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#1F1F1F",
    gap: 10,
  },
  logo: {
    alignSelf: "center",
  },
  carrossel: {
    paddingVertical: 30,
  },
  textContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    lineHeight: 36,
  },
  smallTitle: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 23,
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 16,
  },
  forgetPContainer: {
    paddingHorizontal: 12,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    gap: 5,
  },
  forgetPassword: {
    color: "#fff",
  },
  blueForgetPassword: {
    color: "#36A5BF",
    textDecorationLine: "underline",
  },
  signUpContainer: {
    gap: 5,
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
  },
  errorText: {
    color: "#C63818",
  },
});
export default styles;
