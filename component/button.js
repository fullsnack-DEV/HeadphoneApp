import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AntDesign } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;

const HEIGHT = Dimensions.get("window").height;

import colors from "../Config/color";

export default function button({ title, onPress, style, navigation }) {
  return (
    <LinearGradient
      colors={["#41295a", "#2F0743"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={[styles.btn, style]}
      >
        <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    width: WIDTH / 3,
    height: HEIGHT / 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    flexBasis: "auto",
  },
  txt: {
    fontSize: 20,
    alignSelf: "center",
    color: colors.white,
    fontFamily: "nunito-bold",
  },
  gradient: {
    borderRadius: 50,
  },
});
