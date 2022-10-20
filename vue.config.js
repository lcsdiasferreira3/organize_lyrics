module.exports = {
  transpileDependencies: ["vuetify"],

  devServer: {
    proxy: {
      "/vagalume": {
        //CORS PROBLEM
        ws: true,
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
        pathRewrite: { "/vagalume": "/" },
        target: "https://api.vagalume.com.br/",
      },
    },
  },
};
