import Firebase from "firebase";

export const moduloRecomendaciones = {
  namespaced: true,
  state: {
    sugerencias: [],
  },

  mutations: {
    SET_SUGGESTIONSDATA(state, newSuggestionsData) {
      state.sugerencias = newSuggestionsData;
      console.log("state.sugerencias", state.sugerencias);
    },

    ADD_SUGGESTION(state, newSuggestion) {
      state.sugerencias.push(newSuggestion);
      console.log("state.sugerencias", state.sugerencias);
    },

    DELETE_SUGGESTION(state, suggestionId) {
      console.log("id que llega", suggestionId);
      const sugerenciaAeliminar = state.sugerencias.filter(
        (suggestion) => suggestion.id === suggestionId
      );
      // desde aca al borrar un elemento se hace en tiempo real
      const indexOfSuggestion = state.sugerencias.indexOf(sugerenciaAeliminar[0]);

      state.sugerencias.splice(indexOfSuggestion, 1);
      state.sugerenciaAeliminar = [];
      /* console.log("probando id eliminar", sugerenciaAeliminar); */
    },

   
  },

  actions: {
    getAllSuggestionsFirestore(context) {
      /* console.log("ocurrio el dispatch"); */
      Firebase.firestore()
        .collection("recomendaciones")
        .get()
        .then((documents) => {
          const suggestionsFirestore = [];
          documents.forEach((document) => {
            suggestionsFirestore.push({ id: document.id, ...document.data() });
            /* console.log("funciona hasta qui"); */
          });
          context.commit("SET_SUGGESTIONSDATA", suggestionsFirestore);
          /* console.log("y aqui tambien"); */
        });
    },

    addSuggestion(context, newSuggestion) {
      Firebase.firestore().collection("recomendaciones").add(newSuggestion);
      context.commit("ADD_SUGGESTION", newSuggestion);
    },

    // aca borramos alguna sugerencia

    deleteSuggestion(context, id) {
      console.log("probando probando", id);
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
          Firebase.firestore()
            .collection("recomendaciones")
            .doc(sugerencia.id)
            .update(sugerencia)
            .then(() => {
              console.log("edicion crud probando");
              
            })
            .catch((e) => {
              console.log(e);
            });
        } 
    

 
  }
};
