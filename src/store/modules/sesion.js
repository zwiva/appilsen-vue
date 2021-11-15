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
    REGISTER_NEWUSER(state, newUser) {
      state.users.push(newUser);
      // console.log("todos", state.users);
    },
    SET_SESSION(state, newRegisteredUser) {
      state.user = newRegisteredUser;
      // console.log("nuevo registrado", state.user); // tenga tipodeusuario
    },
  },
  actions: {
    // traer todos los usuarios lleno la store
    async getRegisteredUsers(context) {
      await Firebase.firestore()
        .collection("usuarios")
        .get()
        .then((documents) => {
          let users = [];
          documents.forEach((user) => {
            users.push({ id: user.id, ...user.data() });
          });
          context.commit("GET_ALL_USERS", users);
        });

      // let users = [];
      // let documents = await Firebase.firestore().collection("usuarios").get();
      // documents.forEach((user) => {
      //   users.push({ id: user.id, ...user.data() });
      // });
      // context.commit("GET_ALL_USERS", users);
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

    showAuthUser() {
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

    async registerNewUser(context, form) {
      try {
        await Firebase.auth()
          .createUserWithEmailAndPassword(form.email, form.password)
          .catch((error) => {
            console.log("error code!!!", error.code);
            console.log("error message!!!", error.message);
          });

        await Firebase.auth().signInWithEmailAndPassword(
          form.email,
          form.password
        );
      } catch (e) {
        console.log("error: ", e);
      }

      // agrega nuevo usuario a usuarios en firestore:

      let usersRegistered = [];
      let documents = await Firebase.firestore().collection("usuarios").get();
      // console.log("documents", documents);
      documents.forEach((user) => {
        usersRegistered.push({ id: user.id, ...user.data() });
      });
      // console.log("users2: ", usersRegistered);

      let userAlreadyCreated = usersRegistered.find(
        (user) => user.email === form.email
      );
      // console.log("userAlreadyCreated", userAlreadyCreated);

      // let userAlreadyCreated = usersRegistered.find((user) => { return user.email === form.email });

      let newUser = {
        tipodeusuario: "usuario",
        email: form.email,
        recomendaciones: [],
      };
      // console.log("nuevo usuario", newUser);

      if (userAlreadyCreated) {
        // console.log("usuario ya creado");
        context.commit("SET_CURRENT_USER_IDENTIFIER", newUser);
      } else {
        await Firebase.firestore()
          .collection("usuarios")
          .add(newUser)
          .catch((e) => {
            console.log(e);
          });
        context.commit("REGISTER_NEWUSER", newUser);
      }
    },

    // activateSession(context, user) {
    //   context.commit("SET_USER_SESSION", user);
    // },
  },
};
