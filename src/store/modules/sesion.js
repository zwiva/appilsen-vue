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
      console.log("datos usuario: ", state.user);
    },
    CLOSE_SESSION(state) {
      state.user = "";
      state.userStatus = "Vuelva a iniciar sesión";
    },
    // SET_SESSION(state, newUserData) {
    //   state.user = newUserData;
    // },
    // REGISTER_NEWUSER(state) {
    //   console.log("state", state);
    //   // hacer un push a la store para que tenga este nuevo usuario por mientras?
    //   // o
    //   // hacer un get para traer a todos los nuevos usuarios con este nuevo incluido?
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

    async registerNewUser(context, form) {
      console.log("registrando nuevo usuario", form);
      try {
        await Firebase.auth()
          .createUserWithEmailAndPassword(form.email, form.password)
          .catch((error) => {
            console.log("error code", error.code);
            console.log("error message", error.message);
          });

        //   await Firebase.auth().signInWithEmailAndPassword(
        //     form.email,
        //     form.password
        //   );
        // this.$router.push("/home")
      } catch (e) {
        console.log("error: ", e);
      }

      // agregar nuevo usuario a usuarios en firestore:

      let newUser = { tipodeusuario: "usuario", email: form.email, recomendaciones: [] };
      console.log('nuevo usuario', newUser)

      Firebase.firestore()
        .collection("usuarios")
        .add(newUser)
        .catch((e) => {
          console.log(e);
        });

      // context.commit("REGISTER_NEWUSER", form);
    },

    // activateSession(context, user) {
    //   context.commit("SET_USER_SESSION", user);
    // },
  },
};
