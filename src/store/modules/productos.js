import Firebase from "firebase";

export const moduloProductos = {
  namespaced: true,
  state: {
    todosLosProductos: [],
    cervezasCatalogo: [],
    accesorios: [],
    sugerencias: [],
  },

  mutations: {
    SET_EXTERNALBEERS_DATA(state, newExternalBeersData) {
      state.cervezasCatalogo = newExternalBeersData;
      console.log("state.cervezasCatalogo", state.cervezasCatalogo);
    },
    SET_MERCHANDACCESSORIES_DATA(state, newMerchantAccessorsData) {
      state.accesorios = newMerchantAccessorsData;
      console.log("state.accesorios", state.accesorios);
    },

    SET_SUGGESTIONS_DATA(state, newSuggestionsData) {
      state.sugerencias = newSuggestionsData;
      console.log("state.sugerencias", state.sugerencias);
    }
  },

  actions: {
    getAllexternalBeers(context) {
      Firebase.firestore()
        .collection("externalBeers")
        .get()
        .then((documents) => {
          const externalBeers = [];
          documents.forEach((document) => {
            externalBeers.push({ id: document.id, ...document.data() });
          });
          context.commit("SET_EXTERNALBEERS_DATA", externalBeers);
        });
    },
    getAllMerchAndAccessories(context) {
      Firebase.firestore()
        .collection("Merch")
        .get()
        .then((documents) => {
          const merchAndAccessories = [];
          documents.forEach((document) => {
            merchAndAccessories.push({ id: document.id, ...document.data() });
          });
          context.commit("SET_MERCHANDACCESSORIES_DATA", merchAndAccessories);
        });
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
          context.commit("SET_SUGGESTIONS_DATA", suggestionsFirestore);
        });
    },

    // CRUD INVENTARIO
    addNewExternalBeer(context, newExternalBeer) {
      // OJO FALTA AGREGAR PROPIEDAD STOCK!!!
      console.log("agregando", context, newExternalBeer);
      Firebase.firestore()
        .collection("externalBeers")
        .add(this.beer)
        .then(() => {
          this.loading = false;
          this.$router.push("/externalBeers");
        })
        .catch(() => {
          this.loading = false;
        });
    },
    editExternalBeer(context, beer) {
      // falta codigo firebase para editar
      this.$router.push(`/recomendaciones/${beer.id}`)
      console.log("editando el ", context, "y la", beer);
    },
    deleteExternalBeer(context, beer) {
      // falta codigo firebase para eliminar
      console.log("eliminando", context, beer);
    },
  },
};
