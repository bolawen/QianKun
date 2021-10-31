<template>
<div id="app">
    <el-container>
    <el-aside width="200px">
        <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
        <router-link to="/">
            <el-menu-item index="/">
            <i class="el-icon-menu"></i><span>首页</span>
            </el-menu-item>
        </router-link>
        <router-link to="/vueChildRouter">
            <el-menu-item index="/vueChildRouter">
            <i class="el-icon-menu"></i><span>Vue子应用</span>
            </el-menu-item>
        </router-link>
        <router-link to="/reactChildRouter">
            <el-menu-item index="/reactChildRouter">
            <i class="el-icon-menu"></i><span>React子应用</span>
            </el-menu-item>
        </router-link>
        </el-menu>
    </el-aside>
    <el-main>
        <!-- 主应用容器 -->
        <router-view></router-view>
        <!-- 子应用容器 -->
        <div id="childAppContainer"></div>
    </el-main>
    </el-container>
</div>
</template>

<script>
export default{
    name:'VueMainApp',
    data(){
        return {
        currentMenu:'/',
        }
    },
    computed: {
        activeMenu() {
        const route = this.$route
        const { meta, path } = route
        if (meta.activeMenu) {
            return meta.activeMenu
        }
        return path
        },
    }
}
</script>

<style>
html {
    margin: 0;
    padding: 0;
    height: 100%;
}
body {
    margin: 0;
    padding: 0;
    height: 100%;
}
a {
    text-decoration: none;
    color: #fff;
}
#app {
    width: 100%;
    height: 100%;
}
.el-container {
    height: 100%;
}
.el-menu-vertical {
    height: 100%;
}
.el-menu-item.is-active a {
    color: #ffd04b !important;
}
.el-main {
    margin: 0 !important;
    padding: 0 !important;
}
</style>

