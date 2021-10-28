<template>
  <div>
    <div>
      <h1 class="text-center">Catalogo de cervezas</h1>
      <p>
        Acá puedes agregar una o mas cervezas a tu pedido, son nuestras marcas
        amigas!:
      </p>
      <v-btn color="info" @click="dialog = true">Sugierenos cervezas</v-btn>

      <v-layout align-center justify-space-between>
        <v-row d-flex flex-wrap class="justify-center">
          <div
            v-for="beer in $store.state.productos.cervezasCatalogo"
            :key="beer.id"
          >
            <ExternalCardBeer :beer="beer" />
          </div>
        </v-row>
      </v-layout>
    </div>
    <div v-if="dialog">
      <!-- ----------- -->

      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template>
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Sugierenos cervezas
            </v-btn>

            <v-card>
              <v-card-title>
                <span class="text-h5">Agrega una cerveza</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-form
                      @submit.prevent="guardarCambios"
                      ref="form"
                      v-model="valid"
                      lazy-validation
                    >
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="beer.nombre"
                          label="nombre"
                          :rules="[required]"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="beer.precio"
                          label="Precio"
                          :rules="[required]"
                          required
                          >$</v-text-field
                        >
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          v-model="beer.estilo"
                          label="Estilo"
                          :rules="[required]"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          v-model="beer.alcohol"
                          type="number"
                          label="alcohol"
                          :rules="[required]"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          v-model="beer.formato"
                          label="Formato"
                          :rules="[required]"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          v-model="beer.imagen"
                          label="imagen"
                          :rules="[required]"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-form>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-row>
      -->
    </div>
  </div>
</template>

<script>
import store from "../store";

import ExternalCardBeer from "../components/auth/ExternalCardBeer.vue";
import AddExternal from "../components/auth/Recomendaciones/AddExternal.vue";

export default {
  name: "ExternalBeers",
  components: { ExternalCardBeer, AddExternal },
  beforeRouteEnter(to, from, next) {
    store.dispatch("externalBeers/getAllexternalBeers");
    next();
  },

  data: () => ({
    dialog: false,
  }),

  mounted() {
    store.dispatch("productos/getAllexternalBeers");
    console.log("mounted");
  },
};
</script>
