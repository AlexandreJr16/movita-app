import React, { useState } from "react";
import { View, Image, StatusBar, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH / 2;

const Item = ({ item }: { item: { text: string } }) => {
  return (
    <View style={{ width: "100%", backgroundColor: "#1f1f1f" }}>
      <Text style={{ color: "#fff" }}>{item.text}</Text>
    </View>
  );
};

export const Carrossel = () => {
  const carousel = [
    {
      text: "Text 1",
    },
    {
      text: "Text 2",
    },
    {
      text: "Text 3",
    },
    {
      text: "Text 4",
    },
    {
      text: "Text 5",
    },
    {
      text: "Text 6",
    },
  ];

  return (
    <View>
      <Text style={{ marginBottom: 100 }}>Carrosel</Text>
      <Carousel
        data={carousel}
        renderItem={Item}
        layout={"default"}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        loop={true}
      />
    </View>
  );
};

export default Carrossel;
