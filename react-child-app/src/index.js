import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./public-path";
import actions from './shared/actions'


/**
* @description: 渲染函数
* 1. router 路由: 采用 hash 模式
* 2. container 容器: #reactChildApp 为 html 模板中挂在应用的 ID ，必须一致且唯一，否则子项目无法独立运行
* 3. 运行情况: 主应用在生命周期钩子中运行  /  子应用单独启动时运行
*/
function render(props){
    if(props){
        /**
         * @description: 注入 actions 实例
         * * 说明: 主应用挂在子应用时将会调用 render 方法，所以在 render 方法中将主应用的 actions 示例注入即可。
         */        
        actions.setActions(props);
    }
    ReactDOM.render(<App />,document.getElementById('reactChildApp'));
}

/**
* @description: 处理非 QianKun 环境下的渲染,保证独立运行完整
*/
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

/**
* @description: QianKun bootstrap 生命周期
* *特点: bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap
* *作用: 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等
*/
export async function bootstrap() {
    console.log("ReactMicroApp bootstraped");
}

/**
* @description: QianKun mount 生命周期
* *特点: 应用每次进入都会调用 mount 方法
* *作用: 通常我们在这里触发应用的渲染方法
*/
export async function mount(props) {
    console.log("ReactMicroApp mount", props);
    render(props);
}

/**
* @description: QianKun unmount 生命周期
* *特点: 应用每次 切出/卸载 会调用的方法
* *作用: 通常在这里我们会卸载微应用的应用实例
*/
export async function unmount() {
    console.log("ReactMicroApp unmount");  
    ReactDOM.unmountComponentAtNode(document.getElementById("reactChildApp"));
}
