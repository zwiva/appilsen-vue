<template>
  <div>
    <v-card>
      <v-toolbar color="blue-grey darken-4" dark flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>APPILSEN </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-list-item
            v-for="(item, $index) in items"
            :key="$index"
            link
            :to="item.to"
          >
            <v-list-item-content v-model="tab" align-with-title>
              <v-spacer></v-spacer>
              <v-list-item-title tex-align-center>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      tab: null,
      items: [
        {
          title: "Inicio",
          icon: "mdi-home",
          to: "/",
        },

        {
          title: "Arma tu Pilsen",
          icon: "",
          to: "/armar",
        },
        {
          title: "Catalogo Cervezas",
          icon: "",
          to: "/beerStock",
        },
        {
          title: "Merch",
          icon: "",
          to: "/merch",
        },
        {
          title: "Nuestro Equipo",
          icon: "",
          to: "/ourteam",
        },
        {
          title: "Inspirate",
          icon: "",
          to: "/nuestras",
        },
        {
          title: "Carrito",
          icon: "",
          to: "/carrito",
        },
      ],
    };
  },
};
</script>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>

