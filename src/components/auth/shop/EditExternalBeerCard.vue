<template>
  <div>
    <v-container>
      <v-card elevation="7" class="pa-3 mx-auto" max-width="280px">
        <v-img
          class="zoom"
          :src="beer.imagen"
          max-width="280px"
          height="256px"
          contain
        />
        <v-list-item>
          <v-list-item-content>
            <div class="my-4">
              <v-list-item-subtitle
                >Nombre: {{ beer.nombre }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Estilo: {{ beer.estilo }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Precio: ${{ beer.precio }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Alcohol: {{ beer.alcohol }}°</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Formato: {{ beer.formato }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Stock: {{ beer.stock }}</v-list-item-subtitle
              >
            </div>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="gray" dark @click="showModalEditExternalBeer"
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
              <v-btn color="gray" dark @click="showModalDeleteExternalBeer"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
    <!-- BORRAR -->
    <!-- dialogo confirmacion borrar -->
    <v-dialog v-model="showDeleteExternalBeer" max-width="320px">
      <v-card class="pa-5 delete_dialog">
        <h3 class="pa-3">Desea eliminar este producto</h3>
        <v-row class="pa-3 justify-center justify-space-around">
          <v-btn color="gray" dark @click="showDeleteExternalBeer = false"
            >No</v-btn
          >
          <v-btn color="amber" dark @click="deleteExternalBeer(beer.id)"
            >Si</v-btn
          >
        </v-row>
      </v-card>
    </v-dialog>
    <!-- dialogo borrado exitosa -->
    <v-dialog v-model="externalBeerDeleted" max-width="320px">
      <v-card class="pa-5 delete_dialog">
        <h3 class="pa-3">Producto eliminado exitosamente</h3>
        <v-row class="pa-3 justify-center justify-space-around">
          <v-btn color="amber" @click="afterDelete">Ok</v-btn>
        </v-row>
      </v-card>
    </v-dialog>
    <!-- EDITAR -->
    <!-- dialogo para editar -->
    <v-dialog v-model="showEditExternalBeerForm" max-width="600px">
      <EditExternalBeerForm
        :beer="beer"
        @cancelEdition="closeEditionDialog"
        @completeEdition="editExternalBeer(beer)"
      />
    </v-dialog>
    <!-- dialogo edicion exitosa -->
    <v-dialog v-model="externalBeerEdited" max-width="320px">
      <v-card class="pa-5 delete_dialog">
        <h3 class="pa-3">Producto editado exitosamente</h3>
        <v-row class="pa-3 justify-center justify-space-around">
          <v-btn color="amber" @click="externalBeerEdited = false">Ok</v-btn>
        </v-row>
      </v-card>
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
    showDeleteExternalBeer: false,
    externalBeerDeleted: false,
    externalBeerEdited: false,
  }),
  props: {
    beer: { type: Object, require: true },
  },
  methods: {
    // ELIMINAR
    showModalDeleteExternalBeer() {
      this.showDeleteExternalBeer = true;
    },
    async deleteExternalBeer(beerId) {
      this.showDeleteExternalBeer = false;
      this.externalBeerDeleted = true;
      await store.dispatch("productos/deleteExternalBeer", beerId);
    },
    async afterDelete() {
      this.externalBeerDeleted = false;
      await store.dispatch("productos/getAllexternalBeers");
    },
    // EDITAR
    showModalEditExternalBeer() {
      this.showEditExternalBeerForm = true;
    },
    async editExternalBeer(beer) {
      this.showEditExternalBeerForm = false;
      await store.dispatch("productos/editExternalBeer", beer);
      this.externalBeerEdited = true;
    },
    closeEditionDialog() {
      this.showEditExternalBeerForm = false;
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
