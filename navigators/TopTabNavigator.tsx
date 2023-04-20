import {Image, Pressable, Text, View} from "react-native";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import {Badges, MembershipCard} from "../screens";

const vertical_line = require("../assets/TopTabNavigator/vertical-line.png");
const user_icon = require("../assets/TopTabNavigator/user-icon.png");
const settings = require("../assets/TopTabNavigator/settings.png");
const xp_red = require("../assets/TopTabNavigator/xp-red.png");
const level_red = require("../assets/TopTabNavigator/level-red.png");
const eggs_red = require("../assets/TopTabNavigator/eggs-red.png");

const TopTab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  const userName = "Anna Smith";
  const XP = 300;
  const Level = 3;
  const Eggs = 5;
  return (
    <TopTab.Navigator
      tabBar={({navigation, state}) => (
        <View
          style={{
            backgroundColor: "white",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            elevation: 1,
          }}>
          <View
            style={{
              alignItems: "center",
              position: "relative",
              marginTop: 10,
            }}>
            <Image
              source={user_icon}
              style={{height: 120}}
              resizeMode="contain"
            />
            <Image
              source={settings}
              style={{position: "absolute", top: 10, right: 10, height: 20}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 17, color: "black"}}>{userName}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 20,
              marginTop: 15,
              marginBottom: 5,
            }}>
            <View
              style={{
                alignItems: "center",
                gap: 5,
              }}>
              <Image
                source={xp_red}
                resizeMode="contain"
                style={{height: 20}}
              />
              <Text style={{color: "black"}}>{XP} XP</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                gap: 5,
              }}>
              <Image
                source={level_red}
                resizeMode="contain"
                style={{height: 20}}
              />
              <Text style={{color: "black"}}>{Level} Level</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                gap: 5,
              }}>
              <Image
                source={eggs_red}
                resizeMode="contain"
                style={{height: 20}}
              />
              <Text style={{color: "black"}}>{Eggs} Eggs</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
              padding: 10,
            }}>
            <View style={{width: "40%", alignItems: "center"}}>
              <Pressable onPress={() => navigation.navigate("Badges")}>
                <Text style={[state.index == 0 && {color: "red"}]}>BADGES</Text>
              </Pressable>
            </View>
            <Image source={vertical_line} />
            <View style={{width: "40%", alignItems: "center"}}>
              <Pressable onPress={() => navigation.navigate("MembershipCard")}>
                <Text style={[state.index == 1 && {color: "red"}]}>
                  MEMBERSHIP CARD
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}>
      <TopTab.Screen name="Badges" component={Badges} />
      <TopTab.Screen name="MembershipCard" component={MembershipCard} />
    </TopTab.Navigator>
  );
}
