<template>
  <div>
    <!-- ACA SE COMPRA -->
    <div class="content-grid mx-auto">
      <h1 class="text-center ma-6">Catalogo de cervezas</h1>
      <div class="my-6">
        <p>
          Acá puedes agregar una o mas cervezas a tu pedido, son nuestras marcas
          amigas!:
        </p>
        <p>
          Recomiéndanos un nuevo producto:
          <v-btn color="primary" @click="showNewSuggestionDialog" class="ml-3"
            >RECOMIÉNDANOS</v-btn
          >
        </p>
      </div>
      <!-- Cervezas para comprar -->
      <v-layout align-center justify-space-between class="my-6 mx-auto">
        <v-row d-flex flex-wrap class="justify-center my-3">
          <div
            v-for="beer in $store.state.productos.cervezasCatalogo"
            :key="beer.id"
          >
            <ExternalBeerCard :beer="beer" />
          </div>
        </v-row>
      </v-layout>
    </div>

    <!-- dialogo: agregar nueva sugerencia-->
    <div>
      <v-dialog v-model="newSuggestionDialog" max-width="800px">
        <v-card elevation="7" class="pa-3">
          <v-container>
            <h2 class="text-center">Ingresa el detalle de tu recomendación:</h2>
            <p class="my-4 text-center">
              Recuerda que puedes editar tus recomendaciones en la sección
              "Recomendaciones"
            </p>
            <v-form class="my-5" ref="form">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newSuggestion.name"
                    label="Nombre Cerveza:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newSuggestion.brand"
                    label="Marca:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newSuggestion.originCountry"
                    label="Pais origen:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newSuggestion.style"
                    label="Estilo:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newSuggestion.format"
                    label="Formato:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newSuggestion.price"
                    label="Precio:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newSuggestion.observations"
                    label="Observaciones:"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey" dark @click="cancelAddNewSuggestion">
                CANCELAR
              </v-btn>
              <v-btn color="gray" dark @click="createNewSuggestion">
                GUARDAR
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import store from "../store";
import ExternalBeerCard from "../components/auth/shop/catalogs/ExternalBeerCard.vue";
export default {
  name: "Catalog",
  components: { ExternalBeerCard },
  beforeRouteEnter(to, from, next) {
    store.dispatch("productos/getAllexternalBeers");
    next();
  },
  data: () => ({
    newSuggestionDialog: false,
    newSuggestion: {
      name: "",
      brand: "",
      originCountry: "",
      style: "",
      format: "",
      price: "",
      observations: "",
    },
  }),
  methods: {
    showNewSuggestionDialog() {
      this.newSuggestionDialog = true;
      console.log("muestra dialogo");
    },
    cancelAddNewSuggestion() {
      this.newSuggestionDialog = false;
      console.log("cancela nueva sugerencia");
    },
    createNewSuggestion() {
      console.log("guarda sugerencia");
      this.newSuggestionDialog = false;
    },
    deleteSuggestion() {
      console.log("eliminar");
    },
    editSuggestion() {
      console.log("editar");
    },
  },
  mounted() {},
};
</script>
