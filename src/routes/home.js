import HomeComponent from "@/components/Home/HomeComponent.vue";
import Vue from 'vue';
import VueRouter from "vue-router";


Vue.use(VueRouter)


const routes = [
    {
        path : '/',
        component: HomeComponent,
        name: 'home',
        meta : {
            title: 'Home'
        }
    }
]
export default routes