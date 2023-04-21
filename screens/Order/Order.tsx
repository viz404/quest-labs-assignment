import {View, Text} from "react-native";
import React from "react";

export default function Order() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fcf8f7",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{color: "black", fontSize: 18}}>Orders</Text>
    </View>
  );
}
