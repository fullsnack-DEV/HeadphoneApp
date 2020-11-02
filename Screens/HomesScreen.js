import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  Animated,
} from "react-native";
const WIDTH = Dimensions.get("window").width;

const HEIGHT = Dimensions.get("window").height;

const LOGO_WIDTH = 220;

const LOGO_HEIGHT = 40;

const TICKER_HEIGHT = 50;

const CIRCLE_SIZE = WIDTH * 0.6;

import data from "../Data/data";

import ListitemCom from "../component/ListitemCom";

const Circle = ({ ScrollX }) => {
  return (
    <View style={[styles.circleContainer, StyleSheet.absoluteFillObject]}>
      {data.map(({ dotBg }, index) => {
        const inputRange = [
          (index - 0.55) * WIDTH,
          index * WIDTH,
          (index + 0.55) * WIDTH,
        ];
        const scale = ScrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: "clamp",
        });

        const opacity = ScrollX.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              { opacity, backgroundColor: dotBg, transform: [{ scale }] },
            ]}
          />
        );
      })}
    </View>
  );
};

const Ticker = ({ ScrollX }) => {
  const inputRange = [-WIDTH, 0, WIDTH];
  const translateY = ScrollX.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
  });

  return (
    <View style={styles.tickercontainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map(({ type }, index) => {
          return (
            <Text key={index} style={styles.tickertxt}>
              {type}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default function HomesScreen({}) {
  const ScrollX = useRef(new Animated.Value(0)).current; //Intializing the new animated.Value. We will then map this SCrollX to the flatlist so that we can aimate it.

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" hidden />
        <Circle ScrollX={ScrollX} />
        <Animated.FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ListitemCom {...item} index={index} ScrollX={ScrollX} />
          )}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: ScrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16} // To get a 60 FPS .
        />
        <Image
          style={styles.logo}
          source={require("../assets/img/ue_black_logo.png")}
        />
      </View>

      <Ticker ScrollX={ScrollX} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8fB0bc",
  },
  logo: {
    opacity: 0.9,
    position: "absolute",
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: "contain",
    left: 10,
    bottom: 10,
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotateZ: "-90deg" },
      { translateX: LOGO_WIDTH / 2 },
      { translateY: LOGO_HEIGHT / 2 },
    ],
  },
  tickercontainer: {
    position: "absolute",
    top: 50,
    left: 20,
    overflow: "hidden",
    height: TICKER_HEIGHT,
  },
  tickertxt: {
    fontSize: TICKER_HEIGHT / 1.5,
    lineHeight: TICKER_HEIGHT,
    textTransform: "uppercase",
    letterSpacing: 2,
    fontWeight: "800",
    fontFamily: "nunito-bold",
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: "absolute",
    top: HEIGHT / 8,
  },
});
