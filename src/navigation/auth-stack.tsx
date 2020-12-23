import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainParamList } from "./types";
import { HomeScreen } from "screens";

const Stack = createStackNavigator<MainParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home-screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home-screen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
