import { registerMicroApps,  start } from 'qiankun';

import apps from './app';

/**
* @description: 注册子应用
*/
function registerApps() {
registerMicroApps(
    apps,
    {
    beforeLoad: [
        loadApp => {
        console.log('vue 主应用 正在加载的子应用', loadApp);
        },
    ],
    beforeMount: [
        mountApp => {
        console.log('vue 主应用 正在挂载的子应用', mountApp);
        },
    ],
    afterMount: [
        mountApp => {
        console.log('vue 主应用 挂载完成的子应用', mountApp);
        },
    ],
    afterUnmount: [
        unloadApp => {
        console.log('vue 主应用 卸载完成的子应用', unloadApp);
        },
    ],
    },
);
start({
    // prefetch: true, // 可选，是否开启预加载，默认为 true。
    // sandbox: true, // 可选，是否开启沙箱，默认为 true。//从而确保微应用的样式不会对全局造成影响。
    // singular: true, // 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。
    // fetch: () => {}, // 可选，自定义的 fetch 方法。
    // getPublicPath: (url) => { console.log(url); },
    // getTemplate: (tpl) => { console.log(tpl); },
    // excludeAssetFilter: (assetUrl) => { console.log(assetUrl); }, // 可选，指定部分特殊的动态加载的微应用资源（css/js) 不被qiankun 劫持处理
});
}

export default registerApps;
