<template>
  <div id="app">
    <lheader></lheader>
    <banner></banner>
    <lmain></lmain>
    <lfooter></lfooter>
  </div>
</template>

<script>
import lheader from './components/header/header.vue'
import banner from './components/banner/banner.vue' 
import lmain from './components/main/main.vue' 
import lfooter from './components/footer/footer.vue' 
export default {
  name: 'App',
  components:{
    lheader,
    banner,
    lmain,
    lfooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
*{
  margin: 0;
  padding: 0;
}

</style>
