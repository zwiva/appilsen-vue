<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="6">
        <h1>Arma tu pilsen como quieras</h1>

        <br />

        <v-img class="gif" src="@/assets/imgbeers/factory.gif"></v-img>

        <br />

          <h2>
          Arma tu cerveza como siempre quisiste y disfrutala donde quieras. Ven
          a retirarla, la tendremos heladita para ti, y si te animas disfrutala
          en nuestro bar.
        </h2>

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
        <br />

      </v-col>

        

      <v-col class="mt-3" cols="12" sm="8" md="6">
        <v-card flat>
          <v-form ref="form" @submit.prevent="submit">
            <v-container fluid>
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
            </v-container>

            <div class="ma-3">
              <h4 class="py-3">¿Qué quieres hacer con tu creacion?</h4>
              <!-- <div class="d-block"> -->
              <v-row class="pa-1">
                <v-col cols="12" sm="4" class="text-center">
                  <v-btn small @click="selectPickup">
                    Retirar<v-icon small>mdi-shopping</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="4" class="text-center">
                  <v-btn small @click="selectStore">
                    Consumir<v-icon small>mdi-glass-mug-variant</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="4" class="text-center">
                  <v-btn small @click="selectDispatch">
                    Despacho<v-icon small>mdi-truck-outline</v-icon>
                  </v-btn>
                </v-col>

                <div class="mx-auto">
                  <v-select
                    label="Escoge ubicación"
                    :rules="rules.selectedField"
                    v-model="formShop.shop"
                    :items="shops"
                    v-if="pickup"
                  >
                  </v-select>
                  <v-select
                    label="Escoge tienda"
                    :rules="rules.selectedField"
                    v-model="formShop.shop"
                    :items="shops"
                    v-if="store"
                  >
                  </v-select>
                  <v-row class="justify-center align-center">
                    <v-text-field
                      label="Ingresa una dirección"
                      :rules="rules.completedField"
                      v-model="formShop.address"
                      v-if="dispatch"
                    >
                    </v-text-field>

                    <v-btn
                      class="mx-1"
                      small
                      v-if="dispatch"
                      :disabled="loading"
                      :class="{ disabled: loading }"
                      @click="getLocation"
                    >
                      Obtener dirección
                    </v-btn>
                  </v-row>
                  <div class="form-group text-center">
                    <input
                      type="text"
                      class="location-control"
                      :value="location"
                      readonly
                    />
                    <!-- <button
                              type="button"
                              class="copy-btn"
                              @click="copyLocation"
                            >
                              copiar
                            </button> -->
                  </div>
                </div>
              </v-row>

              <v-spacer></v-spacer>

              <div>
                <div class="main">
                  <div class="flex pa-3 ma-3">
                    <!-- Map -->
                    <div class="map-holder">
                      <div id="map"></div>
                    </div>
                    <!-- Configurations -->
                    <div class="display-arena">
                      <!-- coordenadas -->
                      <div class="coordinates-header">
                        <h3>
                          Current Coordinates (QUITAR
                          <strong
                            >despues de tener coordenadas de lugares), meter en
                          </strong>
                        </h3>
                        <p>Latitude: {{ center[0] }}</p>
                        <p>Longitude: {{ center[1] }}</p>
                      </div>

                      <v-btn @click="goShowOrder">Ver pedido</v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <v-btn
                :disabled="!formIsValid"
                text
                color="primary"
                type="submit"
              >
                Register
              </v-btn> -->
            </div>
            <!-- </div> -->
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="showOrder">
      <v-card>
        <h3>Mostrar dialogo con resumen de pedido</h3>
        <v-btn @click="saveOrder">Confirmar</v-btn>
        <v-btn @click="showOrder = false">Cancelar</v-btn>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

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
      shop: "",
      address: "",
    },
    pickup: false,
    store: false,
    dispatch: false,
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
    shops: [
      "tienda 1",
      "tienda 2",
      "tienda 3",
      "tienda 4",
      "tienda 5",
      "tienda 6",
    ],
    // mapas:
    loading: false,
    location: "",
    access_token:
      "pk.eyJ1IjoiYW5kcmUwOSIsImEiOiJja3ZmaGpjYXZicWV0MnduenExamtra3UxIn0.hP-Qt5fSgf5qr4HF5EYGZQ",
    center: [-70.648872, -33.437767], // armar arreglos y escoger para meter en selectores
    map: {},
    showOrder: false,
  }),

  components: {},
  methods: {
    selectPickup() {
      console.log("escoge retiro en tienda");
      this.pickup = true;
      this.store = false;
      this.dispatch = false;
    },
    selectStore() {
      console.log("escoge consumo en tienda");
      this.store = true;
      this.pickup = false;
      this.dispatch = false;
    },
    selectDispatch() {
      console.log("escoge despacho");
      this.dispatch = true;
      this.pickup = false;
      this.store = false;
    },
    goShowOrder() {
      this.showOrder = true;
      console.log("meter en la store");
    },
    saveOrder() {
      console.log("guardar el pedido en la store y mandar a la firebase");
    },

    // resetForm2() {
    //   this.errorMessages = [];
    //   this.formHasErrors = false;

    //   Object.keys(this.form).forEach((f) => {
    //     this.$refs[f].reset();
    //   });
    // },
    // submit2() {
    //   this.formHasErrors = false;

    //   Object.keys(this.form).forEach((f) => {
    //     if (!this.form[f]) this.formHasErrors = true;

    //     this.$refs[f].validate(true);
    //   });
    // },
    resetForm1() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    // submit() {
    //   this.resetForm();
    // },

    // mapa:
    async createMap() {
      try {
        mapboxgl.accessToken = this.access_token;
        this.map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: this.center,
          zoom: 11,
        });

        let geocoder = new MapboxGeocoder({
          accessToken: this.access_token,
          mapboxgl: mapboxgl,
          marker: false,
        });

        this.map.addControl(geocoder);

        geocoder.on("result", (e) => {
          const marker = new mapboxgl.Marker({
            draggable: true,
            color: "#D80739",
          })
            .setLngLat(e.result.center)
            .addTo(this.map);
          this.center = e.result.center;
          marker.on("dragend", (e) => {
            this.center = Object.values(e.target.getLngLat());
          });
        });
      } catch (err) {
        console.log("map error", err);
      }
    },
    async getLocation() {
      try {
        this.loading = true;
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.center[0]},${this.center[1]}.json?access_token=${this.access_token}`
        );
        this.loading = false;
        this.location = response.data.features[0].place_name;
        console.log(
          "al hacer click esta info debe guardarse --> adjuntar a formulario y hacer dispatch",
          this.location
        );
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
    copyLocation() {
      if (this.location) {
        navigator.clipboard.writeText(this.location);
        alert("Location Copied");
      }
      return;
    },
  },
  mounted() {
    this.createMap();
  },
  // created() {
  //   this.mapbox = Mapbox;
  // },
};
</script>

<style>

.gif {
  height: 270px;
  width: 500px;
  margin-left: 8rem;
}

h1 {
  margin-left: 9rem;
}

</style>
