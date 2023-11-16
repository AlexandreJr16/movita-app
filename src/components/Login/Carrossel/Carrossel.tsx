import React, { useState } from "react";
import { View, Image, StatusBar, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;
const SLIDER_HEIGHT = Dimensions.get("window").height;

const ITEM_WIDTH = SLIDER_WIDTH / 2;
const ITEM_HEIGHT = SLIDER_HEIGHT / 3.5;

const Item = ({ item }: { item: { color: string } }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: item.color,
        height: ITEM_HEIGHT,
      }}
    ></View>
  );
};

export const Carrossel = () => {
  const carousel = [
    {
      color: "#1f1f1f",
    },
    {
      color: "#1f1f1f",
    },
    {
      color: "#1f1f1f",
    },
    {
      color: "#1f1f1f",
    },
    {
      color: "#1f1f1f",
    },
    {
      color: "#1f1f1f",
    },
  ];

  return (
    <View>
      <Text style={{ marginBottom: 100 }}>Carrosel</Text>
      <Carousel
        data={carousel}
        renderItem={({ item }) => <Item item={item} />}
        layout={"default"}
        sliderWidth={SLIDER_WIDTH}
        sliderHeight={SLIDER_HEIGHT}
        itemWidth={ITEM_WIDTH}
        loop={true}
      />
    </View>
  );
};

export default Carrossel;
