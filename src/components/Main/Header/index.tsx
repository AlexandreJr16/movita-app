import React, { useContext, useEffect, useState } from "react";
import { View, Image } from "react-native";
import Logo from "../../Logo/Logo";
import Texto from "../../texto/Texto";
import styles from "./styles";
import AuthContext from "../../../contexts/auth";
import { Buffer } from "buffer";
import ImagemBuffer from "../../Imagem";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderMain = () => {
  const { user } = useContext(AuthContext);

  return (
    
      <View></View>


  );
};

export default HeaderMain;
