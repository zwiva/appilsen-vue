import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import bg from 'vuetify/lib/locale/bg';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { bg },
      current: 'bg',
    },
  icons: {
    iconfont: 'fa4',
  },
});
