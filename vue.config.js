const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    proxy: {
      "/api": {
        target: 'http://192.168.1.6:8080',
        secure: true,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    },
    before: () => { }
  },
  // 第三方插件配置
  pluginOptions: {

  },
  configureWebpack: {
    devtool: 'source-map'
  },
  //配置绝对路径
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
  }
};