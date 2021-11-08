import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {
    /* theme: {
      primary: '#2c3e50',
      secondary: '#1abc9c',
      accent: '#2980b9',
      error: '#e74c3c',
      action: '#23DB2A'
    } */ })

export default new Vuetify({

  theme: {
    themes: {
      light: {
        primary: '#757575',
        secondary: '#757575',
        accent: '#2980b9',
        error: '#e74c3c',
        action: '#212121'
       
      },
    },
  },
});
