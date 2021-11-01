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

// state: {
  //   inCartProducts: [],
  // },
  // getters: {
  //   shopCartTotalAmount(state) {
  //     return state.inCartProducts.reduce((acum, product) => {
  //       acum += product.price * (1 - product.discount / 100) * product.quantity;
  //       return acum;
  //     }, 0);
  //   },
  // },
  // mutations: {
  //   ADD_PRODUCT(state, newProductCart) {
  //     state.inCartProducts.push(newProductCart);
  //     console.log("en el carrito", state.inCartProducts);
  //     console.log("state", state);
  //   },
  //   ADD_QUANTITY(state, productIndexFinded) {
  //     state.inCartProducts[productIndexFinded].quantity++;
  //   },
  //   SUB_QUANTITY(state, productIndexFinded) {
  //     state.inCartProducts[productIndexFinded].quantity--;
  //   },
  //   SUB_PRODUCT(state, productIndexFinded) {
  //     state.inCartProducts.splice(productIndexFinded, 1);
  //   },
  //   ERASE_PRODUCT(state, productIndexFinded) {
  //     state.inCartProducts.splice(productIndexFinded, 1);
  //   },
  //   CLEAR_CART(state) {
  //     state.inCartProducts = [];
  //   },
  // // },
  // actions: {
  //   addProductToCart(context, product) {
  //     const productIndex = context.state.inCartProducts.findIndex(
  //       (productInCart) => productInCart.code === product.code
  //     );
  //     if (productIndex === -1) {
  //       // no in cart
  //       // eslint-disable-next-line no-unused-vars
  //       const { stock, ...inCartProduct } = product;
  //       context.commit("ADD_PRODUCT", { ...inCartProduct, quantity: 1 });
  //     } else {
  //       //in cart
  //       context.commit("ADD_QUANTITY", productIndex);
  //     }
  //   },
  //   subProductInCart(context, product) {
  //     const productIndex = context.state.inCartProducts.findIndex(
  //       (productInCart) => productInCart.code === product.code
  //     );
  //     console.log(productIndex);
  //     if (productIndex >= 0) {
  //       if (context.state.inCartProducts[productIndex].quantity > 1) {
  //         context.commit("SUB_QUANTITY", productIndex);
  //       } else {
  //         context.commit("SUB_PRODUCT", productIndex);
  //       }
  //     }
  //   },
  //   eraseProductOfCart(context, product) {
  //     const productIndex = context.state.inCartProducts.findIndex(
  //       (productInCart) => productInCart.code === product.code
  //     );
  //     if (productIndex >= 0) {
  //       context.commit("ERASE_PRODUCT", productIndex);
  //     }
  //   },
  //   async buyCart(context) {
  //     const delay = (ms) => {
  //       return new Promise((resolve) => {
  //         setTimeout(() => {
  //           resolve();
  //           console.log("operacion ok");
  //         }, ms);
  //       });
  //     };
  //     await delay(3000);
  //     context.commit("CLEAR_CART");

  //   },
  // },
