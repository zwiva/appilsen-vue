<template>
  <div class="content-grid mx-auto">
    <v-card tile class="banner--beer mt-4">
      <v-row class="justify-center align-center mx-4">
        <div class="mx-2">
          <span class="align-center">
            Si estas en {{ region }}, hay {{ maxTemperature }}°C, el dia está
            <span style="font-size: 1.5em">
              {{ weatherIcon }}
            </span>
            y te recomendamos armar una
            <v-btn small dark @click="goToRandom" class="mb-1">
              <span style="color: white">
                {{ randomBeer }}
              </span>
            </v-btn>
          </span>
        </div>
        <div>
          <v-select
            class="pt-4"
            label="Cambia ciudad"
            dense
            v-model="region"
            :items="regions"
            @change="setRegion(region)"
          >
          </v-select>
        </div>
      </v-row>
    </v-card>
    <v-dialog v-model="showDialogRandom" width="300px">
      <v-card class="pa-6 justify-center">
        <h3 class="subtitle_section">Atencion:</h3>
        <p class="pa-3 text-center">
          El numero de esta cerveza es:
          <strong>
            {{ this.$store.state.sesion.recommendedBeer }}
          </strong>
        </p>

        <div class="d-flex justify-center">
          <v-btn color="amber" @click="showDialogRandom = false">Ok</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
import store from "../../store";
export default {
  name: "banner",
  data: () => ({
    result: null,
    maxTemperature: null,
    skyStatus: null,
    descriptionOptions: {
      "clear sky": "☀️", // quiero agregar icono
      "few clouds": "☁️",
      "scattered clouds": "🌤️",
      "broken clouds": "🌥️",
      "overcast clouds": "🌥️",
      "shower rain": "🌦️",
      rain: "🌧️",
      thunderstorm: "🌩️",
      snow: "❄️",
      mist: "🌫️",
    },
    randomBeer: "",
    randomBeerAbv: "",
    weatherIcon: "",
    regions: [
      "Santiago",
      "Arica",
      "Valparaiso",
      "Pucon",
      "Punta Arenas",
      "Porvenir",
    ],
    region: "Santiago",
    floor: null,
    showDialogRandom: false,
  }),
  methods: {
    //MOSTRAR CLIMA CON EMOJI
    setIconWeather(status) {
      console.log("status", status);
      switch (status) {
        case "clear sky":
          this.weatherIcon = this.descriptionOptions["clear sky"];
          break;
        case "few clouds":
          this.weatherIcon = this.descriptionOptions["few clouds"];
          break;
        case "scattered clouds":
          this.weatherIcon = this.descriptionOptions["scattered clouds"];
          break;
        case "overcast clouds":
          this.weatherIcon = this.descriptionOptions["overcast clouds"];
          break;
        case "broken clouds":
          this.weatherIcon = this.descriptionOptions["broken clouds"];
          break;
        case "shower rain":
          this.weatherIcon = this.descriptionOptions["shower rain"];
          break;
        case "rain":
          this.weatherIcon = this.descriptionOptions.rain;
          break;
        case "thunderstorm":
          this.weatherIcon = this.descriptionOptions.thunderstorm;
          break;
        case "snow":
          this.weatherIcon = this.descriptionOptions.snow;
          break;
        case "mist":
          this.weatherIcon = this.descriptionOptions.mist;
          break;
        default:
          break;
      }
    },
    // MOSTRAR CLIMA DE ACUERDO A REGION ESCOGIDA
    setRegion(region) {
      this.region = region;
      const options = {
        method: "GET",
        url: "https://community-open-weather-map.p.rapidapi.com/weather",
        params: {
          q: `${this.region},cl`, //Arica, Santiago, Pucon, Punta Arenas, Antartica
          lat: "0",
          lon: "0",
          callback: "test",
          id: "2172797",
          lang: "null",
          units: "metric",
          mode: "xml",
        },
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "c2f27815c0msha15f4594d3f25acp12ea13jsna3099c739b37",
        },
      };
      axios
        .request(options)
        .then((rawdata) => {
          // console.log(rawdata.data);
          this.result = JSON.parse(
            rawdata.data.slice(5, rawdata.data.length - 1)
          );
          // console.log("result", this.result);
          this.maxTemperature = Math.floor(this.result.main.temp_max);
          this.skyStatus = this.result.weather[0].description;
          this.setIconWeather(this.skyStatus);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    goToRandom() {
      store.dispatch("sesion/setRecommendedBeer", this.floor);
      if (this.$router.history.current.path != "/random") {
        this.$router.push("/random");
      } else {
        this.showDialogRandom = true;
      }
    },
  },
  mounted() {
    // CARGAR CLIMA -> descomentar miercoles

    //   const options = {
    //     method: "GET",
    //     url: "https://community-open-weather-map.p.rapidapi.com/weather",
    //     params: {
    //       q: `${this.region},cl`,
    //       lat: "0",
    //       lon: "0",
    //       callback: "test",
    //       id: "2172797",
    //       lang: "null",
    //       units: "metric",
    //       mode: "xml",
    //     },
    //     headers: {
    //       "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    //       "x-rapidapi-key": "c2f27815c0msha15f4594d3f25acp12ea13jsna3099c739b37",
    //     },
    //   };
    //   axios
    //     .request(options)
    //     .then((rawdata) => {
    //       // //console.log(rawdata.data);
    //       this.result = JSON.parse(
    //         rawdata.data.slice(5, rawdata.data.length - 1)
    //       );
    //       // console.log("result", this.result);
    //       this.maxTemperature = Math.floor(this.result.main.temp_max);
    //       this.skyStatus = this.result.weather[0].description;
    //       this.setIconWeather(this.skyStatus);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    //------------------------------------------------
    //TRAER CERVEZA RANDOM:
    let rand = Math.random() * (300 - 1) + 1;
    this.floor = Math.floor(rand);
    // console.log("floor", this.floor);

    axios
      .get(`https://api.punkapi.com/v2/beers/${this.floor}`)
      .then((response) => {
        let data = response.data[0];
        // console.log("random beer", data);
        this.randomBeer = data.name;
      })
      .catch((e) => console.log(e));
  },
};
</script>
<style scoped>
.banner--beer {
  background: linear-gradient(360deg, rgb(248, 162, 3) 60%, rgb(255, 201, 100));
}
</style>
