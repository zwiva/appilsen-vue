import Firebase from "firebase";

export const moduloRecomendaciones = {
  namespaced: true,
  state: {
    sugerencias: [],
    sugerenciasUsuario: [],
    usuarioemail: "",
  },

  mutations: {
    SET_SUGGESTIONSDATA(state, newSuggestionsData) {
      state.sugerencias = newSuggestionsData;
    },
    SET_USER_EMAIL(state, userEmail) {
      state.usuarioemail = userEmail;
      // console.log("state.usuarioemail", state.usuarioemail);
    },
    SET_USER_SUGGESTIONS(state, allSuggestions) {
      let userSuggestions = [];
      allSuggestions.forEach((element) => {
        if (element.usuarioemail === state.usuarioemail) {
          userSuggestions.push(element);
        }
      });
      state.sugerenciasUsuario = userSuggestions;
      // console.log("sugerencias usuario: ", state.sugerenciasUsuario);
    },
    ADD_SUGGESTION(state, newSuggestion) {
      state.sugerencias.push(newSuggestion);
      // console.log("state.sugerencias", state.sugerencias);
    },
    DELETE_SUGGESTION(state, suggestionId) {
      let sugerenciaAeliminar = state.sugerencias.filter(
        (suggestion) => suggestion.id === suggestionId
      );
      let indexOfSuggestion = state.sugerencias.indexOf(sugerenciaAeliminar[0]);
      state.sugerencias.splice(indexOfSuggestion, 1);
      sugerenciaAeliminar = [];
    },
  },
  actions: {
    setUsuarioEmail(context, userEmail) {
      context.commit("SET_USER_EMAIL", userEmail);
    },
    getAllSuggestionsFirestore(context) {
      Firebase.firestore()
        .collection("recomendaciones")
        .get()
        .then((documents) => {
          const suggestionsFirestore = [];
          documents.forEach((document) => {
            suggestionsFirestore.push({ id: document.id, ...document.data() });
          });
          // console.log("suggestionsFirestore", suggestionsFirestore);
          context.commit("SET_SUGGESTIONSDATA", suggestionsFirestore);
        });
    },
    getUserSuggestionsFirestore(context) {
      Firebase.firestore()
        .collection("recomendaciones")
        .get()
        .then((documents) => {
          const allSuggestions = [];
          documents.forEach((document) => {
            allSuggestions.push({ id: document.id, ...document.data() });
          });
          // console.log("suggestionsFirestore", allSuggestions);
          context.commit("SET_USER_SUGGESTIONS", allSuggestions);
        });
    },
    async addSuggestion(context, newSuggestion) {
      await Firebase.firestore()
        .collection("recomendaciones")
        .add(newSuggestion)
        .catch((e) => {
          console.log(e);
        });
      context.commit("ADD_SUGGESTION", newSuggestion);
    },
    // aca borramos alguna sugerencia
    async deleteSuggestion(context, id) {
      await Firebase.firestore()
        .collection("recomendaciones")
        .doc(id)
        .delete()
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      context.commit("DELETE_SUGGESTION", id);
    },

    async editSuggestion(context, sugerencia) {
      await Firebase.firestore()
        .collection("recomendaciones")
        .doc(sugerencia.id)
        .update(sugerencia)
        .then(() => {
          console.log("sugerencia", sugerencia);
        })
        .catch((e) => {
          console.log(e);
        });
      // console.log("context", context);
    },
  },
};
