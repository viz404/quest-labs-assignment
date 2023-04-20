import {View, Text, Image} from "react-native";
import React from "react";

const background_white = require("../../assets/Badge/background-white.png");
const background_pink = require("../../assets/Badge/background-pink.png");
const background_black = require("../../assets/Badge/background-black.png");
const lock = require("../../assets/Badge/lock.png");

type BadgeType = {
  image: any;
  title: string;
  locked?: boolean;
};

export default function Badge({image, title, locked}: BadgeType) {
  return (
    <View
      style={{
        position: "relative",
        height: 120,
        width: 120,
      }}>
      <Image
        source={background_white}
        style={{position: "absolute", height: 120, alignSelf: "center"}}
        resizeMode="contain"
      />
      <Image
        source={background_pink}
        style={{
          position: "absolute",
          height: 75,
          alignSelf: "center",
          top: 19,
        }}
        resizeMode="contain"
      />
      <Image
        source={image}
        style={{
          position: "absolute",
          height: 60,
          alignSelf: "center",
          top: 30,
        }}
        resizeMode="contain"
      />
      {locked && (
        <>
          <Image
            source={background_black}
            style={{
              position: "absolute",
              height: 75,
              alignSelf: "center",
              top: 19,
            }}
            resizeMode="contain"
          />
          <Image
            source={lock}
            style={{
              position: "absolute",
              height: 60,
              alignSelf: "center",
              top: 25,
            }}
            resizeMode="contain"
          />
        </>
      )}
      <Text
        style={{
          color: "black",
          position: "absolute",
          bottom: -10,
          alignSelf: "center",
        }}>
        {title}
      </Text>
    </View>
  );
}
