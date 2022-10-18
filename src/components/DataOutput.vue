<template>

    <div class="cost_table">
        <div class="cost_headers">
            <p>#</p>
            <p>category</p>
            <p>value</p>
        </div>
        <div class="cost_elements">
            <div class="cost_element" v-for="elem in this.costList" v-bind:key="elem.id">
                <p class="cost_element_param">{{ elem.id }}</p>
                <p class="cost_element_param">{{ elem.name }}</p>
                <p class="cost_element_param">{{ elem.price }}</p>
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
        return {}
    },
}

</script>

<style  lang="scss" scoped>
@import "../assets/DataOutput.scss";
</style>