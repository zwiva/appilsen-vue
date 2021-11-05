<template>
  <div>
    <v-container class="hero">
      <h1 class="font-weight-bold text-left">Quienes somos</h1>

      <br />

      
        <div>
          <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quos
            magnam? Vitae nihil vel voluptatum delectus temporibus voluptatibus,
            alias illum eaque ducimus laudantium fugiat ut fuga <br />excepturi
            tenetur repellendus velit. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eos, quos magnam? Vitae nihil vel voluptatum
            delectus temporibus <br />
            voluptatibus, alias illum eaque ducimus laudantium fugiat ut fuga
            excepturi tenetur repellendus velit.
            <iframe
            class="player"
            width="50%"
            
          
            src="https://www.youtube.com/embed/guHhryViFxY"
            title="YouTube video player"
            frameborder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
            
          
          
        
              <!-- <p class="text-left my-2"> -->
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
      

      <br />
      <br />

      <div>
        <v-img
        class="imgbtn"
          src="../assets/imgbeers/logoAppilsen.jpg"
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
    shape-outside: attr(src url);
    shape-image-threshold: 0.1;
      }

/* .player {

   position: relative;
  margin-left: 5rem;
  margin-top: 3rem; 
   overflow: hidden; 
} */

.imgbtn {
  justify-content: center;
  margin-left: 20rem;
  margin-top: 1rem;
  
}

h1 {
  margin-left: 5rem;
}




</style>
