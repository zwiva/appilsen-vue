<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";
export default {
  name: "MapCanvas",
  components: {
    MglMap,
  },
  data: () => ({
    accessToken:
      "pk.eyJ1IjoiYW5kcmUwOSIsImEiOiJja3ZmaGpjYXZicWV0MnduenExamtra3UxIn0.hP-Qt5fSgf5qr4HF5EYGZQ", // your access token. Needed if you using Mapbox maps
    mapStyle: {
      version: 8,
      name: "Meteorites",
      metadata: {
        "mapbox:origin": "basic-template-v1",
        "mapbox:autocomposite": true,
        "mapbox:type": "template",
        "mapbox:sdk-support": {
          js: "0.45.0",
          android: "6.0.0",
          ios: "4.0.0",
        },
      },
      center: [74.24426803763072, -2.2507114487818853],
      zoom: 0.6851443156248076,
      bearing: 0,
      pitch: 0,
      sources: {
        composite: {
          url: "mapbox://mapbox.mapbox-streets-v8,examples.0fr72zt8",
          type: "vector",
        },
      },
      sprite: "mapbox://sprites/examples/cjikt35x83t1z2rnxpdmjs7y7",
      glyphs: "mapbox://fonts/{username}/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "background",
          type: "background",
          layout: {},
          paint: {
            "background-color": [],
          },
        },
      ],
      created: "2015-10-30T22:18:31.111Z",
      id: "cjikt35x83t1z2rnxpdmjs7y7",
      modified: "2015-10-30T22:22:06.077Z",
      owner: "examples",
      visibility: "public",
      draft: false,
    }, // your map style
  }),
  created() {
    this.mapbox = Mapbox;
  },
  methods: {},
  props: {},
};
</script>

<style>
</style>