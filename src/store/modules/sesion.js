/* import Firebase from "firebase"; */

export const moduloSesion = {
  namespaced: true,
  state: {
    usuario: null,
  },

  mutations: {
    SET_USUARIO(state, newUsuario) {
      state.usuario = newUsuario;
      console.log("current usuario", state.usuario);
    },
  },

  actions: {
    configurarUsuario(context, usuario) {
      context.commit("SET_USUARIO", usuario);
    },
  },
};
