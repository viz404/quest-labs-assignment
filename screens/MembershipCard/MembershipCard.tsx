import {View, Text, Image} from "react-native";
import React from "react";

const leftImage = require("../../assets/MembershipCard/left-image.png");
const levelImage = require("../../assets/MembershipCard/level-black.png");
const xpImage = require("../../assets/MembershipCard/xp-black.png");
const eggsImage = require("../../assets/MembershipCard/eggs-black.png");
const QRCode = require("../../assets/MembershipCard/qr.png");
const backgroundImage = require("../../assets/MembershipCard/background-image.png");

export default function MembershipCard() {
  const Levels = 3;
  const XP = 300;
  const Eggs = 5;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fcf8f7",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View
        style={{
          position: "relative",
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: 20,
          backgroundColor: "white",
          elevation: 3,
          flexDirection: "row",
          gap: 10,
          width: "80%",
        }}>
        <Image source={leftImage} resizeMode="contain" style={{height: 130}} />
        <View>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}>
            The Original Hot Chicken
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginVertical: 20,
              gap: 15,
            }}>
            <View
              style={{
                alignItems: "center",
              }}>
              <Image source={levelImage} resizeMode="contain" />
              <Text style={{color: "black", fontSize: 11}}>
                {Levels} Levels
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}>
              <Image source={xpImage} resizeMode="contain" />
              <Text style={{color: "black", fontSize: 11}}>{XP} XP</Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}>
              <Image source={eggsImage} resizeMode="contain" />
              <Text style={{color: "black", fontSize: 11}}>{Eggs} Eggs</Text>
            </View>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={{flex: 1, color: "black", fontSize: 9}}>
              Scan the QR Code Now to get more details!
            </Text>
            <Image source={QRCode} resizeMode="contain" style={{flex: 1}} />
          </View>
        </View>
        <Image
          source={backgroundImage}
          resizeMode="contain"
          style={{position: "absolute", bottom: -3, right: -5, height: 100}}
        />
      </View>
    </View>
  );
}
