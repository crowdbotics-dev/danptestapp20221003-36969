import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled2 = () => {
  return <View style={_styles.yMHPEyCQ}>
      <Pressable onPress={() => navigation.navigate("Untitled1")} style={_styles.vROlxZoO}><View style={_styles.WAusGhFx}></View></Pressable></View>;
};

export default Untitled2;

const _styles = StyleSheet.create({
  yMHPEyCQ: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  WAusGhFx: {
    left: 60,
    top: 81,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  vROlxZoO: {
    position: "unset"
  }
});