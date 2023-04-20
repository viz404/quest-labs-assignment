import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Home} from "../screens";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
    </BottomTab.Navigator>
  );
}
