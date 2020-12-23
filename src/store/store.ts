import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
  Store,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { Action } from "@reduxjs/toolkit";
import Thunk, { ThunkAction } from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";
import mainReducer from "./slice/main-slice";
import { Reactotron } from "helpers";

let store: Store;

const conf = { blacklist: ["chat", "modal"] };

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  ...conf,
};

const rootReducer = combineReducers({
  main: mainReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
if (__DEV__) {
  const reactotronMiddleware = Reactotron();
  // @ts-ignore
  store = createStore(
    persistedReducer,
    compose(applyMiddleware(Thunk), reactotronMiddleware)
  );
} else {
  store = createStore(persistedReducer, compose(applyMiddleware(Thunk)));
}

const persistor = persistStore(store);

// persistor.purge();
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export { store, persistor };
