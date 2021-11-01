<template>
  <div>
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
    <div>
      <v-dialog v-model="showDialog" max-width="800px">
        <v-card elevation="7" shaped>
          <v-card-title> aca va un formulario </v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              label="Nombre Cerveza"
              required
            ></v-text-field>

            <v-text-field
              v-model="estilo"
              label="Estilo"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="Formato"
              required
            ></v-text-field>

            <v-text-field
              v-model="imagen"
              label="Imagen"
              required
            ></v-text-field>

            <v-btn color="success" class="mr-4"> Guardar </v-btn>
          </v-form>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import SuggestionCard from "../components/auth/recomendaciones/SuggestionCard.vue";
export default {
  name: "Suggestions",
  components: { SuggestionCard },
  data: () => ({
    showDialog: false,
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
};
</script>
