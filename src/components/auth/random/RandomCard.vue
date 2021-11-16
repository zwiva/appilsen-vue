<template>
  <div>
    <v-card class="mx-auto" max-width="800px" rounded dense>
      <div class="d-flex flex-column pa-5">
        <v-card-title class="pt-0"
          ><strong>Numero: </strong> {{ beerDeepData.id }}</v-card-title
        >
        <v-card-title class="pt-0"
          ><strong>Nombre: </strong> {{ beerDeepData.name }}</v-card-title
        >
        <v-img
          :src="beerDeepData.image_url"
          max-width="100px"
          contain
          class="mx-auto"
        />
        <v-card-text class="pb-0"
          ><strong>Estilo: </strong> {{ beerDeepData.tagline }}</v-card-text
        >
        <v-card-text class="pb-0"
          ><strong>Descripcion: </strong>
          {{ beerDeepData.description }}</v-card-text
        >
        <v-card-text class="pb-0"
          ><strong>Alcohol: </strong> {{ beerDeepData.abv }}</v-card-text
        >
        <v-card-text class="pb-0"
          ><strong>IBU: </strong> {{ beerDeepData.ibu }}</v-card-text
        >
        <v-card-text class="pb-0"
          ><strong>Ingredientes: </strong>
          <div class="mx-4">
            <h4 class="mt-2">Lúpulos:</h4>
            <div v-for="hop in beerDeepData.ingredients.hops" :key="hop.id">
              <li>
                {{ hop.name }}: {{ hop.amount.value }} {{ hop.amount.unit }} |
                Cuando agregar: {{ hop.add }} | Para dar: {{ hop.attribute }}
              </li>
            </div>
            <h4 class="mt-2">Malta:</h4>
            <div
              v-for="eachmalt in beerDeepData.ingredients.malt"
              :key="eachmalt.id"
            >
              <li>
                {{ eachmalt.name }}: {{ eachmalt.amount.value }}
                {{ eachmalt.amount.unit }}
              </li>
            </div>
            <h4 class="mt-2">Levadura:</h4>
            <li>{{ beerDeepData.ingredients.yeast }}</li>
          </div>
        </v-card-text>

        <v-card-text class="pb-0"
          ><strong>Metodo: </strong>
          <div class="mx-4">
            <h4 class="mt-2">Fermentacion:</h4>
            <li>
              Temperatura: {{ beerDeepData.method.fermentation.temp.value }}°
              {{ beerDeepData.method.fermentation.temp.unit }}
            </li>
            <h4 class="mt-2">Temperatura de mezcla:</h4>

            <div
              v-for="each_mash_temp in beerDeepData.method.mash_temp"
              :key="each_mash_temp.id"
            >
              <li>
                {{ each_mash_temp.temp.value }}°
                {{ each_mash_temp.temp.unit }} | Duracion:
                {{
                  each_mash_temp.duration
                    ? each_mash_temp.duration
                    : "desconocido"
                }}
              </li>
            </div>
            <h4 class="mt-2">Giro:</h4>
            <li>
              {{
                beerDeepData.method.twist
                  ? beerDeepData.method.twist
                  : "desconocido"
              }}
            </li>
          </div>
        </v-card-text>
        <v-card-text class="pb-0"
          ><strong>Puedes acompañarla con comidas como: </strong>
          <div v-for="food in beerDeepData.food_pairing" :key="food.id">
            <li>
              {{ food }}
            </li>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Randomcard",
  data: () => ({}),
  methods: {},
  props: {
    beerDeepData: { type: Object, require: true },
  },
};
</script>
