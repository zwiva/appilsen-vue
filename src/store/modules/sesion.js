import Firebase from "firebase";

export const moduloSesion = {
  namespaced: true,
  state: {
    user: "",
  },

  mutations: {
    SET_USUARIO(state, newUserData) {
      state.user = newUserData;
      console.log("current usuario", state.user); // aca debe mostrarse un usuario que ademas tenga tipo:admin/user 
    },
    CLOSE_SESSION(state) {
      state.user = "";
    },
  },

  actions: {
    async signIn(context, form) {
      try {
        console.log("formulario login", form);
        await Firebase.auth().signInWithEmailAndPassword(
          form.email,
          form.password
        );

        // this.$emit("cerrarDialog", false);
      } catch (e) {
        console.error("no funciono el login");
      }
      context.commit("SET_USUARIO", form);
    },
    async signOut(context) {
      await Firebase.auth().signOut();
      context.commit("CLOSE_SESSION");
    },

    // configurarUsuario(context, user) {
    //   console.log("usuario", user);
    //   Firebase.auth().onAuthStateChange((user) => {
    //     console.log("usuario", user);
    //   });
    //   context.commit("SET_USUARIO", user || null);
    // },

    // registerNewUser(context, user) {
    //   context.commit("REGISTER_USER", user);
    // },

    // activateSession(context, user) {
    //   context.commit("SET_USER_SESSION", user);
    // },
  },
};
