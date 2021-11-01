<template>
  <div class="home">
    <h1>QianKun主应用 Home 页面</h1>
    <button @click='communication'>主应用通信</button>
  </div>
</template>

<script>
import shared from "../shared"
export default {
  name: 'Home',
  methods:{
    communication(){
      shared.setToken('123456+主应用');
    }
  }
}
</script>
