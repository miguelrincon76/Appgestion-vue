import Vue from "vue";
import Vuex from "vuex";
import { Apiurl } from "../services/apiusuarios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cotizacion: [],
  },
  mutations: {
    setCotizacion(state, payload) {
      state.cotizacion = payload;
    },
  },
  actions: {
    async getCotizacion({ commit }) {
      const peticion = await fetch(`${Apiurl}/cotizaciones/`);
      const data = await peticion.json();
      console.log(data);

      commit("setCotizacion", data);
    },

    async deleteCotizacion({ commit }, cotizacion) {
      const peticion = await fetch(`${Apiurl}/cotizaciones/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cotizacion),
      });
    },

    async setCotizacion({ commit }, item) {
      const peticion = await fetch(`${Apiurl}/cotizaciones/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
    },

    async editCotizacion({ commit }, item) {
      const peticion = await fetch(`${Apiurl}/cotizaciones/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
    },
  },
  modules: {},
});
