<template>

    <div class="cost_table">
        <div class="cost_headers">
            <p>#</p>
            <p>category</p>
            <p>value</p>
        </div>
        <div class="cost_elements">
            <div class="cost_element" v-for="elem in this.costList" v-bind:key="elem.id">
                <p class="cost_element_param">{{ countHandler(elem) }}</p>
<!--                <p class="cost_element_param">{{ elem.id }}</p>-->
                <p class="cost_element_param">{{ elem.name }}</p>
                <p class="cost_element_param">{{ elem.price }}</p>
                <ModalWindow v-bind:modalwindow="elem" >{{elem.id}}</ModalWindow>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    name: "DataOutput",
    props: {
        costList: {
            type: Array,
            default: function () {
                return []
            },
        },
    },
    data() {
        return {
          test: 0
        }
    },
  methods: {
      countHandler(elem) {
        return this.costList.findIndex(e => e.id === elem.id) + 1
      }
  }
}

</script>

<style  lang="scss" scoped>
@import "../assets/DataOutput.scss";
</style>