import React from "react";
import { View, Text } from "react-native";
import defaultstyle from "../Config/style";

export default function Apptext({ children, style, ...otherprops }) {
  return (
    <Text style={[defaultstyle.text, style]} {...otherprops}>
      {children}
    </Text>
  );
}
