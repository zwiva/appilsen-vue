<template>
  <div>
    <v-card class="nabvar--gradient">
      <v-toolbar dark flat tile>
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
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
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
          to: "/beerstock",
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
        // {
        //   title: "Inspirate",
        //   icon: "",
        //   to: "/nuestras",
        // },
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
.nabvar--gradient {
  background: linear-gradient(135deg, #3c3c3c, rgb(19, 19, 19));
}
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>

