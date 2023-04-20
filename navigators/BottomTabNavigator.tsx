import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Home, Order} from "../screens";
import TopTabNavigator from "./TopTabNavigator";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Order" component={Order} />
      <BottomTab.Screen name="Profile" component={TopTabNavigator} />
    </BottomTab.Navigator>
  );
}
