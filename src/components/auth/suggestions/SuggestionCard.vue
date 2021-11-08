<template>
  <div>
    <v-container grid-list-md>
      <v-col cols="12" md="4">
        <v-row>
          <v-card
            color="amber"
            class="suggestions mx-auto"
            max-width="340"
          >
            <v-img :src="suggestion.imagen" height="250px" contain />
            <p><strong>Nombre cerveza:</strong> {{ suggestion.nombre }}</p>
            <p><strong>Pais de origen:</strong> {{ suggestion.pais }}</p>
            <p><strong>Estilo: </strong>{{ suggestion.estilo }}</p>
            <p><strong>alcohol:</strong> {{ suggestion.alcohol }}°</p>
            <p><strong>Formato: </strong>{{ suggestion.formato }}</p>
            <p><strong>Precio: </strong>{{ suggestion.precio }}$</p>

          <v-card-actions>
              <v-btn @click="editDialog = true"
                ><v-icon> mdi-pencil</v-icon></v-btn
              >
              <v-btn @click="deleteDialog = true"
                ><v-icon>mdi-delete</v-icon></v-btn>
          </v-card-actions>
         
          </v-card>
        </v-row>
      </v-col>
    </v-container>

    <div>
      <v-dialog v-model="editDialog">
        <v-card>
          formulario editar, por props pasarle los parametros?
          <v-btn @click="editDialog = false">Editar</v-btn>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <v-dialog v-model="deleteDialog">
        <v-card>
          modal de pregunta si quiere eliminar
          <v-btn @click="showDeleteConfirmation">Si</v-btn>
          <v-btn @click="deleteDialog = false">No</v-btn>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <v-dialog v-model="confirmDeleteDialog">
        <v-card>
          modal de confirmacion de borrado
          <v-btn @click="confirmDeleteDialog = false">Ok</v-btn>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuggestionCard",
  data: () => ({
    editDialog: false,
    deleteDialog: false,
    confirmDeleteDialog: false,
  }),
  methods: {
    showDeleteConfirmation() {
      this.deleteDialog == false;
      this.confirmDeleteDialog = true;
    },
  },
  props: {
    suggestion: { type: Object, require: true },
  },
};
</script>
<style scoped>
.suggestions p {
  margin: 0;
}
</style>
