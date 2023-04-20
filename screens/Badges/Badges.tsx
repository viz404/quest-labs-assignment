import {View, Text} from "react-native";
import React from "react";
import {Badge} from "../../components";

const Digital_Devotee = require("../../assets/Badge/digital-devotee.png");
const Pickup_Master = require("../../assets/Badge/pickup-master.png");
const Flavor_Finder = require("../../assets/Badge/flavor-finder.png");

const Foodie = require("../../assets/Badge/foodie.png");
const Follow_Fan = require("../../assets/Badge/follow-fan.png");
const Delivery_Pro = require("../../assets/Badge/delivery-pro.png");

export default function Badges() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fcf8f7",
        justifyContent: "center",
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 10,
        }}>
        <Badge image={Digital_Devotee} title="Digital Devotee" />
        <Badge image={Pickup_Master} title="Pickup Master" />
        <Badge image={Flavor_Finder} title="Flavor Finder" locked={true} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 10,
        }}>
        <Badge image={Foodie} title="Foodie" />
        <Badge image={Follow_Fan} title="Follow Fan" />
        <Badge image={Delivery_Pro} title="Delivery Pro" locked={true} />
      </View>
    </View>
  );
}
