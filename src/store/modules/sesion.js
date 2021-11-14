import Firebase from "firebase";

export const moduloSesion = {
  namespaced: true,
  state: {
    users: [],
    user: "",
    userEmail: "",
    userStatus: "",
  },
  getters: {
    showAuthenticationStatus(state) {
      // if (state.users) {
      //   return "pendiente verificacion";
      // } else if (state.userEmail) {
      //   return "usuario encontrado";
      // } else {
      //   return "usuario no registrado";
      // }
      return state.userStatus;
    },
  },
  mutations: {
    // 1. traer todos los usuarios
    GET_ALL_USERS(state, currentUsers) {
      state.users = currentUsers;
    },

    SET_CURRENT_USER_IDENTIFIER(state, form) {
      let usuarioYaRegistrado;
      state.users.filter((user) => {
        if (user.email === form.email) {
          usuarioYaRegistrado = user;
        }
      });

      if (usuarioYaRegistrado) {
        state.userEmail = form.email;
        state.user = usuarioYaRegistrado;
        state.userStatus = "Usuario encontrado ✔️";
      } else {
        state.user = "";
        state.userStatus = "Usuario no registrado ❌";
      }
      console.log('datos usuario: ', state.user)
    },
    CLOSE_SESSION(state) {
      state.user = "";
      state.userStatus = "Vuelva a iniciar sesión";
    },
    // SET_SESSION(state, newUserData) {
    //   state.user = newUserData;
    // },
  },

  actions: {
    // traer todos los usuarios
    async getRegisteredUsers(context) {
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
    // identificar que de todos los registrados el que esta intentando ingresar esta en la lista, y si esta se loguea
    setCurrentUser(context, form) {
      context.commit("SET_CURRENT_USER_IDENTIFIER", form);
    },

    async signInRegisteredUser(context, form) {
      if (context.state.user) {
        try {
          await Firebase.auth().signInWithEmailAndPassword(
            form.email,
            form.password
          );
        } catch (e) {
          console.error("no funciono el login");
        }
      } else {
        console.log("no esta registrado");
      }
    },
    async showAuthUser() {
      // const user = Firebase.auth().currentUser;
      // console.log("usuario ok", user);
      Firebase.auth().onAuthStateChanged((user) => {
        console.log("usuario: ", user);
      });
      
    },
    async signOut(context) {
      await Firebase.auth().signOut();
      context.commit("CLOSE_SESSION");
    },

    // configurarSesion(context, user) {
    //   console.log("usuario", user);
    //   Firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       console.log("user", user);

    //       console.log("currentUser", Firebase.auth().currentUser);

    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       // var uid = user.uid;
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //     }
    //   });
    //   context.commit("SET_SESSION", user || null);
    // },

    registerNewUser(context, user) {
      context.commit("REGISTER_NEWUSER", user);
    },

    // activateSession(context, user) {
    //   context.commit("SET_USER_SESSION", user);
    // },
  },
};
