import {createNativeStackNavigator} from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
