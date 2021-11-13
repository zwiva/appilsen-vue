<template>
  <div class="content-grid mx-auto">
    <h2 class="title_section text-center">Quienes somos</h2>
    <v-container class="hero">
      <div class="mx-6">
        <v-col class="text-left" cols="12" sm="12" md="8">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quos
            magnam? Vitae nihil vel voluptatum delectus temporibus voluptatibus,
            alias illum eaque ducimus laudantium fugiat ut fuga excepturi
            tenetur repellendus velit. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eos, quos magnam? Vitae nihil vel voluptatum
            delectus temporibus voluptatibus, alias illum eaque ducimus
            laudantium fugiat ut fuga excepturi tenetur repellendus velit.
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="11" lg="6" xl="6">
          <iframe
            height="400px"
            width="100%"
            max-width="700px"
            src="https://www.youtube.com/embed/guHhryViFxY"
            title="YouTube video player"
            frameborder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>

          <!-- <iframe
            width="700"
            height="490"
            src="https://www.youtube.com/embed/guHhryViFxY"
            title="YouTube video player"
            frameborder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> -->
        </v-col>
        <v-col class="text-left" cols="12" sm="12" md="6">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quos
            magnam? Vitae nihil vel voluptatum delectus temporibus voluptatibus,
            alias illum eaque ducimus laudantium fugiat ut fuga excepturi
            tenetur repellendus velit.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quos
            magnam? Vitae nihil vel voluptatum delectus temporibus voluptatibus,
            alias illum eaque ducimus laudantium fugiat ut fuga excepturi
            tenetur repellendus velit.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            class="mx-auto"
            src="../assets/imgbeers/logoAppilsen.jpg"
            height="250px"
            width="250px"
            ><router-link :to="{ name: 'Home' }"> </router-link>
          </v-img>
        </v-col>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {
    // data: () => ({}),
  },
};
</script>

<style>
.hero {
  background-image: url("../assets/imgbeers/bg-beer5.jpg");
  background-repeat: no-repeat;
  /* background-size: cover; */

  background-position: center top;
  
  background-size: cover;
  color: white;
  /* padding-bottom: 10rem; */
}
</style>
