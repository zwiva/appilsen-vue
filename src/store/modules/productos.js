import Firebase from "firebase";

export const moduloProductos = {
  namespaced: true,
  state: {
    productos: [],
  },

  mutations: {
    SET_EXTERNALBEERS_DATA(state, newExternalBeersData) {
      state.productos = newExternalBeersData;
      console.log("state.productos", state.productos);
    },
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
  },
};
