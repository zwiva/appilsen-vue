<template>
  <div>
    <v-container grid-list-md>
      <v-card color="amber" class="ma-3 suggestions">
        <p><strong>Nombre cerveza:</strong> {{ suggestion.name }}</p>
        <p><strong>Marca:</strong> {{ suggestion.brand }}</p>
        <p><strong>Pais de origen:</strong> {{ suggestion.originCountry }}</p>
        <p><strong>Estilo: </strong>{{ suggestion.style }}</p>
        <p><strong>Formato: </strong>{{ suggestion.format }}</p>
        <p><strong>Precio: </strong>{{ suggestion.price }}</p>
        <v-btn @click="editDialog = true">Editar</v-btn>
        <v-btn @click="deleteDialog = true">Eliminar</v-btn>
      </v-card>
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
