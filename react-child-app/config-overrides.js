module.exports = {
  /**
       * @description: 配置打包文件类型为 umd 
      * * library: 微应用包名
      * * libraryTarget: 将你的 library 暴露为所有的模块定义下都可运行的方式
      * * jsonpFunction: 按需加载相关，设置为 webpackJsonp_vueChildApp 即可
      */  
      webpack: (config) => {
      config.output.library = 'reactChildApp'
      config.output.libraryTarget = 'umd'
      config.output.jsonpFunction =  `webpackJsonp_reactChildApp`
      config.output.publicPath = process.env.NODE_ENV === 'development' ? '/' : '/reactRouter/';
      return config
      },
      /**
       * @description: 配置允许本地跨域
      * * 允许跨域: 本地开发中，端口号不一致，所以要允许跨域
      */  
      devServer: (configFunction) => {
      return function(proxy, allowedHost) {
          const config = configFunction(proxy, allowedHost)
          config.headers = {
          'Access-Control-Allow-Origin': '*'
          }
          config.open = false;
          return config
      }
      }
  }
  