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
            setTimeout(() => {
                const paymentData = [
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
                ]
                commit('initionCosts', paymentData)
            }, 1000)
        },
        setCategoryList({ commit }) {
            setTimeout(() => {
                const categorysData = [
                    {
                        id: 1,
                        name: "car",
                    },
                    {
                        id: 2,
                        name: "home",
                    },
                ]
                commit('initionCategory', categorysData)
            }, 1000)
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