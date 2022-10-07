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
        <input type="text" v-model="this.newCost.price">
        <button v-on:click="costAdder">ADD COST</button>
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
                id: '',
                name: '',
                price: 0,
            }
        }
    },
    methods: {
        costAdder() {
            console.log('')
        },
    }
}

</script>

<style scoped lang="scss">
@import "../assets/DisplayCost.scss";
</style>