<template>
  <div id="app">
    <Layout :style="{height: '100vh'}">
      <!-- 头部nav -->
      <app-nav></app-nav>
      <Layout>
        <Sider :style="{background: '#fff'}">
          <!-- slider侧边菜单 -->
          <app-slider></app-slider>
        </Sider>
        <!-- list组件 -->
        <router-view></router-view>
      </Layout>
    </Layout>
  </div>
</template>

<script>

import appNav from './components/common/appnav.vue'
import appSlider from './components/common/appslider.vue'
import appList from './components/list/list.vue'

export default {
  //注册组件
  components: {
    appNav,
    appSlider,
    appList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
