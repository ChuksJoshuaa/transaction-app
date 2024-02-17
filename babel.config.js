var path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            resolver: path.resolve(__dirname, "resolver/react-native"),
          },
        },
      ],

      "react-native-reanimated/plugin",
    ],
  };
};
