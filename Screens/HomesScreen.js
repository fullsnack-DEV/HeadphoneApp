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

import data from "../Data/data";

import ListitemCom from "../component/ListitemCom";

export default function HomesScreen({}) {
  const ScrollX = useRef(new Animated.Value(0)).current; //Intializing the new animated.Value. We will then map this SCrollX to the flatlist so that we can aimate it.

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" hidden />

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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
