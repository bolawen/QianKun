import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./public-path";
import SharedModule from './shared/index';

/**
* @description: 渲染函数
* 1. container 容器: #vueChildApp 为 html 模板中挂在应用的 ID ，必须一致且唯一，否则子项目无法独立运行
*/
function render(props={}){
     /**
     * @description: shared 的两种情况
     * a. 当传入的 shared 为空时，使用子应用自身的 shared
     * b. 当传入的 shared 不为空时，主应用传入的 shared 将会重载子应用的 shared
     */    
    const { shared = SharedModule.getShared() } = props;
    SharedModule.overloadShared(shared);
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
