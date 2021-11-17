<template>
  <div>
    <!-- <h1>componente para mapa</h1> -->
    <v-card>
      <div class="pa-3 ma-3">
        <h4 class="py-3">¿Qué quieres hacer con tu pedido?</h4>
        <v-row>
          <!-- ESCOGE RETIRAR -->
          <v-col cols="12" sm="4" class="text-center">
            <v-btn dark @click="selectPickup()">
              Retirar<v-icon>mdi-shopping</v-icon>
            </v-btn>
            <div v-if="pickup">
              <v-select
                label="Escoge ubicación"
                :rules="rules.selectedField"
                v-model="destination.shop"
                :items="shops"
                @click="getLocation()"
                @change="setDestination(destination.shop)"
              >
              </v-select>
              <div v-if="destinationSelectedShop" class="">
                <p>Local escogido: {{ destination.shop }}</p>
                <p>Dirección: {{ location }}</p>
                <v-btn
                  dark
                  small
                  type="button"
                  class="copy-btn mt-3"
                  @click="copyLocation"
                >
                  Copiar direccion
                  <v-icon small class="ml-1">mdi-content-copy</v-icon>
                </v-btn>
                <v-btn
                  dark
                  small
                  type="button"
                  class="copy-btn mt-3 ml-2"
                  @click="setMethodAndAddress(destination.shop)"
                >
                  Escoger
                  <v-icon small class="ml-1">mdi-check-circle</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- ESCOGE CONSUMIR -->
          <v-col cols="12" sm="4" class="text-center">
            <v-btn dark @click="selectStore">
              Consumir<v-icon>mdi-glass-mug-variant</v-icon>
            </v-btn>
            <div v-if="store">
              <v-select
                label="Escoge tienda"
                :rules="rules.selectedField"
                v-model="destination.shop"
                :items="shops"
                @click="getLocation()"
                @change="setDestination(destination.shop)"
              >
              </v-select>
              <div v-if="destinationSelectedShop" class="">
                <p>Local escogido: {{ destination.shop }}</p>
                <p>Dirección: {{ location }}</p>
                <v-btn
                  dark
                  small
                  type="button"
                  class="copy-btn mt-3"
                  @click="copyLocation"
                >
                  Copiar direccion
                  <v-icon small class="ml-1">mdi-content-copy</v-icon>
                </v-btn>
                <v-btn
                  dark
                  small
                  type="button"
                  class="copy-btn mt-3 ml-2"
                  @click="setMethodAndAddress(destination.shop)"
                >
                  Escoger
                  <v-icon small class="ml-1">mdi-check-circle</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
          <!-- ESCOGE DESPACHO -->
          <v-col cols="12" sm="4" class="text-center">
            <v-btn dark @click="selectDispatch">
              Despacho<v-icon>mdi-truck-outline</v-icon>
            </v-btn>
            <div v-if="dispatch">
              <v-col class="">
                <v-text-field
                  label="Ingresa una dirección"
                  :rules="rules.completedField"
                  v-model="destination.address"
                  class="px-6"
                >
                </v-text-field>
              </v-col>
            </div>
            <div v-if="destinationSelectedDispatch">
              <p class="text-left">
                Dirección ingresada: {{ destination.address }}
              </p>
              <v-btn
                small
                dark
                type="button"
                class="copy-btn mt-3"
                @click="copyAddress"
              >
                Copiar direccion
                <v-icon small class="ml-1">mdi-content-copy</v-icon>
              </v-btn>
              <v-btn
                dark
                small
                type="button"
                class="copy-btn mt-3 ml-2"
                @click="setMethodAndAddress(destination.address)"
              >
                Escoger
                <v-icon small class="ml-1">mdi-check-circle</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <!-- MAPA !!! -->
        <div>
          <div class="main">
            <div class="flex">
              <v-btn color="amber" @click="showMap()" class="my-3"
                >Ver en Mapa <v-icon>mdi-map</v-icon></v-btn
              >
              <div class="map-holder">
                <div id="map"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
    <v-dialog v-model="showMethodAndAddress" max-width="320px">
      <v-card class="pa-5">
        <h2 class="text-center">Escogiste:</h2>
        <p class="pt-5"><strong>Método escogido:</strong> {{ $store.state.carrito.method }}</p>
        <p class=""><strong>Direccion destino:</strong> {{ $store.state.carrito.finallocation }}</p>
        <div class="d-flex justify-center">

        <v-btn color="amber" @click="showMethodAndAddress = false">Ok</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import store from "../../../store";
