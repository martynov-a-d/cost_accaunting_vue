import Vue from 'vue'
import Router from 'vue-router'
import DisplayCostVue from "../components/DisplayCost"
import About from "../components/About"
import Page404 from "../components/Page404"
import DisplayAdder from "../components/DisplayAdder"
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/dashboard/:page",
            name: "dashboard",
            component: DisplayCostVue
        },
        {
            path: "/add",
            name: "add",
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

// Router.beforeResolve((next) => { next() })