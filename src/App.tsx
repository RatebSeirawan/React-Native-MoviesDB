import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { RootNavigator } from "navigation";
import { StoreProvider } from "store";

export default () => {
  return (
    <StoreProvider>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </StoreProvider>
  );
};
