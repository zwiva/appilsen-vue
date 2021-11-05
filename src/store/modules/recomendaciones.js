/* import Firebase from "firebase"; */

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
    addNewSuggestion(context, suggestion) {
      // agregar firebase aca --> crear collection
      context.commit("ADD_SUGGESTION", suggestion);
    },
  },
};
