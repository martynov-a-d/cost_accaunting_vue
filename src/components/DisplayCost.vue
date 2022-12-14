<template>

    <div>
        <h1>COST</h1>
        <h2>{{ fetchUser.name }}</h2>
        <DisplayPagination v-bind:costList="fetchData ? fetchData : []" />
        <!-- Add new cost component -->
        <button v-on:click="changeHidden('cost')">
            {{ getSetups.isHiddenAdderCost ? "ADD NEW COST" : "CLOSE FORM" }}
        </button>
        <button v-on:click="changeHidden('category')">
            {{ getSetups.isHiddenAdderCategory ? "ADD NEW CATEGORY" : "CLOSE FORM" }}
        </button>
        <DisplayAdder v-show="!getSetups.isHiddenAdderCost" v-on:newCost="addNewCost" v-on:errorHandler="errorHandler"
            v-bind:isError="isError" v-bind:costList="fetchData" />
        <p v-show="isError" v-bind:class="{ 'text-danger': isError }">ERROR</p>
        <!--  Drop menu Category  -->
        <DisplayCategoryVue v-bind:fetchCategory="fetchCategory" v-bind:getSetups="getSetups"
            v-on:errorHandler="errorHandler" v-on:addNewCategory="addNewCategory" />
    </div>

</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: "DisplayCostVue",
    data() {
        return {
            isError: false,
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