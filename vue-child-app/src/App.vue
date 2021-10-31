<template>
  <div id="app">
    <h1>QianKun Vue 子应用 首页</h1>
    <button @click="communication">子应用通信</button>
  </div>
</template>

<script>
import actions from "@/shared/actions";
export default {
  name: "vueChildApp",
  mounted() {
    /**
     * @description: 注册观察者函数
     * * 参数一: 回调函数
     * * 参数二: boolean 表示是否立即执行依次观察者函数
     */
    actions.onGlobalStateChange((state, prevState) => {
      console.log(state);
      console.log("子应用观察者的 token 改变前的值为:" + prevState.token);
      console.log("子应用观察者的 token 改变后的值为:" + state.token);
    }, true);
  },
  methods: {
    communication() {
      actions.setGlobalState({ token: "abcdefg" });
    },
  },
};
</script>
