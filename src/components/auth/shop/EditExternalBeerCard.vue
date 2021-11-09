<template>
  <div>
    <v-container>
      <v-card elevation="7" class="pa-3 mx-auto" max-width="280px">
        <v-img class="zoom" :src="beer.imagen" max-width="280px" contain />
        <v-list-item>
          <v-list-item-content>
            <div class="my-4">
              <v-list-item-title>{{ beer.nombre }}</v-list-item-title>
              <v-list-item-title>${{ beer.precio }}</v-list-item-title>
              <v-list-item-subtitle>{{ beer.estilo }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ beer.alcohol }}°</v-list-item-subtitle>
              <v-list-item-subtitle>{{ beer.formato }}</v-list-item-subtitle>
            </div>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="gray" dark @click="editExternalBeer(beer)"
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
              <v-btn color="gray" dark @click="deleteExternalBeer(beer)"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>

    <!-- dialogo para editar -->
    <v-dialog v-model="showEditExternalBeerForm" persistent max-width="600px">
      <EditExternalBeerForm :beer="beer" @cancelEdition="closeEditionDialog" />
    </v-dialog>
  </div>
</template>

<script>
import store from "../../../store";
import EditExternalBeerForm from "@/components/auth/shop/EditExternalBeerForm.vue";

export default {
  name: "EditExternalBeerCard",
  components: { EditExternalBeerForm },
  data: () => ({
    showEditExternalBeerForm: false,
    // beerToEdit: {},
  }),
  props: {
    beer: { type: Object, require: true },
  },
  methods: {
    // ELIMINAR
    deleteExternalBeer(beer) {
      console.log("falta dialogo de confirmacion de eliminacion");
      store.dispatch("productos/deleteExternalBeer", beer);
      console.log("falta dialogo de aviso de eliminacion exitosa");
    },
    // EDITAR
    editExternalBeer(beer) {
      // WORKS!!!
      this.showEditExternalBeerForm = true;
      store.dispatch("productos/deleteExternalBeer", beer);
      console.log("falta dialogo que avise que se edito", beer);
    },
    closeEditionDialog(value) {
      this.showEditExternalBeerForm = value;
    },
  },
};
</script>

<style>
.zoom {
  transition: transform 0.5s;
}
.zoom:hover {
  transform: scale(1.1);
}
</style>
