<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import enquireScreen from './utils/device'
export default {
  name: 'App',
  created () {
    let _this = this
    enquireScreen(isMobile => {
      _this.$store.commit('setting/setDevice', isMobile)
    })
  }
}
</script>

<style>
body,html{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
}
*{
  box-sizing: border-box
}
.container{
  width: 100%;
}
</style>
