<template>
  <div>
    <v-container grid-list-md>
      <v-col>
        <v-row>
        <v-card  elevation="2" outlined class="mx-auto" max-width="420">
          <v-img :src="beer.imagen" height="250px" contain />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                >Nombre cerveza: {{ beer.nombre }}</v-list-item-title
              >
              <v-list-item-title>Precio: $ {{ beer.precio }}</v-list-item-title>
              <v-list-item-subtitle
                >Estilo cerveza: {{ beer.estilo }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >alcohol: {{ beer.alcohol }}°</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Formato: {{ beer.formato }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-card-action>
            <v-btn color="info">Agregar al carrito</v-btn>
          </v-card-action>
        </v-card>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ExternalCardBeer",
  // data: () => ({}),
  props: {
    beer: { type: Object, require: true },
  },
};
</script>
