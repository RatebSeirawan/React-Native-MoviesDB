export interface ReactotronConfig {
  /** The name of the app. */
  name?: string;
  /** The host to connect to: default 'localhost'. */
  host?: string;
  /** The port to connect to. */
  port?: number;
  /** Should we use async storage */
  useAsyncStorage?: boolean;
  /** Should we clear Reactotron when load? */
  clearOnLoad?: boolean;
  /** Root state logging. */
  state?: {
    /** log the initial data that we put into the state on startup? */
    initial?: boolean;
    /** log snapshot changes. */
    snapshots?: boolean;
  };
}

/**
 * The default Reactotron configuration.
 */
export const DEFAULT_REACTOTRON_CONFIG: ReactotronConfig = {
  name: "5min test",
  port: 9090,
  clearOnLoad: true,
  host: "localhost",
  useAsyncStorage: true,
  state: {
    initial: true,
    snapshots: false,
  },
};
