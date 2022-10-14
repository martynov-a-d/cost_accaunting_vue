<template>

    <div>
        <h1>COST</h1>
        <DisplayPagination v-bind:costList="costList" />
        <!-- Add new cost component -->
        <button v-on:click="hiddenHandler">{{ isHidden ? "ADD NEW COST" : "CLOSE FORM" }}</button>
        <DisplayAdder v-show="!isHidden" v-on:newCost="costHandler" v-on:errorHandler="errorHandler"
            v-bind:isError="isError" v-bind:costList="costList" />
        <p v-show="isError" v-bind:class="{ 'text-danger': isError }">ERROR</p>
    </div>

</template>

<script>
import DisplayPagination from './DisplayPagination.vue';

export default {
    name: "DisplayCostVue",
    data() {
        return {
            costList: [
                {
                    id: 1,
                    name: "eat",
                    price: 250,
                    date: "",
                },
                {
                    id: 2,
                    name: "home",
                    price: 15000,
                    date: "",
                },
                {
                    id: 3,
                    name: "car",
                    price: 25000,
                    date: "",
                },
                {
                    id: 4,
                    name: "dance",
                    price: 5000,
                    date: "",
                },
                {
                    id: 5,
                    name: "cafe",
                    price: 750,
                    date: "",
                },
                {
                    id: 6,
                    name: "water",
                    price: 1000,
                    date: "",
                },
            ],
            isError: false,
            isHidden: true,
        };
    },
    methods: {
        hiddenHandler() {
            this.isHidden = !this.isHidden;
        },
        costHandler(newCost) {
            this.costList = [...this.costList, newCost];
        },
        errorHandler(error) {
            this.isError = error;
        },
    },
    components: { DisplayPagination }
}

</script>

<style lang="scss">
@import "../assets/DisplayCost.scss";
</style>