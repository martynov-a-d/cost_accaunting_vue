<template>

    <div>
        <h1>COST</h1>
        <h2>{{ fetchUser.name }}</h2>
        <DisplayPagination v-bind:costList="fetchData ? fetchData : []" />
        <!-- Add new cost component -->
        <button v-on:click="changeHidden('cost')">{{ getSetups.isHiddenAdderCost ? "ADD NEW COST" : "CLOSE FORM"
        }}</button>
        <DisplayAdder v-show="!getSetups.isHiddenAdderCost" v-on:newCost="addNewCost" v-on:errorHandler="errorHandler"
            v-bind:isError="isError" v-bind:costList="fetchData" />
        <p v-show="isError" v-bind:class="{ 'text-danger': isError }">ERROR</p>
        <!--  Drop menu Category  -->
        <select v-show="fetchCategory.length" name="choiseCategory" id="choiseCategory">
            <option v-for="elem in fetchCategory" v-bind:key="elem.id">{{ elem.name }}</option>
        </select>
        <!--  Add new category component  -->
        <div>
            <input type="text" placeholder="category name" v-model="newCategory.name">
            <button v-on:click="this.createCategory">ADD CATEGORY</button>
        </div>
    </div>

</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: "DisplayCostVue",
    data() {
        return {
            isError: false,
            //
            newCategory: {
                id: "",
                name: ""
            },
            //
        };
    },
    created() {
        this.setPaymentListData()
        this.setCategoryList()
        // this.initionCosts()
    },
    methods: {
        errorHandler(error) {
            this.isError = error;
        },
        // Category adder
        createCategory() {
            if (this.newCategory.name !== "") {
                this.errorHandler(false)
                this.newCategory.id = this.fetchCategory.length + 1
                this.addNewCategory(this.newCategory)
                this.newCategory = { id: "", name: "" }
            } else {
                this.errorHandler(true)
            }
        },
        //
        ...mapMutations([
            'initionCosts',
            'addNewCost',
            'addNewCategory',
            'changeHidden'
        ]),
        ...mapActions([
            'setPaymentListData',
            'setCategoryList'
        ])
    },
    computed: {
        ...mapState({

        }),
        ...mapGetters([
            'fetchData',
            'fetchUser',
            'fetchCategory',
            'getSetups'
        ])
    },
}

</script>

<style lang="scss" scoped>
@import "../assets/DisplayCost.scss";
</style>