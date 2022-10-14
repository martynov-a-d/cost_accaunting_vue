<template>

    <div>
        <input class="cost_new_param" type="text" v-model="newCost.price" placeholder="payment amount">
        <input class="cost_new_param" type="text" v-model="newCost.name" placeholder="payment description">
        <button v-on:click="costAdder">ADD COST</button>
    </div>

</template>

<script>

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
        }
    },
    props: {
        isError: {
            type: Boolean,
            default: true
        },
        costList: {
            type: Array,
        }
    },
    methods: {
        costAdder: function () {
            this.$emit("errorHandler", false)
            if (this.newCost.price === "") {
                this.$emit("errorHandler", true)
            } else if (this.newCost.name === "") {
                this.$emit("errorHandler", true)
            } else {
                this.newCost = { id: this.costList.length + 1, name: this.newCost.name, price: this.newCost.price };
                this.$emit("newCost", this.newCost);
                this.costCleaner();
            }
        },
        costCleaner: function () {
            this.newCost = { id: "", name: "", price: "" };
        }
    },
}

</script>