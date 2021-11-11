<template>
  <div>
    <!-- <h1>componente para mapa</h1> -->
    <v-card>
      <div class="ma-3">
        <h4 class="py-3">¿Qué quieres hacer con tu pedido?</h4>
        <v-row class="pa-1">
          <!-- ESCOGE RETIRAR -->
          <v-col cols="12" sm="4" class="text-center">
            <v-btn small @click="selectPickup">
              Retirar<v-icon small>mdi-shopping</v-icon>
            </v-btn>
            <div v-if="pickup">
              <v-select
                label="Escoge ubicación"
                :rules="rules.selectedField"
                v-model="destination.shop"
                :items="shops"
                @change="setDestination(destination.shop)"
              >
              </v-select>
              <p>{{ destination.shop }}</p>
              <v-btn
                v-if="dispatch"
                class="mx-1"
                small
                :disabled="loading"
                :class="{ disabled: loading }"
                @click="getLocation"
              >
                Obtener dirección
              </v-btn>
            </div>
          </v-col>

          <!-- ESCOGE CONSUMIR -->
          <v-col cols="12" sm="4" class="text-center">
            <v-btn small @click="selectStore">
              Consumir<v-icon small>mdi-glass-mug-variant</v-icon>
            </v-btn>
            <div v-if="store">
              <v-select
                label="Escoge tienda"
                :rules="rules.selectedField"
                v-model="destination.shop"
                :items="shops"
                @change="setDestination(destination.shop)"
              >
              </v-select>
              <p>{{ destination.shop }}</p>

              <v-btn
                v-if="dispatch"
                class="mx-1"
                small
                :disabled="loading"
                :class="{ disabled: loading }"
                @click="getLocation"
              >
                Obtener dirección
              </v-btn>
            </div>
          </v-col>

          <!-- ESCOGE DESPACHO -->
          <v-col cols="12" sm="4" class="text-center">
            <v-btn small @click="selectDispatch">
              Despacho<v-icon small>mdi-truck-outline</v-icon>
            </v-btn>
            <div v-if="dispatch">
              <v-row class="justify-center align-center">
                <v-text-field
                  label="Ingresa una dirección"
                  :rules="rules.completedField"
                  v-model="destination.address"
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
              <input
                type="text"
                class="location-control"
                :value="location"
                readonly
              />

              <v-btn type="button" class="copy-btn" @click="copyLocation">
                Copiar direccion
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <v-spacer></v-spacer>

        <!-- MAPA !!! -->
        <div>
          <div class="main">
            <div class="flex pa-3 ma-3">
              <!-- Map -->
              <v-btn @click="showMap()">Mapa</v-btn>
              <div class="map-holder">
                <div id="map"></div>
              </div>
              <!-- Configurations -->
              <div class="display-arena">
                <!-- coordenadas -->
                <div class="coordinates-header">
                  <h3></h3>
                  <p>Latitude: {{ center[0] }}</p>
                  <p>Longitude: {{ center[1] }}</p>
                </div>

                <!-- <v-btn @click="goShowOrder">Ver pedido</v-btn> -->
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
  mounted() {
    // this.createMap(); // COMENTADO PARA EVITAR HACER TODAS LAS PETICIONES
  },
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
    destination: {
      shop: "",
      address: "",
    },

    // datos para mapas:
    shops: [
      "El Honesto Mike",
      "On Tap Chile",
      "Apiádate De Mi ❤️🔥🍻",
      "KrossBar BordeRío",
      "KrossBar Bellavista",
    ],
    lats: [-70.6074582, -70.611228, -70.6177036, -70.6122513, -70.6694633],
    longs: [-33.4207783, -33.4203453, -33.4273828, -33.3814802, -33.4333333],
    // construccion mapas:
    loading: false,
    location: "",
    latitude: "",
    longitude: "",
    access_token:
      "pk.eyJ1IjoiYW5kcmUwOSIsImEiOiJja3ZmaGpjYXZicWV0MnduenExamtra3UxIn0.hP-Qt5fSgf5qr4HF5EYGZQ",
    center: [-70.648872, -33.437767], // armar arreglos y escoger para meter en selectores
    map: {},
  }),

  methods: {
    selectPickup() {
      this.pickup = true;
      this.store = false;
      this.dispatch = false;
    },
    setDestination(shop) {
      switch (shop) {
        case this.shops[0]:
          this.center = [this.lats[0], this.longs[0]];
          
          break;
        case this.shops[1]:
          this.center = [this.lats[1], this.longs[1]];

          break;
        case this.shops[2]:
          this.center = [this.lats[2], this.longs[2]];

          break;
        case this.shops[3]:
          this.center = [this.lats[3], this.longs[3]];

          break;
        case this.shops[4]:
          this.center = [this.lats[4], this.longs[4]];

          break;
        default:
          break;
      }
      console.log("escoge retiro en tienda ", this.destination.shop);
    },

    selectStore() {
      console.log("escoge consumo en tienda");
      this.store = true;
      this.pickup = false;
      this.dispatch = false;
    },
    setDestinationShop() {
      // console.log("escoge consumo en tienda ", this.destination.shop);
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
    showMap() {
      this.createMap(); // COMENTADO PARA EVITAR HACER TODAS LAS PETICIONES
    },
    // mapa:
    async createMap() {
      try {
        mapboxgl.accessToken = this.access_token;

        this.map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: this.center,
          zoom: 16,
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
          console.log("center", this.center);
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
        // const response = await axios.get(
        //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.center[0]},${this.center[1]}.json?access_token=${this.access_token}`
        // );
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.center[0]},${this.center[1]}.json?access_token=${this.access_token}`
        );
        this.loading = false;
        this.location = response.data.features[0].place_name;
        console.log("location", this.location);
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
