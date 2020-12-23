module.exports = {
  extends: ["@callstack"],
  rules: {
    "@typescript-eslint/no-unused-vars": 0,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/resolver": {
      "babel-module": {
        alias: {
          navigation: "./src/navigation",
          screens: "./src/screens",
          components: "./src/components",
          store: "./src/store",
          helpers: "./src/helpers",
          constants: "./src/constants",
          api: "./src/api",
        },
      },
    },
  },
};
