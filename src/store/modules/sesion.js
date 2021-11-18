import Firebase from "firebase";

export const moduloSesion = {
  namespaced: true,
  state: {
    users: [],
    user: "",
    userEmail: "",
    userStatus: "",
    recommendedBeer: "",
  },
  getters: {
    showAuthenticationStatus(state) {
      return state.userStatus;
    },
  },
  mutations: {
    GET_ALL_USERS(state, currentUsers) {
      state.users = currentUsers;
    },
    SET_CURRENT_USER_IDENTIFIER(state, form) {
      let usuarioYaRegistrado;
      state.users.filter((user) => {
        if (user.email === form.email) {
          usuarioYaRegistrado = user;
          // console.log("usuario completo?", user);
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
      // console.log("datos usuario: ", state.user);
    },
    CLOSE_SESSION(state) {
      state.user = "";
      state.userStatus = "Inicia sesión";
    },
    REGISTER_NEWUSER(state, newUser) {
      state.users.push(newUser);
      // console.log("todos", state.users);
    },
    // ADD_USER_SUGGESTION(state, sugerencia) {
    //   console.log("user suggestion", state, sugerencia);
    // },
    SET_RECOMMENDED_BEER(state, numBeer) {
      state.recommendedBeer = numBeer;
      // console.log('recommended', state.recommendedBeer)
    },
  },
  actions: {
    // cargar la store con todos los usuarios desde la firestores
    getRegisteredUsers(context) {
      Firebase.firestore()
        .collection("usuarios")
        .get()
        .then((documents) => {
          let users = [];
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

    // inicio de sesion para registrados:
    async signInRegisteredUser(context, form) {
      // if (context.state.user) {
      try {
        await Firebase.auth().signInWithEmailAndPassword(
          form.email,
          form.password
        );
      } catch (e) {
        console.error("no funciono el login");
      }
      // } else {
      //   console.log("no esta registrado");
      // }
      context.commit("SET_CURRENT_USER_IDENTIFIER", form);
    },

    // validar inicio de sesion en firebase:
    showAuthUser() {
      // const user = Firebase.auth().currentUser;
      // console.log("usuario ok", user);
      Firebase.auth().onAuthStateChanged((user) => {
        console.log("usuario: ", user);
      });
    },

    // cierre de sesion:
    async signOut(context) {
      await Firebase.auth().signOut();
      context.commit("CLOSE_SESSION");
    },
    // registrar nuevo usuario evitando duplicados:
    async registerNewUser(context, form) {
      let usersRegistered = [];
      let documents = await Firebase.firestore().collection("usuarios").get();
      documents.forEach((user) => {
        usersRegistered.push({ id: user.id, ...user.data() });
      });
      let userAlreadyCreated = usersRegistered.find(
        (user) => user.email === form.email
      );
      let newUser = {
        tipodeusuario: "usuario",
        email: form.email,
        recomendaciones: [],
      };
      if (userAlreadyCreated) {
        // si usuario ya esta creado inicia sesion con store, evitando duplicados:
        context.commit("SET_CURRENT_USER_IDENTIFIER", newUser);
      } else {
        // si usuario no esta creado se crea y agrega a coleccion
        try {
          await Firebase.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .catch((error) => {
              console.log("error code!!!", error.code);
              console.log("error message!!!", error.message);
            });
          await Firebase.firestore()
            .collection("usuarios")
            .add(newUser)
            .catch((e) => {
              console.log(e);
            });
          let allWithNewCreatedUsers = [];
          let allUsers = await Firebase.firestore()
            .collection("usuarios")
            .get();
          allUsers.forEach((user) => {
            allWithNewCreatedUsers.push({ id: user.id, ...user.data() });
          });
          await Firebase.auth().signInWithEmailAndPassword(
            form.email,
            form.password
          );
          console.log("newUser", newUser);
          context.commit("REGISTER_NEWUSER", newUser);
          context.commit("GET_ALL_USERS", allWithNewCreatedUsers);
        } catch (e) {
          console.log("error: ", e);
        }
      }
    },
    setRecommendedBeer(context, numBeer) {
      context.commit("SET_RECOMMENDED_BEER", numBeer);
    },
  },
};
