<template>
  <div class="home">
    <h1>QianKun主应用 Home 页面</h1>
    <button @click='communication("12adcdfdf")'>主应用通信</button>
  </div>
</template>

<script>
import actions from '@/shared/actions';
export default {
  name: 'Home',
  mounted(){
  /**
   * @description: 注册一个观察者函数
   * * 第一个参数: 回调函数
   *      * state: 变更后的状态
   *      * prevState: 变更前的状态
   */    
    actions.onGlobalStateChange((state,prevState)=>{
      console.log(state);
      console.log('主应用观察者的 token 改变前的值为:'+prevState.token);
      console.log('主应用观察者的 token 改变后的值为:'+state.token);
    });
  },
  methods:{
    communication(value='子应用通信'){
      actions.setGlobalState({token:value});
    }
  }
}
</script>
