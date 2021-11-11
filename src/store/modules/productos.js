import Firebase from "firebase";

export const moduloProductos = {
  namespaced: true,
  state: {
    todosLosProductos: [], // intento inventerio fallido
    cervezasCatalogo: [], // cervezas externas
    accesorios: [], // merch
  },

  mutations: {
    SET_EXTERNALBEERS_DATA(state, newExternalBeersData) {
      state.cervezasCatalogo = newExternalBeersData;
      // console.log("state.cervezasCatalogo", state.cervezasCatalogo);
    },
    SET_MERCHANDACCESSORIES_DATA(state, newMerchantAccessorsData) {
      state.accesorios = newMerchantAccessorsData;
      // console.log("state.accesorios", state.accesorios);
    },
    SET_INVENTORY(state, products) {
      state.todosLosProductos.push(products);
    },
    DELETE_EXTERNAL_BEER(state, beerId) {
      const beerToDelete = state.cervezasCatalogo.filter(
        (beer) => beer.id === beerId
      );
      const indexOfBeer = state.cervezasCatalogo.indexOf(beerToDelete[0]);
      state.cervezasCatalogo.splice(indexOfBeer, 1);
      state.beerToDelete = [];
    },
    ADD_EXTERNAL_BEER(state, newExternalBeer) {
      state.cervezasCatalogo.push(newExternalBeer);
      console.log("state.sugerencias", state.cervezasCatalogo);
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

    // CRUD INVENTARIO
    addNewExternalBeer(context, newExternalBeer) {
      Firebase.firestore()
        .collection("externalBeers")
        .add(newExternalBeer)
        .catch((e) => {
          console.log(e);
        });
      context.commit("ADD_EXTERNAL_BEER", newExternalBeer);
    },
    deleteExternalBeer(context, beerId) {
      Firebase.firestore()
        .collection("externalBeers")
        .doc(beerId)
        .delete()
        .then(() => {
          console.log("la cerveza se borro satisfactoriamente");
        })
        .catch((error) => {
          console.error("error: ", error);
        });
      context.commit("DELETE_EXTERNAL_BEER", beerId);
    },

    editExternalBeer(context, beer) {
      Firebase.firestore()
        .collection("externalBeers")
        .doc(beer.id)
        .update(beer)
        .then(() => {
          console.log("edicion crud probando");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
