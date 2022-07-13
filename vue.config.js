module.exports = {
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://119.23.73.240',
  //       // 允许跨域
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/element-variables.scss";`
      }
    }
  }
}