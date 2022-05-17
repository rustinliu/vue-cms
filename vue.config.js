module.exports = {
  // publicPath: "./"  // 如果是在本地测试打包文件的话 可以开启，部署到服务器要关闭,
  outputDir: "./build",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  }
};
