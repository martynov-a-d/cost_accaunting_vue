<template>
  <div id="app">
    <DisplayCostVue />
  </div>
</template>

<script>

import DisplayCostVue from './components/DisplayCost.vue';
export default {
  name: 'App',
  components: {
    DisplayCostVue,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
