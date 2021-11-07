// import Firebase from "firebase";

export const moduloCarrito = {
  namespaced: true,
  state: {
    carrito: [],
  },
  getters: {
    shopCartTotalAmount(state) {
      return state.carrito.reduce((acum, product) => {
        acum += product.price * (1 - product.discount / 100) * product.quantity;
        return acum;
      }, 0);
    },
  },
  mutations: {
    ADD_PRODUCT_TO_CARRITO(state, newProducto) {
      state.carrito.push(newProducto);
      console.log("en el carrito hay: ", state.carrito);
    },
    ADD_QUANTITY(state, productIndexFinded) {
      state.carrito[productIndexFinded].quantity++;
    },
    SUB_QUANTITY(state, productIndexFinded) {
      state.carrito[productIndexFinded].quantity--;
    },
    SUB_PRODUCT(state, productIndexFinded) {
      state.carrito.splice(productIndexFinded, 1);
    },
    ERASE_PRODUCT(state, productIndexFinded) {
      state.carrito.splice(productIndexFinded, 1);
    },
    CLEAR_CART(state) {
      // console.log('CLEAR_CART -> lo que hay en el carrito', state);
      state.carrito = [];
    },
  },
  actions: {
    addProductoCarrito(context, product) {
      // incluir limite de stock, no puede incrementar cantidad mayor a stock registrado en data que siene de firestore
      const productIndex = context.state.carrito.findIndex(
        (productInCart) => productInCart.id === product.id
      );
      if (productIndex === -1) {
        // eslint-disable-next-line no-unused-vars
        const { stock, ...carrito } = product;
        context.commit("ADD_PRODUCT_TO_CARRITO", { ...carrito, quantity: 1 });
      } else {
        context.commit("ADD_QUANTITY", productIndex);
      }
    },
    increaseQuantity(context, product) {
      const productIndex = context.state.carrito.findIndex(
        (productInCart) => productInCart.id === product.id
      );
      console.log(productIndex);
      if (productIndex >= 0) {
        if (context.state.carrito[productIndex].quantity > 0) {
          context.commit("ADD_QUANTITY", productIndex);
        }
      }
    },
    decreaseQuantity(context, product) {
      const productIndex = context.state.carrito.findIndex(
        (productInCart) => productInCart.id === product.id
      );
      // console.log(productIndex);
      if (productIndex >= 0) {
        if (context.state.carrito[productIndex].quantity > 1) {
          context.commit("SUB_QUANTITY", productIndex);
        } else {
          context.commit("SUB_PRODUCT", productIndex);
        }
      }
    },
    eraseProductOfCart(context, product) {
      const productIndex = context.state.carrito.findIndex(
        (productInCart) => productInCart.code === product.code
      );
      if (productIndex >= 0) {
        context.commit("ERASE_PRODUCT", productIndex);
      }
    },
    async buyCart(context) {
      const delay = (ms) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            console.log("operacion ok");

            // ACTUALIZAR FIRESTORE en base a context.state.carrito
            // editar cantidad de x producto
            // eliminar si cantidad es cero 


          }, ms);
        });
      };
      await delay(3000);

      context.commit("CLEAR_CART");
    },
  },
};
