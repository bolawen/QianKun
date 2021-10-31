module.exports = {
  // hash 模式下可使用
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/mainApp/',
  devServer: {
      port: 10001,
  },
}