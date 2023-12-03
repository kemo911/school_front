import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)


const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";


export default new Vuex.Store({
    state: {
        user: {
            isLoggedIn: !!localStorage.getItem('token'),
            pending: false
        }
    },

    mutations: {
        [LOGIN] (state) {
            state.pending = true;
        },
        [LOGIN_SUCCESS] (state) {
            state.isLoggedIn = true;
            state.pending = false;
        },
        [LOGOUT](state) {
            state.isLoggedIn = false;
        }
    },


    actions:{
        login({ commit }, creds) {
            commit(LOGIN); // show spinner

            return axios.post(
                "http://localhost:8000/login/",
                {
                    username : creds.username,
                    password : creds.password
                }
            ).then(response => {
                localStorage.setItem("token", response.token); // Assuming the token is in the response data
                commit(LOGIN_SUCCESS);
            }).catch(error => {
                console.error("Login failed:", error);
            });
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            commit(LOGOUT);
        }
    },

    getters: {
        isLoggedIn: state => {
            return state.user.isLoggedIn
        }
    }
})