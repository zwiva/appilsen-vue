import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { moduloProductos } from "./modules/productos";
import { moduloSesion } from "./modules/sesion";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    productos: moduloProductos,
    sesion: moduloSesion,
  },
});
