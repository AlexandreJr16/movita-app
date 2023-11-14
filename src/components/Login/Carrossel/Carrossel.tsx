import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const Item = ({ item }: { item: { image: string } }) => {
  return (
    <View style={styles.slide}>
      <Image source={{ uri: item.image }} style={{ width: 300, height: 300 }} />
    </View>
  );
};

export const Carrossel = () => {
  const carousel = [
    {
      image: "https://i.imgur.com/SsJmZ9jl.jpg",
    },
    {
      image: "https://i.imgur.com/5tj6S7Ol.jpg",
    },
    {
      image: "https://i.imgur.com/pmSqIFZl.jpg",
    },
    {
      image: "https://i.imgur.com/cA8zoGel.jpg",
    },
    {
      image: "https://i.imgur.com/pewusMzl.jpg",
    },
    {
      image: "https://i.imgur.com/l49aYS3l.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={"rgba(0, 0, 0, 0.3)"}
          barStyle={"light-content"}
        />
        <Text style={styles.title}>Carrosel</Text>
        <Carousel
          data={carousel}
          renderItem={Item}
          sliderWidth={300}
          itemWidth={300}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={1}
          enableMomentum={true}
          activeSlideAlignment={"start"}
          activeAnimationType={"spring"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1a1917",
  },
  container: {
    flex: 1,
    backgroundColor: "#B721FF",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  slide: {
    backgroundColor: "floralwhite",
    borderRadius: 5,
    height: 250,
  },
  title: {
    fontSize: 60,
    paddingVertical: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  scrollview: {
    flex: 1,
  },
});

export default Carrossel;
