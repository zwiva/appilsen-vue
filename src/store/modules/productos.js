import Firebase from "firebase";

export const moduloProductos = {
  namespaced: true,
  state: {
    productos: [],
    accesorios: [],
  },

  mutations: {
    SET_EXTERNALBEERS_DATA(state, newExternalBeersData) {
      state.productos = newExternalBeersData;
      console.log("state.productos", state.productos);
    },
    SET_MERCHANDACCESSORIES_DATA(state, newMerchantAccessorsData) {
      state.accesorios = newMerchantAccessorsData;
      console.log("state.accesorios", state.accesorios);
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
    }
  },
};
