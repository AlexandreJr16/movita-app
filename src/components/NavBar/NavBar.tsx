import React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import styles from "./styles";
import Texto from "../texto/Texto";


export default function NavBar(){

  return (
    <View style={styles.background}>
        
        <Pressable>
            <Texto weight="bold">Um</Texto>
        </Pressable>
        <Pressable>
            <Texto weight="bold">Dois</Texto>
        </Pressable>
        <Pressable>
            <Texto weight="bold">Três</Texto>
        </Pressable>
        <Pressable>
            <Texto weight="bold">Quatro</Texto>
        </Pressable>
    </View>
  );
}
