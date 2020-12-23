/* eslint-disable no-undef */
// @ts-nocheck
import url from "url";
import Tron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import { NativeModules } from "react-native";
import { DEFAULT_REACTOTRON_CONFIG } from "./reactotron-config";
const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

declare global {
  interface Console {
    tron: typeof Tron;
  }
}

const noop = () => {};

if (__DEV__) {
  console.tron = Tron;
} else {
  console.tron = {
    benchmark: noop,
    clear: noop,
    close: noop,
    configure: noop,
    connect: noop,
    display: noop,
    error: noop,
    image: noop,
    log: noop,
    logImportant: noop,
    onCustomCommand: noop,
    overlay: noop,
    reportError: noop,
    send: noop,
    startTimer: noop,
    storybookSwitcher: noop,
    use: noop,
    useReactNative: noop,
    warn: noop,
  };
}

export const Reactotron = () => {
  const config = {
    ...DEFAULT_REACTOTRON_CONFIG,
    host: hostname,
  };

  if (__DEV__) {
    Tron.configure({
      name: config.name,
      host: config.host,
      port: config.port,
    });

    // Tron.setAsyncStorageHandler(AsyncStorage);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    Tron.useReactNative({
      asyncStorage: undefined,
    });

    Tron.use(reactotronRedux());
    Tron.connect();

    Tron.clear();

    return Tron.createEnhancer();
  }
};
