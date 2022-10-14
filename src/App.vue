<template>
  <div id="app">
    <DisplayCostVue />
  </div>
</template>

<script>

import DisplayCostVue from './components/DisplayCost.vue';
import Vue from 'vue';
import DataOutput from './components/DataOutput.vue';
import DisplayAdder from './components/DisplayAdder.vue';
import DisplayPagination from './components/DisplayPagination.vue'
Vue.component("DisplayAdder", DisplayAdder);
Vue.component("DataOutput", DataOutput);
Vue.component("PaginationBlock", DisplayPagination)
export default {
  name: 'App',
  components: {
    DisplayCostVue,
  }
}

</script>

<style lang="scss">
* {
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
