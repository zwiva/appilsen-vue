// import Firebase from "firebase";

export const moduloCarrito = {
  namespaced: true,
  state: {
    carrito: [],
    method: "",
    finallocation: "",
  },
  getters: {
    shopCartTotalAmount(state) {
      return state.carrito.reduce((acum, product) => {
        acum += product.precio * product.cantidad;
        return acum;
      }, 0);
    },
  },
  mutations: {
    ADD_PRODUCT_TO_CARRITO(state, newProducto) {
      state.carrito.push(newProducto);
      // console.log("en el carrito hay: ", state.carrito);
    },
    ADD_QUANTITY(state, productIndexFinded) {
      state.carrito[productIndexFinded].cantidad++;
      // console.log("en el carrito hay: ", state.carrito);
    },
    SUB_QUANTITY(state, productIndexFinded) {
      state.carrito[productIndexFinded].cantidad--;
      // console.log("en el carrito hay: ", state.carrito);
    },
    SUB_PRODUCT(state, productIndexFinded) {
      state.carrito.splice(productIndexFinded, 1);
      // console.log("en el carrito hay: ", state.carrito);
    },
    ERASE_PRODUCT(state, productIndexFinded) {
      state.carrito.splice(productIndexFinded, 1);
      // console.log("en el carrito hay: ", state.carrito);
    },
    CLEAR_CART(state) {
      // console.log('CLEAR_CART -> lo que hay en el carrito', state);
      state.carrito = [];
    },
    SET_SHOP_METHOD(state, method) {
      state.method = method;
    },
    SET_DESTINATION_ADDRESS(state, address) {
      state.finallocation = address;
    },
  },
  actions: {
    addProductoCarrito(context, product) {
      // incluir limite de stock, no puede incrementar cantidad mayor a stock registrado en data que siene de firestore

      const productIndex = context.state.carrito.findIndex(
        (productInCart) => productInCart.id === product.id
      );
      // console.log("indice", productIndex);

      if (productIndex === -1 && product.malt) {
        // eslint-disable-next-line no-unused-vars
        const { stock, ...carrito } = product;
        context.commit("ADD_PRODUCT_TO_CARRITO", {
          ...carrito,
          cantidad: product.cantidad,
        });
        // console.log("agrega cerveza armada");
      } else if (productIndex === -1) {
        // eslint-disable-next-line no-unused-vars
        const { stock, ...carrito } = product;
        context.commit("ADD_PRODUCT_TO_CARRITO", { ...carrito, cantidad: 1 });
        // console.log("agrega cerveza externa");
      } else {
        context.commit("ADD_QUANTITY", productIndex);
        // console.log("incrementa cantidad cerveza externa");
      }
    },
    increaseQuantity(context, product) {
      const productIndex = context.state.carrito.findIndex(
        (productInCart) => productInCart.id === product.id
      );
      if (productIndex >= 0) {
        if (context.state.carrito[productIndex].cantidad > 0) {
          context.commit("ADD_QUANTITY", productIndex);
        }
      }
    },
    decreaseQuantity(context, product) {
      const productIndex = context.state.carrito.findIndex(
        (productInCart) => productInCart.id === product.id
      );
      if (productIndex >= 0) {
        if (context.state.carrito[productIndex].cantidad > 1) {
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
          }, ms);
        });
      };
      await delay(1500);
      context.commit("CLEAR_CART");
    },
    setMethod(context, method) {
      context.commit("SET_SHOP_METHOD", method);
    },
    setLocation(context, address) {
      context.commit("SET_DESTINATION_ADDRESS", address);
    },
  },
};
