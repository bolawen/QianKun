<template>
  <div id="app">
    <h1>QianKun Vue 子应用 首页</h1>
  </div>
</template>

<script>
import SharedModule from '@/shared'
export default{
  name:'VueChildApp',
  mounted(){
    const shared=SharedModule.getShared();
    const token=shared.getToken();
    console.log(token);
  }
}
</script>