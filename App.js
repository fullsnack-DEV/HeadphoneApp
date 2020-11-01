import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { AppLoading } from "expo";

import * as Font from "expo-font";

//Screens
import WelcomeScreen from "./Screens/WelcomeScreen";

import Homescreen from "./Screens/HomesScreen";

//Main Code

const Stack = createStackNavigator();

const getFont = () => {
  return Font.loadAsync({
    "nunito-bold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "nunito-italic": require("./assets/fonts/Nunito-Italic.ttf"),
    "nunito-bold-italic": require("./assets/fonts/Nunito-BoldItalic.ttf"),
    "nunito-light": require("./assets/fonts/Nunito-LightItalic.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Homescreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontLoaded(true)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
