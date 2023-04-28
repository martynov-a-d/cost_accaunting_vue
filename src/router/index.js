import Vue from 'vue'
import Router from 'vue-router'
import DisplayCostVue from "../components/DisplayCost"
import About from "../components/About"
import Page404 from "../components/Page404"
import DisplayAdder from "../components/DisplayAdder"
Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: { name: "dashboard" }
        },
        {
            path: "/dashboard/:page",
            name: "dashboard",
            component: DisplayCostVue
        },
        {
            path: "/add/payment",
            name: "addPayment",
            component: DisplayAdder
        },
        {
            path: "/add/payment/:category",
            name: "addPaymentURL",
            component: DisplayAdder
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/404",
            name: "notFound",
            component: Page404
        },
        {
            path: "*",
            redirect: { name: "notFound" }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name === "addPaymentURL") {
        next()
    } else {
        next()
    }
})

export default (router)