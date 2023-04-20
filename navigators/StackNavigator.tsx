import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Home} from "../screens";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
