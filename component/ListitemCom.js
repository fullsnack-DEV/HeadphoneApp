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
  const scale = ScrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.Image
          source={imageUri}
          style={[styles.imgstyle, { transform: [{ scale }] }]}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.description}>{description}</Text>
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
    color: "#444",
    textTransform: "uppercase",
    fontSize: 24,
    letterSpacing: 2,
    marginBottom: 5,
    fontWeight: "800",
    fontFamily: "nunito-bold",
  },
  description: {
    color: "#ccc",
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
