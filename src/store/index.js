import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        setups: {
            isHiddenAdderCategory: true,
            isHiddenAdderCost: true,
        },
        user: {
            id: 1,
            name: "alex"
        },
        costs: [],
        categorys: [],
    },
    getters: {
        fetchData: state => state.costs,
        fetchUser: state => state.user,
        fetchCategory: state => state.categorys,
        getSetups: state => state.setups,
    },
    actions: {
        setPaymentListData({ commit }) {
            const API = "https://raw.githubusercontent.com/martynov-a-d/cost_accaunting_vue/martynov-a-d/vuex_connection/src/data.json"
            fetch(API)
                .then(response => response.json())
                .then(paymentData => commit('initionCosts', paymentData))
        },
        setCategoryList({ commit }) {
            const API = "https://raw.githubusercontent.com/martynov-a-d/cost_accaunting_vue/martynov-a-d/vuex_connection/src/category.json"
            fetch(API)
                .then(response => response.json())
                .then(categorysData => commit('initionCategory', categorysData))
        }
    },
    mutations: {
        initionUser() {
            return this.state.user
        },
        initionCosts(state, param) {
            state.costs = param
        },
        initionCategory(state, param) {
            state.categorys = param
        },
        changeHidden(state, param) {
            switch (param) {
                case "cost":
                    state.setups.isHiddenAdderCost = !state.setups.isHiddenAdderCost
                    break;
                case "category":
                    state.setups.isHiddenAdderCategory = !state.setups.isHiddenAdderCategory
                    break;
                default:
                    break;
            }
        },
        addNewCost(state, newCost) {
            state.costs = [...state.costs, newCost]
        },
        addNewCategory(state, newCategory) {
            state.categorys = [...state.categorys, newCategory]
        }
    },
})

export default store;