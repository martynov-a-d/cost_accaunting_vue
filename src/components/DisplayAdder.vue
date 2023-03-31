<template>
    <div>
        <input class="cost_new_param" type="text" v-model="newCost.price" placeholder="payment amount">
        <input class="cost_new_param" type="text" v-model="newCost.name" placeholder="payment description">
        <button v-on:click="costAdder">ADD COST</button>
        <p v-show="isError" v-bind:class="{ 'text-danger': isError }">ERROR</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'


export default {
    name: "DisplayAdder",
    data() {
        return {
            newCost: {
                id: "",
                name: "",
                price: "",
                date: "",
            },
            isError: "",
        }
    },
    // props: {
    //     isError: {
    //         type: Boolean,
    //         default: true
    //     },
    //     costList: {
    //         type: Array,
    //     }
    // },
    methods: {
        costAdder: function () {
            this.errorHandler(false)
            if (this.newCost.price === "") {
                this.errorHandler(true)
            } else if (this.newCost.name === "") {
                this.errorHandler(true)
            } else {
                this.newCost = { id: this.fetchData.length + 1, name: this.newCost.name, price: this.newCost.price };
                // this.$emit("newCost", this.newCost);
                this.addNewCost(this.newCost)
                this.costCleaner();
            }
        },
        costCleaner: function () {
            this.newCost = { id: "", name: "", price: "" };
        },
        errorHandler(error) {
            this.isError = error;
        },
        ...mapMutations([
            'addNewCost'
        ])
    },
    computed: {
        ...mapGetters([
            'fetchData'
        ])
    }
}

</script>

<style lang="scss" scoped>
@import "../assets/DisplayCost.scss";
</style>