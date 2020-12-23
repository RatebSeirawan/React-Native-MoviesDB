import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Movie } from "../../types";

export type MainParamList = {
  "home-screen": undefined;
  "details-screen": Movie;
};

export type NavigationProps<
  T extends Record<string, any>,
  E extends keyof T
> = StackNavigationProp<T, E>;

export type RouteProps<
  T extends Record<string, any>,
  E extends keyof T
> = RouteProp<T, E>;
