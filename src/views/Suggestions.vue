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
            >Agregar nueva recomendación</v-btn
          >
        </p>
      </div>

      <h1 class="text-center ma-6">Tus recomendadas:</h1>
      <v-layout align-center justify-space-between>
        <v-row d-flex class="flex-column">
          <div v-for="(suggestion, index) in suggestions" :key="index">
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
            <v-text-field
              v-model="newSuggestion.name"
              label="Nombre Cerveza:"
              required
            ></v-text-field>
            <v-text-field
              v-model="newSuggestion.brand"
              label="Marca:"
              required
            ></v-text-field>
            <v-text-field
              v-model="newSuggestion.originCountry"
              label="Pais origen:"
              required
            ></v-text-field>
            <v-text-field
              v-model="newSuggestion.style"
              label="Estilo:"
              required
            ></v-text-field>
            <v-text-field
              v-model="newSuggestion.format"
              label="Formato:"
              required
            ></v-text-field>
            <v-text-field
              v-model="newSuggestion.price"
              label="Precio:"
              required
            ></v-text-field>
            <v-text-field
              v-model="newSuggestion.observations"
              label="Observaciones:"
              required
            ></v-text-field>
          </v-form>
          <v-btn color="success" class="mr-4" @click="createNewSuggestion">
            GUARDAR
          </v-btn>
          <v-btn color="primary" class="mr-4" @click="cancelAddNewSuggestion">
            CANCELAR
          </v-btn>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import SuggestionCard from "../components/auth/suggestions/SuggestionCard.vue";
export default {
  name: "UserSuggestions",
  components: { SuggestionCard },
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
    suggestions: [
      {
        name: "una",
        brand: "alguna marca",
        originCountry: "algun pais",
        style: "ipa",
        format: "lata",
        price: 2000,
      },
    ],
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
};
</script>
