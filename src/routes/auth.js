import LoginForm from "@/components/Auth/LoginForm.vue";
import Vue from 'vue';
import VueRouter from "vue-router";
import SignupForm from "@/components/Auth/SignupForm.vue";


Vue.use(VueRouter)


const routes = [
    {
        path : '/login',
        component: LoginForm,
        name: 'login',
        meta: {
            title : 'Login'
        }
    },
    {
        path: '/signup',
        component: SignupForm,
        name: 'signup',
        meta: {
            title: 'Signup'
        }
    }
]
export default routes