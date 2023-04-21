import {Text, View} from "react-native";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Home, Order} from "../screens";
import TopTabNavigator from "./TopTabNavigator";

import Foundation from "react-native-vector-icons/Foundation";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <View style={{flex: 1, backgroundColor: "#fcf8f7"}}>
      <BottomTab.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarStyle: {
            width: "90%",
            borderRadius: 20,
            alignSelf: "center",
            margin: 10,
            backgroundColor: "black",
            elevation: 0,
            height: "9%",
          },
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <>
                {focused ? (
                  <Foundation name="home" size={22} color={color} />
                ) : (
                  <Octicons name="home" size={22} color={color} />
                )}
                <Text style={{color: "white", fontSize: 10}}>Home</Text>
              </>
            ),
          }}
        />
        <BottomTab.Screen
          name="Order"
          component={Order}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <>
                {focused ? (
                  <MaterialIcons name="shopping-bag" size={22} color={color} />
                ) : (
                  <SimpleLineIcons name="bag" size={22} color={color} />
                )}
                <Text style={{color: "white", fontSize: 10}}>Order</Text>
              </>
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={TopTabNavigator}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <>
                {focused ? (
                  <FontAwesome name="user" size={22} color={color} />
                ) : (
                  <FontAwesome name="user-o" size={22} color={color} />
                )}
                <Text style={{color: "white", fontSize: 10}}>Profile</Text>
              </>
            ),
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
}
