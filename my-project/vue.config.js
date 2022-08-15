const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      mock: {
        target: "https://www.fastmock.site",
      },
    },
  },
});
