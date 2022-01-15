import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
        async getCotizacion({
            commit
        }) {
            const peticion = await fetch('http://localhost:3000/cotizaciones/');
            const data = await peticion.json();
            console.log(data);
            commit('setCotizacion', data);
        },

        async deleteCotizacion({
            commit
        }, cotizacion) {
            const peticion = await fetch('http://localhost:3000/cotizaciones/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cotizacion)
            });
        },

        async setCotizacion({
            commit
        }, item) {
            const peticion = await fetch('http://localhost:3000/cotizaciones/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
        },

        async editCotizacion({
            commit
        }, item) {
            const peticion = await fetch('http://localhost:3000/cotizaciones/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
        },

    },
    modules: {

    }
})