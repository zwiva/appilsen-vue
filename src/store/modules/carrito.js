export const moduloCarrito = {
  namespaced: true,
  state: {
    todosLosProductos: [],
  },

  mutations: {
    ADD_PRODUCTO(state, newProducto) {
      state.todosLosProductos.push(newProducto);
    },
  },

  actions: {
    addProducto(context, producto ) {
        const productosDeLaFirebase = context.state.todosLosProductos.findIndex
            ((productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre)
            
            if (productosDeLaFirebase === -1 ) {  

      // eslint-disable-next-line no-unused-vars
      const { stock, ...newProducto } = producto;
      context.commit("ADD_PRODUCTO", { ...newProducto, cantidad: 1 });
        }  
    },
  },
};
