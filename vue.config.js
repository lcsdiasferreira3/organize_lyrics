module.exports = {
  transpileDependencies: ["vuetify"],

  devServer: {
    proxy: {
      "/musixmatch": {
        //CORS PROBLEM
        ws: true,
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
        pathRewrite: { "/musixmatch": "/" },
        target: "http://api.musixmatch.com/ws/1.1",
      },
    },
  },
};
