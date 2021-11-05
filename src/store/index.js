import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { moduloProductos } from "./modules/productos";
import { moduloSesion } from "./modules/sesion";
import { moduloCarrito } from "./modules/carrito";
import { moduloRecomendaciones } from "./modules/recomendaciones";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    productos: moduloProductos,
    sesion: moduloSesion,
    carrito: moduloCarrito,
    recomendaciones: moduloRecomendaciones,
  },
});
