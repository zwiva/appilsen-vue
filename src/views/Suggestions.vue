<template>
  <div>
    <!-- principal -->
    <div>
      <h1>Recomiéndanos:</h1>
      <p>
        Si encuentras una cerveza que no está en nuestro catalogo, por favor
        completa el formulario con los datos que nos permitan buscarla para que
        intentemos agregarla a nuesta oferta:
        <v-btn @click="showDialog = true" color="primary"
          >Agregar nueva recomendación</v-btn
        >
      </p>
      <h1>Tus recomendadas:</h1>

      <v-layout align-center justify-space-between>
        <v-row d-flex class="flex-column">
          <div v-for="(suggestion, index) in suggestions" :key="index">
            <SuggestionCard :suggestion="suggestion" />
          </div>
        </v-row>
      </v-layout>
    </div>

    <!-- dialogo para agregar sugerencia-->
    <v-dialog v-model="showDialog" max-width="800px">
      <v-card elevation="7" class="pa-3">
        <v-container>
          <h2 class="text-center">Ingresa el detalle de tu sugerencia: </h2>
          <v-form ref="form">
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
            <v-btn color="success" class="mr-4" @click="saveSuggestion"> Guardar </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import SuggestionCard from "../components/auth/recomendaciones/SuggestionCard.vue";
export default {
  name: "Suggestions",
  components: { SuggestionCard },
  data: () => ({
    showDialog: false,
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
      {
        name: "dos",
        brand: "alguna marca",
        originCountry: "algun pais",
        style: "ipa",
        format: "lata",
        price: 2000,
      },
      {
        name: "tres",
        brand: "alguna marca",
        originCountry: "algun pais",
        style: "ipa",
        format: "lata",
        price: 2000,
      },
      {
        name: "cuatro",
        brand: "alguna marca",
        originCountry: "algun pais",
        style: "ipa",
        format: "lata",
        price: 2000,
      },
      {
        name: "cinco",
        brand: "alguna marca",
        originCountry: "algun pais",
        style: "ipa",
        format: "lata",
        price: 2000,
      },
      {
        name: "seis",
        brand: "alguna marca",
        originCountry: "algun pais",
        style: "ipa",
        format: "lata",
        price: 2000,
      },
    ],
  }),
  methods:{
    saveSuggestion() {
      console.log('guarda sugerencia')
    }
  },
};
</script>
