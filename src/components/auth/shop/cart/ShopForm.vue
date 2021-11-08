<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="6">
        <div class="text-center">
          <h1>Arma tu pilsen como quieras</h1>
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
                    v-model="formShop.name"
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
                    v-model="formShop.quantity"
                  />
                </v-col>
              </v-row>

              <!-- Textos resumen pedido -->
              <h4 class="py-3">Detalle de tu pedido:</h4>
              <v-card
                class="text-right pa-5"
                color="#3c3c3c"
                style="color: white"
              >
                <p class="order_title">
                  Nombre:
                  <strong class="order_selection">{{ formShop.name }}</strong>
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
                  Cantidad:
                  <strong class="order_selection">{{
                    formShop.quantity
                  }}</strong>
                </p>
              </v-card>
              <div class="d-flex my-3">
                <v-btn
                  color="gray"
                  class="zoom"
                  dark
                  @click="confirmOrder(formShop)"
                  >CONFIRMAR PEDIDO</v-btn
                >
              </div>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
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
      name: "",
      style: "",
      malt: "",
      yest: "",
      hop: "",
      additional: "",
      format: "",
      quantity: "",
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
  }),
  components: {},
  methods: {
    saveOrder() {
      console.log("guardar el pedido en la store y mandar al carrito");
    },
    resetForm1() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    confirmOrder(orderData) {
      console.log("orderDataFromForm", orderData);
      this.formShop = {}; // limpia formulario
      // pero falta ejecutar reset validations
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
