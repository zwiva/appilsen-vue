<template>
  <div>
    <v-container>
      <v-toolbar color="grey darken-4" dark>
        <v-spacer></v-spacer>
        <v-toolbar-items
          class="hidden-sm-and-down"
          color="grey darken-4"
          flat
          tile
          height="90px"
        >
  
          <v-list-item :to="items[0].to" v-if="isUser || isAdmin">
            <v-list-item-content v-model="tab" align-with-title>
              <v-spacer></v-spacer>
              <v-list-item-title text-align-center>
                {{ items[0].title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="items[1].to" v-if="isUser || isAdmin">
            <v-list-item-content v-model="tab" align-with-title>
              <v-spacer></v-spacer>
              <v-list-item-title text-align-center>
                {{ items[1].title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="items[2].to" v-if="isUser || isAdmin">
            <v-list-item-content v-model="tab" align-with-title>
              <v-spacer></v-spacer>
              <v-list-item-title text-align-center>
                {{ items[2].title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="items[3].to" v-if="isUser || isAdmin">
            <v-list-item-content v-model="tab" align-with-title>
              <v-spacer></v-spacer>
              <v-list-item-title text-align-center>
                {{ items[3].title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="items[4].to" v-if="isUser || isAdmin">
            <v-list-item-content v-model="tab" align-with-title>
              <v-spacer></v-spacer>
              <v-list-item-title text-align-center>
                {{ items[4].title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="items[5].to" v-if="isUser">
            <v-list-item-content v-model="tab" align-with-title>
              <v-spacer></v-spacer>
              <v-list-item-title text-align-center>
                {{ items[5].title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="items[6].to" v-if="isAdmin">
            <v-list-item-content v-model="tab" align-with-title>
              <v-spacer></v-spacer>
              <v-list-item-title text-align-center>
                {{ items[6].title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="items[7].to" v-if="isUser || isAdmin">
            <v-list-item-content v-model="tab" align-with-title>
              <v-spacer></v-spacer>
              <v-list-item-title text-align-center>
                {{ items[7].title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
          <!-- </template> -->
        </v-toolbar-items>
<v-spacer></v-spacer>
        <v-toolbar-items
          class="hidden-md-and-up"
          color="grey darken-4"
          dark
          flat
          tile
          height="90px"
        >
          <div class="text-center">
            
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                
                <v-btn color="grey darken-4" class="ma-3" dark v-on="on">
                  <v-icon >mdi-menu</v-icon>
                </v-btn>
              </template>

              <v-list color="grey darken-4" dark>
                <v-list-item :to="items[0].to" v-if="isUser || isAdmin">
                  <v-list-item-content v-model="tab" align-with-title>
                    <v-spacer></v-spacer>
                    <v-list-item-title text-align-center>
                      {{ items[0].title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item :to="items[1].to" v-if="isUser || isAdmin">
                  <v-list-item-content v-model="tab" align-with-title>
                    <v-spacer></v-spacer>
                    <v-list-item-title text-align-center>
                      {{ items[1].title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item :to="items[2].to" v-if="isUser || isAdmin">
                  <v-list-item-content v-model="tab" align-with-title>
                    <v-spacer></v-spacer>
                    <v-list-item-title text-align-center>
                      {{ items[2].title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item :to="items[3].to" v-if="isUser || isAdmin">
                  <v-list-item-content v-model="tab" align-with-title>
                    <v-spacer></v-spacer>
                    <v-list-item-title text-align-center>
                      {{ items[3].title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item :to="items[4].to" v-if="isUser || isAdmin">
                  <v-list-item-content v-model="tab" align-with-title>
                    <v-spacer></v-spacer>
                    <v-list-item-title text-align-center>
                      {{ items[4].title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item :to="items[5].to" v-if="isUser">
                  <v-list-item-content v-model="tab" align-with-title>
                    <v-spacer></v-spacer>
                    <v-list-item-title text-align-center>
                      {{ items[5].title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item :to="items[6].to" v-if="isAdmin">
                  <v-list-item-content v-model="tab" align-with-title>
                    <v-spacer></v-spacer>
                    <v-list-item-title text-align-center>
                      {{ items[6].title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item :to="items[7].to" v-if="isUser || isAdmin">
                  <v-list-item-content v-model="tab" align-with-title>
                    <v-spacer></v-spacer>
                    <v-list-item-title text-align-center>
                      {{ items[7].title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
                <!-- </template> -->
              </v-list>
            </v-menu>
          </div>
        </v-toolbar-items>
      </v-toolbar>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      tab: null,
      user: "",
      isAdmin: false, // este (los dos deben ser false al inicio, en el mounted con la props que llega se carga el tipo de usuario)
      isUser: true, // vs este (uno u otro)
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
        { id: 6, title: "Administrador stock", icon: "", to: "/beerstock" },
        { id: 7, title: "Carrito", icon: "", to: "/carrito" },
      ],
    };
  },

  methods: {
    menuItems() {
      return this.items;
    },
  },

  props: {
    // typeUser: { type: String, required: true },
  },
  mounted() {
    // this.user = this.typeUser; // por props llega el tipo de usuario
    // if (this.user === "admin") {
    //   // si el usuario es admin:
    //   console.log("usuario es admin");
    //   this.isAdmin = true;
    //   this.isUser = false;
    // } else {
    //   // si no: (cualquier otro caso -->  sin login "" es usuario)
    //   console.log("usuario simple");
    //   this.isAdmin = false;
    //   this.isUser = true;
    // }
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
