<template>
  <div>
    <template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Edita cerveza: </span>
        </v-card-title>

        <v-card-text>
          <v-form
            @submit.prevent="addNewExternalBeer"
            ref="form"
            lazy-validation
          >
            <v-row>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="beer.nombre"
                  label="Nombre*"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="beer.precio"
                  label="Precio*"
                  :rules="[required]"
                  >$</v-text-field
                >
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="beer.estilo"
                  label="Estilo*"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="beer.alcohol"
                  type="number"
                  label="Alcohol*"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="beer.formato"
                  label="Formato*"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="beer.imagen"
                  label="Imagen*"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="beer.stock"
                  label="Stock*"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" dark @click="cancelEdition"> CANCELAR </v-btn>
          <v-btn color="gray" dark @click="confirmEdition(beer)">
            EDITAR
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>
<script>
import store from "../../../store";
export default {
  name: "EditExternalBeerForm",
  props: {
    beer: { type: Object, required: true },
  },
  data: () => ({}),
  methods: {
    cancelEdition() {
      this.$emit("cancelEdition", false);
    },
    confirmEdition(beer) {
      store.dispatch("productos/editExternalBeer", beer);
    },
    required(value) {
      return !!value || "Campo obligatorio, por favor ingresar credenciales.";
    },
  },
};
</script>
<style>
.fit_view {
}
</style>
