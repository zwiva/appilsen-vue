<template>
  <div>
    <div>
      <v-carousel cycle max-width="500">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          height="300px"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <br />
    <v-container class="justify-center text-center">
      <v-row>
        <v-col>
          <h1 class="ma-3">Arma tu cerveza</h1>
          <v-card class="mx-auto" max-width="500">
            <v-img
              class="white--text align-end zoom"
              height="300px"
              src="../assets/imgbeers/home1.jpg"
            >
              <v-card-title>Arma tu cerveza con nosotros</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="amber">
                <router-link :to="{ name: 'CreateBeer' }" dark>
                  <v-icon>mdi-bottle-tonic-skull-outline</v-icon>
                  Aqui</router-link
                >
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <h1 class="ma-3">catalogo de cervezas</h1>
          <v-card class="mx-auto" max-width="500">
            <v-img
              class="white--text align-end zoom"
              height="300px"
              src="../assets/imgbeers/home2.jpg"
            >
              <v-card-title>Arma tu cerveza con nosotros</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="amber">
                <router-link :to="{ name: 'Catalog' }">
                  <v-icon>mdi-cup-water</v-icon>
                  Aqui</router-link
                >
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <h1 class="ma-3">Quienes somos</h1>
          <v-card class="mx-auto" max-width="500">
            <v-img
              class="white--text align-end zoom"
              height="300px"
              src="../assets/imgbeers/home3.jpg"
            >
              <v-card-title>Quienes somos</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="amber">
                <router-link :to="{ name: 'About' }">
                  <v-icon>mdi-account-group</v-icon>
                  Aqui</router-link
                >
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      items: [
        {
          src: "https://cdn.shopify.com/s/files/1/0520/3086/5602/files/novedades-cerveza-artesanal_e3580faf-e1cb-4878-a8cc-32c3c3f5604b_1944x.jpg?v=1622664329",
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0520/3086/5602/files/Mas-de-150-ipas-cerveza-artesanal_2_1944x.jpg?v=1622664193",
        },
        {
          src: "https://ca-times.brightspotcdn.com/dims4/default/0d28423/2147483647/strip/true/crop/1434x800+0+0/resize/840x469!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdf%2F0d%2F550835506f20065da12c46ba2bcc%2Fhoyla-se-acaba-la-cerveza-fria-en-ciudad-de-me-001",
        },
        {
          src: "https://fever.imgix.net/plan/photo/538586aa-e908-11e9-bf03-06551cb39bc6.jpg?w=550&h=550&auto=format&fm=jpg",
        },
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
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
