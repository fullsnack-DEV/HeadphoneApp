import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
const WIDTH = Dimensions.get("window").width;

const HEIGHT = Dimensions.get("window").height;

import data from "../Data/data";

import ListitemCom from "../component/ListitemCom";

export default function HomesScreen({}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" hidden />

        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ListitemCom {...item} />}
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
