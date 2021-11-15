<template>
  <!-- todo el navbar -->
  <v-toolbar color="grey darken-4" dark class="px-0">
    <!-- navbar desktop -->
    <v-spacer></v-spacer>
    <v-toolbar-items
      class="hidden-sm-and-down px-0"
      color="grey darken-4"
      flat
      height="90px"
    >
      <!-- HOME -->
      <v-list-item :to="items[0].to" dark>
        <v-list-item-content v-model="tab" align-with-title>
          <v-spacer></v-spacer>
          <v-list-item-title text-align-center>
            {{ items[0].title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- ARMAR -->
      <v-list-item :to="items[1].to">
        <v-list-item-content v-model="tab" align-with-title>
          <v-spacer></v-spacer>
          <v-list-item-title text-align-center>
            {{ items[1].title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- CATALOGO -->
      <v-list-item :to="items[2].to">
        <v-list-item-content v-model="tab" align-with-title>
          <v-spacer></v-spacer>
          <v-list-item-title text-align-center>
            {{ items[2].title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- MERCH -->
      <v-list-item :to="items[3].to">
        <v-list-item-content v-model="tab" align-with-title>
          <v-spacer></v-spacer>
          <v-list-item-title text-align-center>
            {{ items[3].title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- NOSOTROS -->
      <v-list-item :to="items[4].to">
        <v-list-item-content v-model="tab" align-with-title>
          <v-spacer></v-spacer>
          <v-list-item-title text-align-center>
            {{ items[4].title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- RECOMENDACIONES -->
      <v-list-item :to="items[5].to">
        <v-list-item-content v-model="tab" align-with-title>
          <v-spacer></v-spacer>
          <v-list-item-title text-align-center>
            {{ items[5].title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- RANDOM -->
      <v-list-item :to="items[6].to">
        <v-list-item-content v-model="tab" align-with-title>
          <v-spacer></v-spacer>
          <v-list-item-title text-align-center>
            {{ items[6].title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- ADM STOCK -->
      <v-list-item
        :to="items[7].to"
        v-if="this.$store.state.sesion.user.tipodeusuario === 'administrador'"
      >
        <v-list-item-content v-model="tab" align-with-title>
          <v-spacer></v-spacer>
          <v-list-item-title text-align-center>
            {{ items[7].title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- CARRITO -->
      <v-list-item :to="items[8].to">
        <v-list-item-content v-model="tab" align-with-title>
          <v-spacer></v-spacer>
          <v-list-item-title text-align-center>
            {{ items[8].title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-toolbar-items>
    <!-- navbar mobile -->
    <v-spacer></v-spacer>
    <v-toolbar-items
      class="hidden-md-and-up px-0"
      color="grey darken-4"
      dark
      flat
      height="90px"
    >
      <div class="text-center px-0">
        <v-menu offset-y>
          <template v-slot:activator="{ on }" class="px-0">
            <div class="d-flex align-center px-0">
              <v-btn color="grey darken-4" class="ma-3" dark v-on="on">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </div>
          </template>

          <v-list color="grey darken-4" dark class="px-0">
            <!-- HOME -->
            <v-list-item :to="items[0].to">
              <v-list-item-content v-model="tab" align-with-title>
                <v-spacer></v-spacer>
                <v-list-item-title text-align-center>
                  {{ items[0].title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- ARMAR -->
            <v-list-item :to="items[1].to">
              <v-list-item-content v-model="tab" align-with-title>
                <v-spacer></v-spacer>
                <v-list-item-title text-align-center>
                  {{ items[1].title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- CATALOGO -->
            <v-list-item :to="items[2].to">
              <v-list-item-content v-model="tab" align-with-title>
                <v-spacer></v-spacer>
                <v-list-item-title text-align-center>
                  {{ items[2].title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- MERCH -->
            <v-list-item :to="items[3].to">
              <v-list-item-content v-model="tab" align-with-title>
                <v-spacer></v-spacer>
                <v-list-item-title text-align-center>
                  {{ items[3].title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- NOSOTROS -->
            <v-list-item :to="items[4].to">
              <v-list-item-content v-model="tab" align-with-title>
                <v-spacer></v-spacer>
                <v-list-item-title text-align-center>
                  {{ items[4].title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- RECOMENDACIONES -->
            <v-list-item :to="items[5].to">
              <v-list-item-content v-model="tab" align-with-title>
                <v-spacer></v-spacer>
                <v-list-item-title text-align-center>
                  {{ items[5].title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- RANDOM -->
            <v-list-item :to="items[6].to">
              <v-list-item-content v-model="tab" align-with-title>
                <v-spacer></v-spacer>
                <v-list-item-title text-align-center>
                  {{ items[6].title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- ADM STOCK -->
            <v-list-item
              :to="items[7].to"
              v-if="
                this.$store.state.sesion.user.tipodeusuario === 'administrador'
              "
            >
              <v-list-item-content v-model="tab" align-with-title>
                <v-spacer></v-spacer>
                <v-list-item-title text-align-center>
                  {{ items[7].title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- CARRITO -->
            <v-list-item :to="items[8].to">
              <v-list-item-content v-model="tab" align-with-title>
                <v-spacer></v-spacer>
                <v-list-item-title text-align-center>
                  {{ items[8].title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      tab: null,
      items: [
        {
          id: 0,
          title: "Inicio",
          icon: "mdi-home",
          to: "/",
        },
        { id: 1, title: "Arma tu Pilsen", icon: "", to: "/armar" },
        { id: 2, title: "Catalogo", icon: "", to: "/catalogo" },
        { id: 3, title: "Merch", icon: "", to: "/merch" },
        { id: 4, title: "Nuestro Equipo", icon: "info", to: "/ourteam" },
        { id: 5, title: "Recomendaciones", icon: "", to: "/recomendaciones" },
        { id: 6, title: "Random", icon: "", to: "/random" },
        { id: 7, title: "Administrador stock", icon: "", to: "/beerstock" },
        { id: 8, title: "Carrito", icon: "", to: "/carrito" },
      ],
    };
  },

  methods: {
    menuItems() {
      return this.items;
    },
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
div.v-toolbar__content {
  padding: 4px 0px;
}
</style>
