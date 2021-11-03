<template>
  <div>
    <v-container class="hero">
      <h1 class="font-weight-bold text-left">Quienes somos</h1>

      <br />

      <v-row>
        <div>
          <p class="text-left my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quos
            magnam? Vitae nihil vel voluptatum delectus temporibus voluptatibus,
            alias illum eaque ducimus laudantium fugiat ut fuga <br />excepturi
            tenetur repellendus velit. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eos, quos magnam? Vitae nihil vel voluptatum
            delectus temporibus <br />
            voluptatibus, alias illum eaque ducimus laudantium fugiat ut fuga
            excepturi tenetur repellendus velit.
          </p>
        </div>

        <br />

        <div class="player embed responsive">
          <iframe
            width="700"
            height="490"
            src="https://www.youtube.com/embed/guHhryViFxY"
            title="YouTube video player"
            frameborder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br />
        </div>

        <br />
        <div>
          <p class="text-left my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quos
            magnam? Vitae nihil vel voluptatum delectus temporibus voluptatibus,
            <br />
            alias illum eaque ducimus laudantium fugiat ut fuga excepturi
            tenetur repellendus velit. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. <br />
            Eos, quos magnam? Vitae nihil vel voluptatum delectus temporibus
            voluptatibus, alias illum eaque ducimus laudantium fugiat ut fuga
            <br />
            excepturi tenetur repellendus velit.
          </p>
        </div>
      </v-row>

      <br />
      <br />

      <div>
        <v-img
        class="imgbtn"
          src="@/assets/imgbeers/logoAppilsen.png"
          height="250px"
          width="250px"
          ><router-link :to="{ name: 'Home' }"> </router-link>
        </v-img>
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
  background-image: url("../assets/imgbeers/bg-beer4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  color: white;
  padding-bottom: 10rem;
}

.player {
  float: left;
  position: relative;
  margin-left: 5rem;
  margin-top: 3rem;
  overflow: hidden;
}

.imgbtn {
  justify-content: center;
  margin-left: 20rem;
  margin-top: 1rem;
  
}

h1 {
  margin-left: 5rem;
}

p {
  margin-left: 5rem;
}


</style>
