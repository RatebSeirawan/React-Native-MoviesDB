import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainParamList } from "./types";
import { HomeScreen, DetailsScreen } from "screens";

const Stack = createStackNavigator<MainParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home-screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen name="details-screen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
