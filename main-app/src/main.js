import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import registerApps from './qiankun.config'

Vue.use(ElementUI);
Vue.config.productionTip = false

const MainApp=new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


/**
* @description: 确保装载子应用的容器已创建，我们需要在 new Vue（）之后，等DOM加载好了在注册并启动qiankun
*/
MainApp.$nextTick(()=>{
registerApps();
});
