<template>
    <div>
        <div v-show="!isHidden">
            <input class="cost_new_param" type="text" v-model="newCost.price" placeholder="payment amount">
            <input class="cost_new_param" type="text" v-model="newCost.name" placeholder="payment description">
            <button v-on:click="costAdder">ADD COST</button>
        </div>
        <p v-show="isError" v-bind:class="{ 'text-danger': isError }">ERROR</p>
        <p v-show="isHidden">WELL</p>
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
            isHidden: false,
        }
    },
    mounted() {
        this.getDataURL()
    },
    methods: {
        costAdder: function () {
            this.errorHandler(false)
            if (this.newCost.price === "") {
                this.errorHandler(true)
            } else if (this.newCost.name === "") {
                this.errorHandler(true)
            } else {
                this.newCost = { id: this.fetchData.length + 1, name: this.newCost.name, price: this.newCost.price };
                this.addNewCost(this.newCost)
                this.costCleaner();
            }
        },
        costCleaner: function () {
            this.newCost = { id: "", name: "", price: "" };
        },
        getDataURL: function () {
            this.newCost.name = this.$route.params.category
            this.newCost.price = this.$route.query.value
            if (this.newCost.name !== undefined) {
                this.costAdder()
                this.isHidden = this.isError ? false : true
            }
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