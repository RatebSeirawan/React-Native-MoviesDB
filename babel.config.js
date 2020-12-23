const path = require("path");

const BASE_COMPONENTS = path.resolve(__dirname, "./src/");

module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".json",
          ".svg",
          ".png",
          ".jpg",
        ],
        alias: {
          components: path.resolve(BASE_COMPONENTS, "components"),
          navigation: path.resolve(BASE_COMPONENTS, "navigation"),
          screens: path.resolve(BASE_COMPONENTS, "screens"),
          store: path.resolve(BASE_COMPONENTS, "store"),
          helpers: path.resolve(BASE_COMPONENTS, "helpers"),
          constants: path.resolve(BASE_COMPONENTS, "constants"),
          api: path.resolve(BASE_COMPONENTS, "api"),
        },
      },
    ],
  ],
  presets: ["module:metro-react-native-babel-preset"],
};
