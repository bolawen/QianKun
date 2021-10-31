module.exports = {
  /**
   * @description: 路由采用 hash 模式，需要配置 publicPath 访问路径
  */  
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/vueChildRouter/',
  /**
   * @description: 配置端口号、配置允许本地跨域
  * * 配置端口号: 主应用端口号为 10000 , 且主应用中已配置了子应用端口号为 10001 ,所以要保持端口号一致
  * * 允许跨域: 本地开发中，端口号不一致，所以要允许跨域
  */  
  devServer: {
      port: 10002,
      headers: {
      'Access-Control-Allow-Origin': '*'
      }
  },
  configureWebpack: {
      /**
       * @description: 配置打包文件类型为 umd 
      * * library: 微应用包名
      * * libraryTarget: 将你的 library 暴露为所有的模块定义下都可运行的方式
      * * jsonpFunction: 按需加载相关，设置为 webpackJsonp_vueChildApp 即可
      */  
      output: {
          library: `vueChildApp`,
          libraryTarget: 'umd',
          jsonpFunction: `webpackJsonp_vueChildApp`
      }
  }
}
