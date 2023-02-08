import Vue from 'vue'
import Router from 'vue-router'
import DisplayCostVue from "../components/DisplayCost"
import About from "../components/About"
import Page404 from "../components/Page404"
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: DisplayCostVue
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
});