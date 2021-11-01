export const moduloCarrito = {
  namespaced: true,
  state: {
    cervezasCatalogo: [],
    accesorios: [],
  },

  mutations: {
    ADD_PRODUCTO(state, newProducto) {
      state.cervezasCatalogo.push(newProducto);
    },
  },

  actions: {
    addProducto(context, beer) {
      /*  const productosDeLaFirebase = context.state.cervezasCatalogo.findIndex
            ((productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre)
            
            if (productosDeLaFirebase === -1 ) {  */
      // eslint-disable-next-line no-unused-vars
      const { stock, ...newProducto } = beer;
      context.commit("ADD_PRODUCTO", { ...newProducto, cantidad: 1 });
      /*  }  */
    },
  },
};
