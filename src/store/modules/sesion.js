 import Firebase from "firebase"; 

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
    configurarUsuario(context) {
      Firebase.auth().onAuthStateChange((usuario) => {
        context.commit("SET_USUARIO", usuario || null);
      });
    },
    async signIn(_context, credentials) {
      await Firebase.auth().signInWithEmailAndPassword
      (credentials.email, credentials.password);
    },
    async signOut() {
      await Firebase.auth().signOut();
    }
  },
};
