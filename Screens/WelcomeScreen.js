import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Apptext from "../component/Apptext";
import { LinearGradient } from "expo-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ButtonCom from "../component/button";

import Color from "../Config/color";
import { Colors } from "react-native/Libraries/NewAppScreen";

const WIDTH = Dimensions.get("window").width;

const HEIGHT = Dimensions.get("window").height;

export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#5fB0CB", "#484BAA"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View style={{ flex: 1 }}>
          <Apptext style={styles.logo}>me.</Apptext>
          <Apptext style={styles.subheading}>WireLess</Apptext>
          <View style={styles.headingContainer}>
            <Text style={styles.heading1}>Head-</Text>
            <Text style={styles.heading2}>phones</Text>
          </View>

          <StatusBar colors="dark" />
          <Image
            style={styles.image}
            source={require("../assets/img/Headphone.png")}
          />
          <View style={styles.footer}>
            <ButtonCom title="Next !" navigation={navigation}></ButtonCom>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    height: hp("80%"),
    width: wp("130%"),
    position: "absolute",
    top: hp("8%"),
    left: wp("0%"),
    resizeMode: "contain",
    flex: 1,
  },
  heading1: {
    color: Color.white,
    fontSize: hp("9%"),
    fontFamily: "nunito-bold",
    zIndex: 1,

    fontWeight: "900",
  },
  heading2: {
    color: Color.white,
    fontSize: hp("9%"),
    zIndex: 1,
    fontFamily: "nunito-bold",
    top: hp("-5%"),
  },
  headingContainer: {
    top: hp("15%"),
    left: wp("15%"),
  },
  logo: {
    fontSize: hp("5%"),
    fontFamily: "nunito-bold",
    color: Color.white,
    left: wp("5%"),
    position: "absolute",
  },
  subheading: {
    fontSize: hp("5%"),
    transform: [
      {
        rotateZ: "270deg",
      },
    ],
    top: HEIGHT / 5,

    right: WIDTH * 0.42,
    textTransform: "uppercase",
    color: Color.white,
    fontFamily: "nunito-bold",
  },
  footer: {
    flex: 1,
    position: "absolute",
    top: HEIGHT / 1.2,
    alignSelf: "center",
  },
});

//To make a Linear gradient diagonal we have to pass the extra props to the LinearGradient component.
//Start and End with the help of it w can customize the behaviour of the linear gradient.
