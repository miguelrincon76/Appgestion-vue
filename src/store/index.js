import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemscotizacion: [],
  },
  mutations: {
    setItemscotizacion(state, payload) {
      state.itemscotizacion = payload;
    },
  },
  actions: {
    async getItemscotizacion({ commit }) {
      const peticion = await fetch("http://localhost:4000/itemscotizacion/");
      const data = await peticion.json();
      console.log(data);
      commit("setItemscotizacion", data);
    },

    async deleteItemcotizacion({ commit }, itemscotizacion) {
      const peticion = await fetch("http://localhost:4000/itemscotizacion/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemscotizacion),
      });
    },

    async setItemscotizacion({ commit }, item) {
      const peticion = await fetch("http://localhost:4000/itemscotizacion/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
    },

    async editItemscotizacion({ commit }, item) {
      const peticion = await fetch("http://localhost:4000/itemscotizacion/", {
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
