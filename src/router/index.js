import Vue from 'vue'
import Router from 'vue-router'
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
            component: () => import("../components/DisplayCost")
        },
        {
            path: "/add/payment",
            name: "addPayment",
            component: () => import("../components/DisplayAdder")
        },
        {
            path: "/add/payment/:category",
            name: "addPaymentURL",
            component: () => import("../components/DisplayAdder")
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../components/About")
        },
        {
            path: "/404",
            name: "notFound",
            component: () => import("../components/Page404")
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