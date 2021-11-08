 import Firebase from "firebase"; 

export const moduloRecomendaciones = {
  namespaced: true,
  state: {
    suggestions: [],
  },

  mutations: {
    ADD_SUGGESTION(state, newSuggestion) {
      state.suggestions.push(newSuggestion); // validar si es asi
      console.log("todaslasrecomendaciones", state.suggestions);
    },
  },

  actions: {
    getAllSuggestionsFirestore(context) {
    // agregar firebase aca --> crear collection
      Firebase.firestore()
      .collection("recomendaciones")
      .get()
      .then((documents) => {
        const suggestionsFirestore = [];
        documents.forEach((document) => {
          suggestionsFirestore.push({ id: document.id, ...document.data() });
        });
        context.commit("ADD_SUGGESTION", suggestionsFirestore);
      });
      
      
    },
  },
};
