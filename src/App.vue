<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">主页</router-link> |
        <router-link :to="{name:'about'}" >tab切换页</router-link> |
        <router-link :to="{name:'嵌套父路由'}">第三个</router-link> |
    </div>
        <transition-group >
             <router-view key="texiao"/>
        </transition-group >

  </div>
</template>
<script>
export default {
    
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
