<template>
  <div id="app">
    <!-- <DisplayCostVue /> -->
    <router-link to="/dashboard/1">Dashboard</router-link>
    <router-link to="/add/payment/addNewCost">Add COST</router-link>
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script>

import DisplayCostVue from './components/DisplayCost.vue'
import Vue from 'vue'
import DataOutput from './components/DataOutput.vue'
import DisplayAdder from './components/DisplayAdder.vue'
import DisplayPagination from './components/DisplayPagination.vue'
import DisplayCategoryVue from './components/DisplayCategory.vue'
import { mapActions } from 'vuex'
import ModalWindow from "@/components/ModalWindow.vue";
Vue.component("DisplayCostVue", DisplayCostVue)
Vue.component("DisplayAdder", DisplayAdder)
Vue.component("DataOutput", DataOutput)
Vue.component("DisplayPagination", DisplayPagination)
Vue.component("DisplayCategoryVue", DisplayCategoryVue)
Vue.component("ModalWindow", ModalWindow)
export default {
  name: 'App',
  components: {},
  created() {
    this.getPaymentListData()
    this.getCategoryList()
  },
  methods: {
    ...mapActions([
      'getPaymentListData',
      'getCategoryList'
    ])
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
