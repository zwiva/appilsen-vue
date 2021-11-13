<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="6">
        <div class="text-center">
          <img class="gif mt-6" src="@/assets/imgbeers/factory.gif" />
        </div>
        <div class="my-6">
          <h4>
            Arma tu cerveza como siempre quisiste y disfrutala donde quieras.
            Ven a retirarla, la tendremos heladita para ti, y si te animas
            disfrutala en nuestro bar.
          </h4>
        </div>
        <v-carousel cycle max-width="300">
          <v-carousel-item
            v-for="(slideItem, i) in slideItems"
            :key="i"
            :src="slideItem.src"
            height="400px"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" sm="8" md="6" class="mt-3">
        <v-card flat>
          <v-form ref="form" @submit.prevent="submit">
            <v-container fluid>
              <!-- Formulario armado -->
              <h4 class="py-3">Tu creación:</h4>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Nombra tu creación"
                    :rules="rules.completedField"
                    v-model="formShop.nombre"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    label="Escoge el estilo"
                    v-model="formShop.style"
                    :rules="rules.selectedField"
                    :items="style"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    label="Escoge la malta"
                    :rules="rules.selectedField"
                    v-model="formShop.malt"
                    :items="malt"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    label="Escoge la levadura"
                    :rules="rules.selectedField"
                    v-model="formShop.yest"
                    :items="yest"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    label="Escoge el lúpulo"
                    :rules="rules.selectedField"
                    v-model="formShop.hop"
                    :items="hop"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    label="Ingrediente adicional"
                    :rules="rules.selectedField"
                    v-model="formShop.additional"
                    :items="additional"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    label="Escoge el formato"
                    :rules="rules.selectedField"
                    v-model="formShop.format"
                    :items="format"
                    @change="setPriceByFormat(formShop.format)"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Ingresa cantidad"
                    type="number"
                    min="0"
                    step="1"
                    :rules="rules.completedField"
                    v-model="formShop.cantidad"
                    @change="quantitySelection()"
                    @click="quantitySelection()"
                  />
                </v-col>
              </v-row>
              <!-- Textos resumen pedido -->
              <v-btn class="py-3" @click="showOrderSummary = !showOrderSummary">
                <span v-if="!showOrderSummary">
                  Ver detalle de tu pedido:
                </span>
                <span v-else> Ocultar detalle: </span>
              </v-btn>
              <v-card
                v-if="showOrderSummary"
                class="text-right pa-5"
                color="#3c3c3c"
                style="color: white"
              >
                <p class="order_title">
                  Nombre:
                  <strong class="order_selection">{{ formShop.nombre }}</strong>
                </p>
                <p class="order_title">
                  Estilo:
                  <strong class="order_selection">{{ formShop.style }}</strong>
                </p>
                <p class="order_title">
                  Malta:
                  <strong class="order_selection">{{ formShop.malt }}</strong>
                </p>
                <p class="order_title">
                  Levadura:
                  <strong class="order_selection">{{ formShop.yest }}</strong>
                </p>
                <p class="order_title">
                  Lúpulo:
                  <strong class="order_selection">{{ formShop.hop }}</strong>
                </p>
                <p class="order_title">
                  Adicionales:
                  <strong class="order_selection">{{
                    formShop.additional
                  }}</strong>
                </p>
                <p class="order_title">
                  Formato:
                  <strong class="order_selection">{{ formShop.format }}</strong>
                </p>
                <p class="order_title">
                  Precio por formato:
                  <strong class="order_selection"
                    >$ {{ formShop.precio.toLocaleString() }}</strong
                  >
                </p>
                <p class="order_title">
                  Cantidad:
                  <strong class="order_selection">{{
                    formShop.cantidad
                  }}</strong>
                </p>
                <p class="order_title">
                  Pagar:
                  <strong class="order_selection"
                    >$ {{ formShop.pagar.toLocaleString() }}</strong
                  >
                </p>
              </v-card>
              <div class="d-flex my-3">
                <v-btn
                  color="gray"
                  class="zoom"
                  dark
                  @click="addToCart(formShop)"
                  >AGREGAR AL CARRITO</v-btn
                >
              </div>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <!-- dialogo: mostrar mensaje producto agregado a carrito -->
    <div>
      <v-dialog v-model="productAddedToCart" max-width="380px" class="flex">
        <v-card elevation="7" rounded class="text-center">
          <v-container class="background-beer">
            <div class="background-white ma-5 pa-3">
              <h2 class="text-center">Producto agregado al carrito</h2>
              <v-row class="mt-3 justify-space-around">
                <v-btn
                  color="amber"
                  class="align-self-center zoom ma-1"
                  @click="productAddedToCart = false"
                >
                  AGREGAR +
                </v-btn>
                <v-btn
                  color="amber"
                  class="align-self-center zoom ma-1"
                  @click="goToCart"
                >
                  IR AL CARRITO
                </v-btn>
              </v-row>
            </div>
          </v-container>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>
