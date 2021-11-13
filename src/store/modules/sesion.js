import Firebase from "firebase";

export const moduloSesion = {
  namespaced: true,
  state: {
    users: [],
    user: "",
  },

  mutations: {
    GET_ALL_USERS(state, currentUsers) {
      state.users = currentUsers;
      console.log("usuarios", state.users);
    },

    SET_USUARIO(state, newUserData) {
      state.user = newUserData;

      console.log("current usuario", state.user); // aca debe mostrarse un usuario que ademas tenga tipo:admin/user
    },
    CLOSE_SESSION(state) {
      state.user = "";
    },
    SET_SESSION(state, newUserData) {
      state.user = newUserData;
    },
  },

  actions: {
    async getCurrentUsers(context) {
      await Firebase.firestore()
        .collection("usuarios")
        .get()
        .then((documents) => {
          const users = [];
          documents.forEach((user) => {
            users.push({ id: user.id, ...user.data() });
          });
          context.commit("GET_ALL_USERS", users);
        });
    },

    async signIn(context, form) {
      await Firebase.firestore()
        .collection("usuarios")
        .get()
        .then((documents) => {
          const users = [];
          documents.forEach((user) => {
            users.push({ id: user.id, ...user.data() });
          });
          context.commit("GET_ALL_USERS", users);
        });

      // if(){

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
      // }
    },

    async signOut(context) {
      await Firebase.auth().signOut();
      context.commit("CLOSE_SESSION");
    },

    configurarSesion(context, user) {
      console.log("usuario", user);
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("user", user);

          console.log("currentUser", Firebase.auth().currentUser);

          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // var uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      context.commit("SET_SESSION", user || null);
    },

    // registerNewUser(context, user) {
    //   context.commit("REGISTER_USER", user);
    // },

    // activateSession(context, user) {
    //   context.commit("SET_USER_SESSION", user);
    // },
  },
};
