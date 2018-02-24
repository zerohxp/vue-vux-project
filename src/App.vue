<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import './assets/css/style.css';
body {
  background-color: #fbf9fe;
}
#app{
  height: 100%;
}
</style>
