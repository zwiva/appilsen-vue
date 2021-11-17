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
      // console.log("id que llega", suggestionId);
      const sugerenciaAeliminar = state.sugerencias.filter(
        (suggestion) => suggestion.id === suggestionId
      );
      // desde aca al borrar un elemento se hace en tiempo real
      const indexOfSuggestion = state.sugerencias.indexOf(
        sugerenciaAeliminar[0]
      );
      state.sugerencias.splice(indexOfSuggestion, 1);
      state.sugerenciaAeliminar = [];
      /* console.log("probando id eliminar", sugerenciaAeliminar); */
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
    addSuggestion(context, newSuggestion) {
      Firebase.firestore()
        .collection("recomendaciones")
        .add(newSuggestion)
        .catch((e) => {
          console.log(e);
        });
      context.commit("ADD_SUGGESTION", newSuggestion);
    },

    // aca borramos alguna sugerencia
    deleteSuggestion(context, id) {
      Firebase.firestore()
        .collection("recomendaciones")
        .doc(id)
        .delete()
        .then(() => {
          console.log("la sugerencia se borro satisfactoriamente");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      context.commit("DELETE_SUGGESTION", id);
    },

    editSuggestion(context, sugerencia) {
      console.log("sugerencia en modulo recomendaciones: ", sugerencia);
      Firebase.firestore()
        .collection("recomendaciones")
        .doc(sugerencia.id)
        .update(sugerencia)
        .then(() => {
          console.log("sugerencia", sugerencia);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log("context", context);
    },
  },
};