<script>
import store from "../../../../store";
export default {
  name: "shopform",
  data: () => ({
    slideItems: [
      {
        src: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/01/25/15169052662226.jpg",
      },
      {
        src: "https://www.cervezabyra.com/img/BYRA-fabrica-de-cerveza-artesana-euskadi-01@2x.jpg",
      },
      {
        src: "https://www.eleconomista.com.mx/__export/1532316423752/sites/eleconomista/img/2018/07/22/cerveza-artesanal--shutterstock_337557026.jpg_673822677.jpg",
      },
      {
        src: "https://labuenacheve.com/wp-content/uploads/2021/01/PORTADAS-WORDPRESS-51.png",
      },
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    // formulario:
    formShop: {
      id: 0,
      nombre: "",
      style: "",
      malt: "",
      yest: "",
      hop: "",
      additional: "",
      format: "",
      precio: "",
      cantidad: "",
      pagar: "",
    },
    rules: {
      completedField: [
        (val) => (val || "").length > 0 || "Por favor completar.",
      ],
      selectedField: [
        (val) => (val || "").length > 0 || "Por favor seleccionar.",
      ],
    },
    style: ["Lager", "Pale Ale", "Ipa", "Stout", "Bock"],
    malt: [
      "Pils, Lager",
      "Caramelo, Pils",
      "Pale, Cristal",
      "Tostada, Chocolate",
      "Caramunich",
    ],
    yest: [
      "Saflager",
      "Liberty bell",
      "Safale",
      "Ale Irish, English Ale",
      "Bavarian",
    ],
    hop: [
      "Spalt, Sterling, Ultra",
      "Cascade, Glacier",
      "Cascade, Mosaic, Citra",
      "East Kent, North Down",
      "Hallertauer, Magnummount",
    ],
    additional: ["Lupulo, Citda, Amarillo", "Pomelo", "Leche"],
    format: [
      "1 Litro",
      "2 Litros",
      "6 botellas 330 cc",
      "24 botellas 330 cc",
      "Barril 20 Litros",
      "Barril 50 Litros",
    ],
    precio: [3000, 6000, 12000, 48000, 30000, 50000],
    showOrderSummary: false,
    productAddedToCart: false,
  }),
  methods: {
    setPriceByFormat(format) {
      switch (format) {
        case this.format[0]:
          this.formShop.precio = this.precio[0];
          break;
        case this.format[1]:
          this.formShop.precio = this.precio[1];
          break;
        case this.format[2]:
          this.formShop.precio = this.precio[2];
          break;
        case this.format[3]:
          this.formShop.precio = this.precio[3];
          break;
        case this.format[4]:
          this.formShop.precio = this.precio[4];
          break;
        case this.format[5]:
          this.formShop.precio = this.precio[5];
          break;
        default:
          break;
      }
    },
    quantitySelection() {
      switch (this.formShop.format) {
        case this.format[0]:
          this.formShop.pagar = this.precio[0] * this.formShop.cantidad;
          this.formShop.id =
            this.formShop.pagar * this.formShop.cantidad * 0.1751;
          break;
        case this.format[1]:
          this.formShop.pagar = this.precio[1] * this.formShop.cantidad;
          this.formShop.id =
            this.formShop.pagar * this.formShop.cantidad * 1.1753;
          break;
        case this.format[2]:
          this.formShop.pagar = this.precio[2] * this.formShop.cantidad;
          this.formShop.id =
            this.formShop.pagar * this.formShop.cantidad * 2.1755;
          break;
        case this.format[3]:
          this.formShop.pagar = this.precio[3] * this.formShop.cantidad;
          this.formShop.id =
            this.formShop.pagar * this.formShop.cantidad * 3.1757;
          break;
        case this.format[4]:
          this.formShop.pagar = this.precio[4] * this.formShop.cantidad;
          this.formShop.id =
            this.formShop.pagar * this.formShop.cantidad * 4.1759;
          break;
        case this.format[5]:
          this.formShop.pagar = this.precio[5] * this.formShop.cantidad;
          this.formShop.id =
            this.formShop.pagar * this.formShop.cantidad * 5.1751;
          break;
        default:
          break;
      }
    },

    addToCart(shopForm) {
      store.dispatch("carrito/addProductoCarrito", shopForm);
      this.productAddedToCart = true;

      // this.formShop = {}; // limpia formulario
      // pero falta ejecutar reset validations
    },
    goToCart() {
      this.$router.push("/carrito");
    },
    resetForm1() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
  },
};
</script>
<style>
.gif {
  width: 80%;
}
.order_title {
  color: #919191;
}
.order_selection {
  color: #f8a203;
}
</style>
