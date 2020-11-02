import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
} from "react-native";
import data from "../Data/data";

const WIDTH = Dimensions.get("window").width;

const HEIGHT = Dimensions.get("window").height;

export default function ListitemCom({
  imageUri,
  heading,
  description,
  index,
  ScrollX,
}) {
  //We have to create a Input range so that we can scale the image.
  const inputRange = [(index - 1) * WIDTH, index * WIDTH, (index + 1) * WIDTH];
  const inputRangeOpacity = [
    (index - 0.2) * WIDTH,
    index * WIDTH,
    (index + 0.2) * WIDTH,
  ];
  const scale = ScrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateXheading = ScrollX.interpolate({
    inputRange,
    outputRange: [WIDTH * 0.2, 0, -WIDTH * 0.2],
  });

  const translateXdescription = ScrollX.interpolate({
    inputRange,
    outputRange: [WIDTH * 0.8, 0, -WIDTH * 0.8],
  });
  const opacity = ScrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.Image
          source={imageUri}
          an
          style={[styles.imgstyle, { transform: [{ scale }] }]}
        />
        <View style={styles.textcontainer}>
          <Animated.Text
            style={[
              styles.heading,
              {
                opacity,
                transform: [{ translateX: translateXheading }],
              },
            ]}
          >
            {heading}
          </Animated.Text>
          <Animated.Text
            style={[
              styles.description,
              {
                opacity,
                transform: [{ translateX: translateXdescription }],
              },
            ]}
          >
            {description}
          </Animated.Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgstyle: {
    height: WIDTH * 0.75,
    width: WIDTH * 0.75,
    resizeMode: "contain",
    flex: 1,
  },

  container: {
    alignContent: "center",
    alignItems: "center",
    width: WIDTH,
    height: HEIGHT,
  },

  textcontainer: {
    alignItems: "flex-start",
    alignSelf: "flex-end",
    flex: 0.5,
  },
  heading: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 24,
    letterSpacing: 2,
    marginBottom: 5,
    fontWeight: "800",
    fontFamily: "nunito-bold",
  },
  description: {
    color: "#000",
    fontWeight: "600",
    textAlign: "left",
    width: WIDTH * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
    fontFamily: "nunito-bold",
  },
});

//To aimate the headphone image using the a imated API
