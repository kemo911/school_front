import Vue from 'vue';
import VueRouter from 'vue-router';
import authRoutes from './auth';
import homeRoutes from './home'
import store from "@/store/store";

Vue.use(VueRouter);

const routes = [
    ...authRoutes,
    ...homeRoutes
];

const router = new VueRouter({
    mode: 'history',
    routes
});


router.beforeEach((to , from, next) => {
    document.title = to.meta.title

    if (store.getters.isLoggedIn && to.name === 'login') {
        next('/');
    }else if (store.getters.isLoggedIn && to.name !== 'login'){
        next()
    } else {
        next('/login');
    }
})
export default router;
