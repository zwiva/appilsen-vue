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
            v-for="sugerencia in $store.state.recomendaciones.sugerencias"
            :key="sugerencia.id"
          >
             <SuggestionCard :sugerencia="sugerencia" /> 
          </div>
        </v-row>
      </v-layout>
    </div>

    <!-- dialogo para agregar sugerencia-->
    <v-dialog v-model="newSuggestionDialog" max-width="800px">
      <v-card elevation="7" class="pa-3">
        <v-container>
          <h2 class="text-center">Ingresa el detalle de tu recomendación:</h2>
          <v-form @submit.prevent="guardarSugerencias(newSuggestion)" class="my-5" ref="form">
            <v-text-field
              :disabled="loading"
              v-model="newSuggestion.nombre"
              label="Nombre Cerveza:"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              :disabled="loading"
              v-model="newSuggestion.brand"
              label="Marca:"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              :disabled="loading"
              v-model="newSuggestion.pais"
              label="Pais origen:"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              :disabled="loading"
              v-model="newSuggestion.estilo"
              label="Estilo:"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              :disabled="loading"
              v-model="newSuggestion.formato"
              label="Formato:"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              :disabled="loading"
              v-model="newSuggestion.precio"
              label="Precio:"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              :disabled="loading"
              v-model="newSuggestion.observacion"
              label="Observaciones:"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              :disabled="loading"
              v-model="newSuggestion.imagen"
              label="Imagen:"
              :rules="[required]"
            ></v-text-field>
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
/* import Firebase from "firebase"; */

import SuggestionCard from "../components/auth/suggestions/SuggestionCard.vue";

export default {
  name: "UserSuggestions",
  components: { SuggestionCard },

  beforeRouteEnter(to, from, next) {
    store.dispatch("recomendaciones/getAllSuggestionsFirestore");
    next();
  }, 

  data: () => ({
    loading: false,
    newSuggestionDialog: false,
    newSuggestion: {
      nombre: "",
      brand: "",
      pais: "",
      estilo: "",
      formato: "",
      precio: "",
      observacion: "",
      imagen: "",
    },
    
  }),

/*   mounted() {
    store.dispatch("recomendaciones/getAllSuggestionsFirestore");
    console.log("mounted");
  }, */

  methods: {
    guardarSugerencias(newSuggestion) {
      if (this.$refs.form.validate()) {
        console.log("funciona validacion")
         store.dispatch("recomendaciones/addSuggestion", newSuggestion);
      }
    },

    required(v) {
      return !!v || "Este campo es obligatorio";
    },

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
