<template>
  <div>
    <!-- ACA SE COMPRA -->
    <div class="content-grid mx-auto">
      <h2 class="text-center ma-6 title_section">Catalogo de cervezas</h2>
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
              @submit.prevent="guardarSugerencias(newSuggestion)"
              class="my-5"
              ref="form"
            >
              <v-row>
                <v-col cols="12" sm="6" class="fit_view">
                  <v-text-field
                    :disabled="loading"
                    v-model="newSuggestion.nombre"
                    label="Nombre Cerveza:"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="fit_view">
                  <v-text-field
                    :disabled="loading"
                    v-model="newSuggestion.marca"
                    label="Marca:"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="fit_view">
                  <v-text-field
                    :disabled="loading"
                    v-model="newSuggestion.pais"
                    label="Pais origen:"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="fit_view">
                  <v-text-field
                    :disabled="loading"
                    v-model="newSuggestion.estilo"
                    label="Estilo:"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="fit_view">
                  <v-text-field
                    :disabled="loading"
                    v-model="newSuggestion.formato"
                    label="Formato:"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="fit_view">
                  <v-text-field
                    :disabled="loading"
                    v-model="newSuggestion.precio"
                    label="Precio:"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="fit_view">
                  <v-text-field
                    :disabled="loading"
                    v-model="newSuggestion.observaciones"
                    label="Observaciones:"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="fit_view">
                  <v-text-field
                    :disabled="loading"
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
    loading: false,
    newSuggestionDialog: false,
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
