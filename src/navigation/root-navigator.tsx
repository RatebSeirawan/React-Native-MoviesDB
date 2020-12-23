import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "navigation/auth-stack";

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

RootNavigator.displayName = "RootNavigator";
