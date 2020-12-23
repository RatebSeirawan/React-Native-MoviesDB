import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "navigation/main-stack";

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

RootNavigator.displayName = "RootNavigator";
