import Vue from "vue";
import Vuex from "vuex";
import { Apiurl } from "../services/apiusuarios";

Vue.use(Vuex);

const createStore = new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async login({ commit }, usuario) {
      try {
        const res = await fetch(`${Apiurl}/api/auth/signin?`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        });
        const resDB = await res.json();
        commit("setToken", resDB.token);
        localStorage.setItem("token", resDB.token);
      } catch (error) {
        console.log(error);
      }
    },
    leerToken({ commit }) {
      if (localStorage.getItem("token")) {
        commit("setToken", localStorage.getItem("token"));
      } else {
        commit("setToken", null);
      }
    },
    register() {
      console.log("registrandose");
    },
  },
  modules: {},
});
export default createStore;
