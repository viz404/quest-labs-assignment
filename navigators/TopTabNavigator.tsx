import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import {Badges, MembershipCard} from "../screens";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Badges" component={Badges} />
      <TopTab.Screen name="MembershipCard" component={MembershipCard} />
    </TopTab.Navigator>
  );
}
