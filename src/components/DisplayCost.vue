<template>

    <div>
        <h1>COST</h1>
        <!-- Data output component -->
        <div class="cost_elements">
            <div class="cost_element" v-for="elem in this.costList" v-bind:key="elem.id">
                <p>{{ elem.name }}</p>
                <p>{{ elem.price }}</p>
            </div>
        </div>
        <!-- Add new cost component -->
        <div>
            <input type="text" v-model.number="newCost.price">
            <input type="text" v-model="newCost.name" placeholder="name cost">
            <button v-on:click="costAdder(newCost)">ADD COST</button>
        </div>
    </div>

</template>

<script>

export default {
    name: "DisplayCostVue",
    data() {
        return {
            costList: [
                {
                    id: 1,
                    name: "eat",
                    price: 250,
                },
                {
                    id: 2,
                    name: "home",
                    price: 15000,
                },
            ],
            newCost: {
                id: "",
                name: "",
                price: 0,
            }
        }
    },
    methods: {
        costAdder() {
            console.log(this.newCost.price)
            this.newCost = { id: this.costList.length + 1, name: this.newCost.name, price: this.newCost.price }
            this.costList = [...this.costList, this.newCost]
            this.costCleaner()
        },
        costCleaner() {
            this.newCost = { id: "", name: "", price: 0 }
        }
    }
}

</script>

<style scoped lang="scss">
@import "../assets/DisplayCost.scss";
</style>