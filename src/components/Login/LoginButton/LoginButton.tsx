import { Button, View } from "react-native";
import LoginButtonDTO from "./LoginButtonDTO";
import React from "react";

const LoginButton = ({ text, func }: LoginButtonDTO) => {
  return <Button title={text} onPress={func}></Button>;
};
export default LoginButton;
