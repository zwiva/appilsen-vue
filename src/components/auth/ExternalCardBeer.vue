<template>
  <div>
    <v-container grid-list-md>
      <v-col cols="12" md="4">
        <v-row>
          <v-card elevation="2" outlined class="mx-auto" max-width="340">
            <v-img :src="beer.imagen" height="250px" contain />
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >{{ beer.nombre }}</v-list-item-title
                >
                <v-list-item-title
                  >${{ beer.precio }}</v-list-item-title
                >
                <v-list-item-subtitle
                  >{{ beer.estilo }}</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  >{{ beer.alcohol }}°</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  >F{{ beer.formato }}</v-list-item-subtitle
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
