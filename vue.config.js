const webpack = require('webpack')

// vue.config.js
module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL || '/',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
      })
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: '3333',
    https: false,
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
