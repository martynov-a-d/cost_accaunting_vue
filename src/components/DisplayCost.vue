<template>
    <div>
        <h1>COST</h1>
        <h2>{{ fetchUser.name }}</h2>
        <DisplayPagination v-bind:costList="fetchData ? fetchData : []" />
        <!-- Button for Block new cost and category -->
        <button v-on:click="changeHidden('cost')">
            {{ getSetups.isHiddenAdderCost ? "ADD NEW COST" : "CLOSE FORM" }}
        </button>
        <button v-on:click="changeHidden('category')">
            {{ getSetups.isHiddenAdderCategory ? "ADD NEW CATEGORY" : "CLOSE FORM" }}
        </button>
        <div>
            <router-link to="/add/payment/Food?value=200">Food</router-link>
            <router-link to="/add/payment/Transport?value=50">Transport</router-link>
            <router-link to="/add/payment/Entertainment?value=2000">Entertainment</router-link>
        </div>
        <!-- Add new cost component -->
        <DisplayAdder v-if="!getSetups.isHiddenAdderCost" v-on:newCost="addNewCost" v-on:errorHandler="errorHandler" @closeHandler="changeHidden('cost')"
            v-bind:actionHandler="actionHandler" v-bind:isPropHidden="!getSetups.isHiddenAdderCost" v-bind:isError="isError" />
        <p v-show="isError" v-bind:class="{ 'text-danger': isError }">ERROR</p>
        <!--  Drop menu Category  -->
        <DisplayCategoryVue v-bind:fetchCategory="fetchCategory" v-bind:getSetups="getSetups"
            v-on:errorHandler="errorHandler" v-on:addNewCategory="addNewCategory" />
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: "DisplayCostVue",
    data() {
        return {
            isError: false,
            actionHandler: "addNewCost",
        };
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