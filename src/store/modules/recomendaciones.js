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
  },

  actions: {
    getAllSuggestionsFirestore(context) {
    // agregar firebase aca --> crear collections
    console.log("ocurrio el dispatch")
      Firebase.firestore()
      .collection("recomendaciones")
      .get()
      .then((documents) => {
        const suggestionsFirestore = [];
        documents.forEach((document) => {
          suggestionsFirestore.push({ id: document.id, ...document.data() });
          console.log("funciona hasta qui")
        });
        context.commit("SET_SUGGESTIONSDATA", suggestionsFirestore);
        console.log("y aqui tambien")
      });
      
    },

    addSuggestion(context, newSuggestion) {
      Firebase.firestore()
          .collection("recomendaciones")
          .add(newSuggestion)
          .then(() => {
            this.loading = false;
            console.log("se agrego una recomendacion")
          })
           .catch(() => {
            this.loading = false;
          }); 
    }
  },

  addSuggestion(context, newSuggestion) {
    // console.log("data", patient);
    
    Firebase.firestore().collection("recomendaciones").add(newSuggestion);
    context.commit("ADD_SUGGESTION", newSuggestion);
  },

};
