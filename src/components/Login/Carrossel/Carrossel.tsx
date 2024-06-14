import React, { useState } from "react";
//import { View, Image, StatusBar, Text, Dimensions } from "react-native";
import { View, Image, StatusBar, Text, Dimensions } from "react-native";

import Carousel from "react-native-snap-carousel";
import GaveteiroAzul from "../../../assents/Login/GaveteiroAzul";
import GaveteiroCreme from "../../../assents/Login/GaveteiroCreme";
import GaveteiroVermelho from "../../../assents/Login/GaveteiroVermelho";
import Texto from "../../Default/texto/Texto";
import { carousel } from "./data";

const SLIDER_WIDTH = Dimensions.get("window").width;
const SLIDER_HEIGHT = Dimensions.get("window").height;

const ITEM_WIDTH = SLIDER_WIDTH / 2;
const ITEM_HEIGHT = SLIDER_HEIGHT / 3.2;

const Item = ({ item }: { item: { color: string; img: any } }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: item.color,
        height: ITEM_HEIGHT,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
      }}
    >
      {item.img}
    </View>
  );
};

export const Carrossel = () => {
  return (
    <View>
      <Carousel
        data={carousel}
        renderItem={({ item }) => <Item item={item} />}
        layout={"default"}
        sliderWidth={SLIDER_WIDTH}
        sliderHeight={SLIDER_HEIGHT}
        itemWidth={ITEM_WIDTH}
        itemHeight={ITEM_HEIGHT}
        loop={true}
        inactiveSlideOpacity={1}
        autoplay={true}
        autoplayInterval={5000}
      />
    </View>
  );
};

export default Carrossel;
