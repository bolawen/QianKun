import shared from '@/shared'
const apps=[
  {
      name:'vueChilApp',// 必选，微应用的名称，微应用之间必须确保唯一
      entry:'http://localhost:10002',// - 必选，微应用的入口
      container:'#childAppContainer',// -必选，微应用的容器节点的选择器或者 Element 实例
      activeRule:'/vueChildRouter',// - 必选，微应用的激活规则
      props:()=>{return {msg:"Vue 主应用 传给 Vue 子应用的值",shared}}
  },
  {
      name:'reactChilApp',// 必选，微应用的名称，微应用之间必须确保唯一
      entry:'http://localhost:10003',// - 必选，微应用的入口
      container:'#childAppContainer',// -必选，微应用的容器节点的选择器或者 Element 实例
      activeRule:'/reactChildRouter',// - 必选，微应用的激活规则
      props:()=>{return {msg:"Vue 主应用 传给 React 子应用的值",shared}}
  },
]
export default apps;
