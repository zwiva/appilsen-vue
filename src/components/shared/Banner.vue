<template>
  <div>
    <v-card color="" tile class="banner--beer">
      <h4 class="pa-4">
        Si estas en Santiago, hay {{ maxTemperature }}°C, el dia está "{{
          skyStatus
        }}" y te recomendamos tomar una "random"
      </h4>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "banner",
  data: () => ({
    result: null,
    maxTemperature: null,
    skyStatus: null,
    descriptionOptions: [
      "clear sky", // quiero agregar icono
      "few clouds",
      "scattered clouds",
      "broken clouds",
      "shower rain",
      "rain",
      "thunderstorm",
      "snow",
      "mist",
    ],
  }),
  methods: {},
  created() {
    const options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: "Santiago,cl",
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
        "x-rapidapi-key": "583ddad94emsh8172e41c90f0a2ep1b7fa1jsnae58d1478053",
      },
    };
    axios
      .request(options)
      .then((rawdata) => {
        console.log(rawdata.data);
        this.result = JSON.parse(
          rawdata.data.slice(5, rawdata.data.length - 1)
        );
        console.log("result", this.result);
        this.maxTemperature = Math.floor(this.result.main.temp_max);
        this.skyStatus = this.result.weather[0].description;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>
<style scoped>
.banner--beer {
  background: linear-gradient(360deg, rgb(248, 162, 3) 60%, rgb(255, 201, 100));
}
</style>
