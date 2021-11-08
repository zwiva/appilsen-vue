<template>
  <v-container>
    <!-- principal -->
    <div class="content-grid mx-auto">
      <h1 class="text-center ma-6">Recomiéndanos</h1>
      <div class="my-6">
        <p>
          Si encuentras una cerveza que no está en nuestro catalogo, por favor
          completa el formulario con los datos que nos permitan buscarla para
          que intentemos agregarla a nuesta oferta:
          <v-btn @click="showNewSuggestionDialog" class="ml-3" color="primary"
            >Agrega nueva</v-btn
          >
        </p>
      </div>

      <h1 class="text-center ma-6">Tus recomendadas:</h1>
      <v-layout align-center justify-space-between class="my-6 mx-auto">
        <v-row d-flex flex-wrap class="justify-center">
          <!-- <div v-for="(suggestion, index) in suggestions" :key="index"> -->
          <div
            v-for="suggestion in $store.state.productos.sugerencias"
            :key="suggestion.id"
          >
            <SuggestionCard :suggestion="suggestion" />
          </div>
        </v-row>
      </v-layout>
    </div>

    <!-- dialogo para agregar sugerencia-->
    <v-dialog v-model="newSuggestionDialog" max-width="800px">
      <v-card elevation="7" class="pa-3">
        <v-container>
          <h2 class="text-center">Ingresa el detalle de tu recomendación:</h2>
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
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="newSuggestion.imagen"
                  label="Imagen:"
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
  </v-container>
</template>
<script>
import store from "../store";

import SuggestionCard from "../components/auth/suggestions/SuggestionCard.vue";

export default {
  name: "UserSuggestions",
  components: { SuggestionCard },

  beforeRouteEnter(to, from, next) {
    store.dispatch("productos/getAllSuggestionsFirestore");
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
      imagen: "",
    },
    suggestions: [],
  }),

  mounted() {
    store.dispatch("productos/getAllSuggestionsFirestore");
    console.log("mounted");
  },

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
};
</script>
