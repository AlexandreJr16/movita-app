import React, { useState } from "react";
//import { View, Image, StatusBar, Text, Dimensions } from "react-native";
import {
  View,
  Image,
  StatusBar,
  Text,
  Dimensions,
  Pressable,
  Button,
} from "react-native";

// import Carousel from "react-native-snap-carousel";

import { carousel } from "./data";
import { ScrollView } from "react-native-gesture-handler";
import GaveteiroVermelho from "../../../assents/Login/GaveteiroVermelho";
import InputLogin from "../Input/InputLogin";
import TextoInput from "../../Default/texto/TextoInput";
import { setApiUrl } from "../../../../configs";

const SLIDER_WIDTH = Dimensions.get("window").width;
const SLIDER_HEIGHT = Dimensions.get("window").height;

const ITEM_WIDTH = SLIDER_WIDTH / 1.8;
const ITEM_HEIGHT = SLIDER_HEIGHT / 3.2;

const Item = ({ item }: { item: { color: string; img: any } }) => {
  return (
    <View
      style={{
        width: ITEM_WIDTH,
        backgroundColor: item.color,
        height: ITEM_HEIGHT,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginLeft: 20,
      }}
    >
      {item.img}
    </View>
  );
};

export const Carrossel = () => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ display: "flex" }}
    >
      {carousel.map((item, i) => (
        <Item item={item} key={i} />
      ))}
      {carousel.map((item, i) => (
        <Item item={item} key={i} />
      ))}
      {carousel.map((item, i) => (
        <Item item={item} key={i} />
      ))}
      <View>
        {!visible && (
          <Pressable
            onPress={() => {
              setVisible(true);
            }}
          >
            <Item
              item={{ color: "#A64029", img: <GaveteiroVermelho /> }}
            ></Item>
          </Pressable>
        )}

        {visible && (
          <View
            style={{
              width: 200,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              gap: 30,
            }}
          >
            <TextoInput
              value={text}
              onChangeText={(value: string) => {
                setText(value);
              }}
              style={{
                backgroundColor: "#fff",
                padding: 5,
                fontSize: 16,
                width: "100%",
              }}
            />
            <Pressable
              onPress={() => {
                console.log(text);
                setApiUrl(text);
                setVisible(false);
              }}
              style={{ backgroundColor: "#545454", padding: 10 }}
            >
              <Text>SALVAR</Text>
            </Pressable>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Carrossel;
