import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

interface Props {
  loading?: React.ReactNode | null;
}

export const StoreProvider: React.FC<Props> = ({ children, loading }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={loading} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

StoreProvider.defaultProps = { loading: null };
