import React, { useState } from "react";
//import { View, Image, StatusBar, Text, Dimensions } from "react-native";
import { View, Image, StatusBar, Text, Dimensions } from "react-native";

// import Carousel from "react-native-snap-carousel";

import { carousel } from "./data";
import { ScrollView } from "react-native-gesture-handler";

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
    </ScrollView>
  );
};

export default Carrossel;
