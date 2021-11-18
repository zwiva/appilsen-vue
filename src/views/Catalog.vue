<template>
  <div>
    <!-- ACA SE COMPRA -->
    <div class="content-grid mx-auto">
      <h2 class="ma-6 text-center title_section">Catalogo de cervezas</h2>
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
            <v-form
              @submit.prevent="guardarSugerencias"
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
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey" dark @click="cancelAddNewSuggestion">
                CANCELAR
              </v-btn>
              <v-btn color="gray" dark @click="guardarSugerencias">
                GUARDAR
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-dialog>
      <div class="">
        <v-dialog v-model="suggestionSuccessful" max-width="400px">
          <v-card class="pa-5">
            <div class="ma-4">
              <h3 class="ma-3 py-5 text-center">
                Hemos registrado tu recomendación.
                <p>Revísala en la seccion "RECOMENDACIONES"</p>
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
    </div>
  </div>
</template>
<script>
import store from "../store";
import ExternalBeerCard from "../components/auth/shop/catalogs/ExternalBeerCard.vue";
export default {
  name: "Catalog",
  components: { ExternalBeerCard },
  async beforeRouteEnter(to, from, next) {
    await store.dispatch("productos/getAllexternalBeers");
    next();
  },
  data: () => ({
    loading: false,
    newSuggestionDialog: false,
    suggestionSuccessful: false,
    newSuggestion: {
      name: "",
      style: "",
      brand: "",
      originCountry: "",
      format: "",
      price: "",
      observations: "",
    },
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
      this.suggestionSuccessful = true;
    },
    afterAddition() {
      this.suggestionSuccessful = false;
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
      this.$refs.form.reset();
    },
    required(v) {
      return !!v || "Este campo es obligatorio";
    },
  },
  mounted() {},
};
</script>
