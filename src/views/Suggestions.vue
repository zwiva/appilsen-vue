<template>
  <v-container>
    <!-- principal -->
    <div class="content-grid mx-auto">
      <h2 class="text-center ma-6 title_section">Recomiéndanos</h2>
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

      <h3 class="text-center">Tus recomendadas:</h3>
      
      <v-layout align-center justify-space-between class="my-6 mx-auto">
        <v-row class="d-flex flex-column justify-center">
          <!-- <div v-for="(suggestion, index) in suggestions" :key="index"> -->
          <v-container>
            <div
              v-for="sugerencia in $store.state.recomendaciones.sugerencias"
              :key="sugerencia.id"
            >
              <v-row class="justify-center">
                <v-col cols="12" xs="8" md="8" >
                  <SuggestionCard :sugerencia="sugerencia" class="my-5" />
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-row>
      </v-layout>
    </div>

    <!-- dialogo para agregar sugerencia-->
    <v-dialog v-model="newSuggestionDialog" max-width="800px">
      <template>
        <v-card elevation="7" class="pa-3">
          <v-container>
            <v-card-title>
              <span class="text-h5"
                >Ingresa el detalle de tu recomendación:
              </span>
            </v-card-title>

            <v-card-text>
              <v-form
                @submit.prevent="guardarSugerencias(newSuggestion)"
                class="my-5"
                ref="form"
              >
                <v-row>
                  <v-col cols="12" sm="6" class="fit_view">
                    <v-text-field
                      v-model="newSuggestion.nombre"
                      label="Nombre Cerveza:"
                      :rules="[required]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="fit_view">
                    <v-text-field
                      v-model="newSuggestion.marca"
                      label="Marca:"
                      :rules="[required]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="fit_view">
                    <v-text-field
                      v-model="newSuggestion.pais"
                      label="Pais origen:"
                      :rules="[required]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="fit_view">
                    <v-text-field
                      v-model="newSuggestion.estilo"
                      label="Estilo:"
                      :rules="[required]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="fit_view">
                    <v-text-field
                      v-model="newSuggestion.alcohol"
                      label="Alcohol:"
                      :rules="[required]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="fit_view">
                    <v-text-field
                      v-model="newSuggestion.formato"
                      label="Formato:"
                      :rules="[required]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="fit_view">
                    <v-text-field
                      v-model="newSuggestion.precio"
                      label="Precio:"
                      :rules="[required]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="fit_view">
                    <v-text-field
                      v-model="newSuggestion.observaciones"
                      label="Observaciones:"
                      :rules="[required]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="fit_view">
                    <v-text-field
                      v-model="newSuggestion.imagen"
                      label="Imagen:"
                      :rules="[required]"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey" dark @click="cancelAddNewSuggestion">
                CANCELAR
              </v-btn>

              <v-btn
                color="gray"
                dark
                @click="guardarSugerencias(newSuggestion)"
              >
                GUARDAR
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </template>
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
      marca: "",
      nombre: "",
      pais: "",
      estilo: "",
      formato: "",
      precio: "",
      observaciones: "",
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
        console.log("funciona validacion");
        store.dispatch("recomendaciones/addSuggestion", newSuggestion);
        this.newSuggestionDialog = false;
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
  },
};
</script>
