import * as React from "react";
import { View, ViewStyle } from "react-native";
import { ActivityIndicator as PaperActivityIndicator } from "react-native-paper";

interface Props {
  visible: boolean;
}

export const ActivityIndicator: React.FC<Props> = ({ visible }) => {
  return visible ? (
    <View style={contaienrStyle}>
      <PaperActivityIndicator size="large" />
    </View>
  ) : null;
};

const contaienrStyle: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};
