<template>
  <v-container>
    <!-- principal -->
    <div class="content-grid mx-auto">
      <h2 class="ma-6 text-center title_section">Recomiéndanos</h2>
      <div class="my-6">
        <p>
          Si encuentras una cerveza que no está en nuestro catalogo, por favor
          completa el formulario con los datos que nos permitan buscarla para
          que intentemos agregarla a nuesta oferta:
          <v-btn
            @click="showNewSuggestionDialog"
            class="ml-3 zoom"
            color="primary"
            >Agrega nueva</v-btn
          >
        </p>
      </div>
      <div
        v-if="this.$store.state.sesion.user.tipodeusuario === 'administrador'"
      >
        <h3 class="text-center subtitle_section">Todas las recomendadas:</h3>
        <v-layout align-center justify-space-between class="my-6 mx-auto">
          <v-row class="d-flex flex-column justify-center">
            <!-- <div v-for="(suggestion, index) in suggestions" :key="index"> -->
            <v-container>
              <div
                v-for="sugerencia in $store.state.recomendaciones.sugerencias"
                :key="sugerencia.id"
              >
                <v-row class="justify-center">
                  <v-col cols="12" xs="8" md="8">
                    <SuggestionCard :sugerencia="sugerencia" class="my-5" />
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-row>
        </v-layout>
      </div>
      <div v-else>
        <h3 class="text-center subtitle_section">Tus recomendadas:</h3>
        <v-layout align-center justify-space-between class="my-6 mx-auto">
          <v-row class="d-flex flex-column justify-center">
            <!-- <div v-for="(suggestion, index) in suggestions" :key="index"> -->
            <v-container>
              <div
                v-for="sugerencia in $store.state.recomendaciones
                  .sugerenciasUsuario"
                :key="sugerencia.id"
              >
                <v-row class="justify-center">
                  <v-col cols="12" xs="8" md="8">
                    <SuggestionCard :sugerencia="sugerencia" class="my-5" />
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-row>
        </v-layout>
      </div>
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
                @submit.prevent="guardarSugerencias()"
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
              <v-btn color="gray" dark @click="guardarSugerencias()">
                GUARDAR
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </template>
    </v-dialog>

    <div class="">
      <v-dialog v-model="confirmAddition" max-width="400px">
        <v-card class="pa-5">
          <div class="ma-4">
            <h3 class="ma-3 py-5 text-center">
              Hemos registrado tu recomendación.
              <h2>Muchas gracias!</h2>
            </h3>
            <v-row class="justify-center py-5">
              <v-btn color="amber" class="zoom" @click="afterAddition"
                >Ok</v-btn
              >
            </v-row>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>
<script>
import store from "../store";
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
    confirmAddition: false,
  }),
  methods: {
    async guardarSugerencias() {
      if (this.$refs.form.validate()) {
        this.newSuggestion = {
          usuarioid: this.$store.state.sesion.user.id,
          usuarioemail: this.$store.state.sesion.user.email,
          ...this.newSuggestion,
        };
        await store.dispatch(
          "recomendaciones/addSuggestion",
          this.newSuggestion
        );
        store.dispatch(
          "recomendaciones/setUsuarioEmail",
          this.$store.state.sesion.user.email
        );
        await store.dispatch(
          "recomendaciones/getUserSuggestionsFirestore",
          this.newSuggestion
        );
        this.$refs.form.reset();
        this.newSuggestionDialog = false;
      }
      this.confirmAddition = true;
    },
    afterAddition() {
      this.confirmAddition = false;
    },

    showNewSuggestionDialog() {
      this.newSuggestionDialog = true;
      // console.log("muestra dialogo");
    },
    cancelAddNewSuggestion() {
      this.newSuggestionDialog = false;
      // console.log("cancela nueva sugerencia");
    },
    createNewSuggestion() {
      // console.log("guarda sugerencia");
      this.newSuggestionDialog = false;
    },
    required(v) {
      return !!v || "Este campo es obligatorio";
    },
  },
  async mounted() {
    store.dispatch(
      "recomendaciones/setUsuarioEmail",
      this.$store.state.sesion.user.email
    );
    await store.dispatch(
      "recomendaciones/getUserSuggestionsFirestore",
      this.newSuggestion
    );
  },
};
</script>