export default {
  name: "SetLocalization",
  components: {},
  data: () => ({
    loading: false,
    pickup: false,
    store: false,
    dispatch: false,
    destinationSelectedShop: false,
    destinationSelectedDispatch: false,
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
    shops: [
      "El Honesto Mike",
      "On Tap Chile",
      "Apiádate De Mi",
      "KrossBar BordeRío",
      "KrossBar Bellavista",
    ],
    lats: [-70.605477, -70.609142, -70.615195, -70.579915, -70.634291],
    longs: [-33.42082, -33.420187, -33.426793, -33.381909, -33.43321],
    address: [
      "El Honesto Mike, Los Leones, Providencia",
      "On Tap Amsterdam, Pasaje General Adolfo Holley 84, Providencia",
      "Dr. Luis Middleton 1654, Providencia",
      "Krossbar, 6400 Avenida San Josemaria Escriva de Balaguer, Vitacura",
      "KrossBar Bellavista, Calle Dardignac 0127, Providencia",
    ],
    // mapas
    location: "",
    map: {},
    access_token:
      "pk.eyJ1IjoiYW5kcmUwOSIsImEiOiJja3ZmaGpjYXZicWV0MnduenExamtra3UxIn0.hP-Qt5fSgf5qr4HF5EYGZQ",
    center: [-70.605477, -33.42082],
    method: "", //pickup, store, home
    finaladdress: "",
    showMethodAndAddress: false,
  }),

  methods: {
    selectPickup() {
      this.pickup = true;
      this.store = false;
      this.dispatch = false;
      this.method = "retira en tienda";
    },
    selectStore() {
      this.store = true;
      this.pickup = false;
      this.dispatch = false;
      this.destinationSelectedDispatch = false;
      this.method = "consume en tienda";
    },
    selectDispatch() {
      this.dispatch = true;
      this.pickup = false;
      this.store = false;
      this.destinationSelectedShop = false;
      this.destinationSelectedDispatch = true;
      this.method = "despacho a domicilio";
    },
    setDestination(shop) {
      this.destinationSelectedShop = true;
      this.destinationSelectedDispatch = false;
      switch (shop) {
        case this.shops[0]:
          this.getLocation();
          this.center = [this.lats[0], this.longs[0]];
          break;
        case this.shops[1]:
          this.center = [this.lats[1], this.longs[1]];
          this.getLocation();
          break;
        case this.shops[2]:
          this.center = [this.lats[2], this.longs[2]];
          this.getLocation();
          break;
        case this.shops[3]:
          this.center = [this.lats[3], this.longs[3]];
          this.getLocation();
          break;
        case this.shops[4]:
          this.center = [this.lats[4], this.longs[4]];
          this.getLocation();
          break;
        default:
          break;
      }
    },
    setDestinationShop() {
      // console.log("escoge consumo en tienda ", this.destination.shop);
      this.destinationSelectedShop = false;
      this.destinationSelectedDispatch = false;
    },
    setMethodAndAddress(locationOrAddress) {
      // console.log("escoge", locationOrAddress);
      switch (locationOrAddress) {
        case this.shops[0]:
          this.finaladdress = this.address[0];
          store.dispatch("carrito/setMethod", this.method);
          store.dispatch("carrito/setLocation", this.finaladdress);
          this.showMethodAndAddress = true;
          // console.log("metodo", this.method);
          // console.log("direccion", this.finaladdress);
          break;
        case this.shops[1]:
          this.finaladdress = this.address[1];
          store.dispatch("carrito/setMethod", this.method);
          store.dispatch("carrito/setLocation", this.finaladdress);
          this.showMethodAndAddress = true;
          // console.log("metodo", this.method);
          // console.log("direccion", this.finaladdress);
          break;
        case this.shops[2]:
          this.finaladdress = this.address[2];
          store.dispatch("carrito/setMethod", this.method);
          store.dispatch("carrito/setLocation", this.finaladdress);
          this.showMethodAndAddress = true;
          // console.log("metodo", this.method);
          // console.log("direccion", this.finaladdress);
          break;
        case this.shops[3]:
          this.finaladdress = this.address[3];
          store.dispatch("carrito/setMethod", this.method);
          store.dispatch("carrito/setLocation", this.finaladdress);
          this.showMethodAndAddress = true;
          // console.log("metodo", this.method);
          // console.log("direccion", this.finaladdress);
          break;
        case this.shops[4]:
          this.finaladdress = this.address[4];
          store.dispatch("carrito/setMethod", this.method);
          store.dispatch("carrito/setLocation", this.finaladdress);
          this.showMethodAndAddress = true;
          // console.log("metodo", this.method);
          // console.log("direccion", this.finaladdress);
          break;
        default:
          this.finaladdress = locationOrAddress;
          store.dispatch("carrito/setMethod", this.method);
          store.dispatch("carrito/setLocation", this.finaladdress);
          this.showMethodAndAddress = true;
          // console.log("metodo", this.method);
          // console.log("direccion", this.finaladdress);
          break;
      }
    },

    goShowOrder() {
      this.showOrder = true;
    },
    showMap() {
      this.createMap(); // COMENTADO PARA EVITAR HACER TODAS LAS PETICIONES
    },
    // mapa:
    async getLocation() {
      try {
        this.loading = true;
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.center[0]},${this.center[1]}.json?access_token=${this.access_token}`
        );
        this.loading = false;
        this.location = response.data.features[0].place_name;
        // console.log("location", this.location);
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
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
          // console.log("center", this.center);
          marker.on("dragend", (e) => {
            this.center = Object.values(e.target.getLngLat());
          });
        });
      } catch (err) {
        console.log("map error", err);
      }
    },
    copyLocation() {
      if (this.location) {
        navigator.clipboard.writeText(this.location);
        alert("Direccion copiada, por favor ingrésala en el mapa.");
      }
      return;
    },
    copyAddress() {
      navigator.clipboard.writeText(this.destination.address);
      alert("Direccion copiada, por favor ingrésala en el mapa.");
    },
  },
  // mounted() {
  //   this.createMap(); // COMENTADO PARA EVITAR HACER TODAS LAS PETICIONES
  // },
};
</script>
<style>
.mapboxgl-canvas {
  height: 300px;
}
</style>
