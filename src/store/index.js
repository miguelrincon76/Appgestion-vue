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
      console.log(usuario);
      try {
        const res = await fetch(`${Apiurl}/api/auth/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        });
        const resDB = await res.json();
        console.log(res.data.token);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
export default createStore;
