<template>
  <div>
    <!-- <h1>componente para mapa</h1> -->
    <v-card>
      <div class="ma-3">
        <h4 class="py-3">¿Qué quieres hacer con tu pedido?</h4>
        <v-row class="pa-1">
          
          <!-- botonera seleccion destino -->
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

          <!-- selectores post seleccion destino -->
          <div class="mx-auto">
            <v-select
              label="Escoge ubicación"
              :rules="rules.selectedField"
              v-model="destination.shop"
              :items="shops"
              v-if="pickup"
            >
            </v-select>
            <v-select
              label="Escoge tienda"
              :rules="rules.selectedField"
              v-model="destination.shop"
              :items="shops"
              v-if="store"
            >
            </v-select>
            <v-row class="justify-center align-center">
              <v-text-field
                label="Ingresa una dirección"
                :rules="rules.completedField"
                v-model="destination.address"
                v-if="dispatch"
                class="px-6"
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
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
export default {
  name: "SetLocalization",
  components: {},
  // mounted() {
  //   this.createMap(); // COMENTADO PARA EVITAR HACER TODAS LAS PETICIONES
  // },
  data: () => ({
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
    destination: '',
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
    accessToken:
      "pk.eyJ1IjoiYW5kcmUwOSIsImEiOiJja3ZmaGpjYXZicWV0MnduenExamtra3UxIn0.hP-Qt5fSgf5qr4HF5EYGZQ", // your access token. Needed if you using Mapbox maps
  }),
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
  props: {},
};
</script>

<style>
</style>